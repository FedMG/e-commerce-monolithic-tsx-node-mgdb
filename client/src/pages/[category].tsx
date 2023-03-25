import { VALID_DOMAIN } from "src/environment";

import { FC, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Grid } from "@mantine/core";

import { ProductsCard } from "@/components/productCard";
import { CategorySearchFilter } from "@/components/searchFilters";
import { getEndpoint } from "./api/utils";
import { isThereProduct } from "@/utils";

import { CategoryFiltersProps, CategoryProps, CategoryServerSideProps, Filters } from "additional";
import { filterStructure } from "@/refs";

const CategoryFilters: FC<CategoryFiltersProps> = ({ children }) => {
  return (    
    <Grid.Col span={0} lg={2.5} className='my-2'>
      <div className='px-2 rounded-sm bg-[#F1F3F5] h-full shadow-[0_15px_0_15px_1_165px_#777777] text-gray-700 border-4 border-solid border-[#f5f5f5]'>
      {children}
      </div>
    </Grid.Col>
  )
}


const CategoryProducts: FC<Pick<CategoryProps, 'products'>> = ({ products }) => {   
  return (
    <Grid.Col span={12} lg={9.5} display="flex" style={{ flexWrap: "wrap" }}>
      {isThereProduct(products) &&
        products.map(({ name, price, rating, image, discount, ...element }) => (
          <Grid.Col span={6} xs={4} sm={3} md={3} key={element["_id"]}>
            <ProductsCard element={{ name, price, rating, image, discount }} />
          </Grid.Col>
        ))}
    </Grid.Col>
  );
}


const Category: FC<CategoryProps> = ({ products, categories, brands }) => {
  const [filters, setFilters] = useState<Filters>(filterStructure)
  const router = useRouter()
  const { query } = router

  const searchItems = useMemo(() => products.filter(({ name }) => {
    if (!filters.name) return products
    const productName = name.toLowerCase()
    return productName.includes(filters.name.toLowerCase())
}),[filters.name, query.category])

  const setChanges = (name: string) => setFilters(filters => ({ ...filters, name }))
  
  useEffect(() => {
    setFilters({ ...filterStructure })
  },[query.category])
       
  return (
    <Grid
      style={{ width: "100%" }}
      gutter={9}
      gutterXs={16}
      gutterSm={16}
      gutterXl={24}
    >
      <CategoryFilters>
        <CategorySearchFilter onChange={setChanges} currentCategory={query.category} />
      </CategoryFilters>
      <CategoryProducts products={searchItems} />
    </Grid>
  );
};



export async function getServerSideProps({ params }: CategoryServerSideProps) {
  const serverObject = { props: {} }
  if (typeof params.category !== "string") return serverObject

  const getProductData = getEndpoint(`${VALID_DOMAIN}/api/v1/products`)

  return await Promise.all([
    getProductData('/brands'), // static-data
    getProductData('/categories'), // static-data
    getProductData(`?category=${params.category}`)
    
  ]).then(([brands, categories, products]) => {
    serverObject.props = { ...products, ...categories, ...brands }
    return serverObject

  }).catch(()=> {
    serverObject.props = { products: [] }
    return serverObject
  })
}

export default Category;
