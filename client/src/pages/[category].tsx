import { VALID_DOMAIN } from "src/environment";

import { FC, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Grid } from "@mantine/core";

import { ProductsCard } from "@/components/productCard";
import { CategorySearchFilter } from "@/components/searchFilters";
import { CategoryBrandFilter } from "@/components/brandFilter";
import { CategoryRatingFilter } from "@/components/sortFilter";

import { getEndpoint } from "./api/utils";
import { isThereProduct } from "@/utils";
import { filterStructure } from "@/refs";

import type { CategoryFiltersProps, CategoryProps, CategoryServerSideProps, FilterFunction, ProductSortFunction } from "additional";
import { SortBy } from "enums";


const CategoryFilters: FC<CategoryFiltersProps> = ({ children }) => {
  return (    
    <Grid.Col span={0} lg={2.5} className='my-2'>
      <div className='lg:flex lg:flex-col gap-y-6 px-2 rounded-sm bg-[#F1F3F5] h-full shadow-[0_15px_0_15px_1_165px_#777777] text-gray-700 border-4 border-solid border-[#f5f5f5]'>
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


export const sortFunctions: Record<string, ProductSortFunction> = {
  [SortBy.DATE]: (a, b) => { 
    const dateOfA = new Date(a.createdAt).getTime()
    const dateOfB = new Date(b.createdAt).getTime()
    return  dateOfA - dateOfB
  },
  [SortBy.RATING]: (a, b) => b.rating - a.rating,
  [SortBy.PRICE]: (a, b) => a.price - b.price
}


const Category: FC<CategoryProps> = ({ products, brands }) => {
  const [filters, setFilters] = useState<Record<string, null | FilterFunction>>(filterStructure)
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.RATING)
  const router = useRouter()
  const { query } = router

  const searchItems = useMemo(() => {
    if (!filters.name && !filters.brand) return [...products].sort(sortFunctions[sortBy])
  
    const filterFunctions = Object.values(filters).filter(Boolean)
    let matches = products

    filterFunctions.forEach((callback) => {
      matches = matches.filter(callback!)
    })

    return matches.sort(sortFunctions[sortBy])
  }, [products, filters, sortBy])

  const updateNameFilter = (name: FilterFunction | null) => setFilters(filters => ({ ...filters, name }))
  const updateBrandFilter = (brand: FilterFunction | null) => setFilters(filters => ({ ...filters, brand }))
  const updateRatingFilter = (sortType: SortBy) => setSortBy(sortType)

  useEffect(() => {
    setFilters({ ...filterStructure })
    setSortBy(SortBy.RATING)
  },[products])
       
  return (
    <Grid
      className='w-full'
      gutter={9}
      gutterXs={16}
      gutterSm={16}
      gutterXl={24}
    >
      <CategoryFilters>
        <CategorySearchFilter onChange={updateNameFilter} currentCategory={query.category} />
        <CategoryBrandFilter onChange={updateBrandFilter} currentCategory={query.category} brands={brands}/>
        <CategoryRatingFilter onChange={updateRatingFilter} sortBy={sortBy} />
      </CategoryFilters>
      <CategoryProducts products={searchItems} />        
    </Grid>
  );
};


export async function getServerSideProps({ params }: CategoryServerSideProps) {
  const serverObject = { props: {} }
  if (typeof params.category !== "string") return serverObject

  const getProductData = getEndpoint(`${VALID_DOMAIN}/api/v1/products`)

  // Implement AbortController
  return await Promise.all([
    getProductData('/brands'), // static-data
    getProductData(`?category=${params.category}&limit=100`)
    
  ]).then(([brands, products]) => {
    serverObject.props = { ...products, ...brands }
    return serverObject

  }).catch(()=> {
    serverObject.props = { products: [] }
    return serverObject
  })
}

export default Category;
