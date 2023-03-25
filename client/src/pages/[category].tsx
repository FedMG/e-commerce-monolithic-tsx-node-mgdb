import { VALID_DOMAIN } from "src/environment";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Grid } from "@mantine/core";

import { ProductsCard } from "@/components/productCard";
import { CategorySearchFilter } from "@/components/searchFilters";
import { getEndpoint } from "./api/utils";
import { isThereProduct } from "@/utils";

import { CategoryFiltersProps, CategoryProps, CategoryServerSideProps, Filters } from "additional";
import { filterStructure } from "@/refs";


const CategoryFilters: React.FC<CategoryFiltersProps> = ({ children }) => {
  return (
    <Grid.Col span={0} lg={2}>
      {children}
    </Grid.Col>
  )
}


const CategoryProducts: React.FC<CategoryProps> = ({ products }) => {   
  return (
    <Grid.Col span={12} lg={10} display="flex" style={{ flexWrap: "wrap" }}>
      {isThereProduct(products) &&
        products.map(({ name, price, rating, image, discount, ...element }) => (
          <Grid.Col span={6} xs={4} sm={3} md={3} key={element["_id"]}>
            <ProductsCard element={{ name, price, rating, image, discount }} />
          </Grid.Col>
        ))}
    </Grid.Col>
  );
}


const Category: React.FC<CategoryProps> = ({ products }) => {
  const [filters, setFilters] = useState<Filters>(filterStructure)
  
  const router = useRouter()
  const { query } = router

  const searchItems = useMemo(() => products.filter(({ name }) => {
    if (!filters.name) return products
    const productName = name.toLowerCase()
    return productName.includes(filters.name.toLowerCase())
}),[filters.name, query.category])
  
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
        <CategorySearchFilter onChange={(name) => setFilters(filters => ({ ...filters, name }))} currentCategory={query.category} />
      </CategoryFilters>
      <CategoryProducts products={searchItems} />
    </Grid>
  );
};


export async function getServerSideProps({ params }: CategoryServerSideProps) {
  const serverObject = { props: {} }
  if (typeof params.category !== "string") return serverObject
  const getProducts = getEndpoint(`${VALID_DOMAIN}/api/v1/products?category=`)
  
  return await getProducts(params.category)
  .then((products) => {
    serverObject.props = { ...products }
    return serverObject

  }).catch(()=> {
    serverObject.props = { products: [] }
    return serverObject
  })
}

export default Category;
