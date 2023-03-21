import { useMemo, useState } from "react";

import { Grid } from "@mantine/core";

import { ProductsCard } from "@/components/productCard";
import { getEndpoint } from "./api/utils";

import { CategoryFiltersProps, CategoryProps, CategoryServerSideProps, Products, productSearchHandler } from "additional";
import { VALID_DOMAIN } from "src/environment";


const isThereProduct = (products: Products[]) =>
  Array.isArray(products) && products.length > 0;


const CategoryFilters: React.FC<CategoryFiltersProps> = ({ onSearch, inValue }) => {
  return (
    <Grid.Col span={0} lg={2}>
      <input value={inValue} onChange={onSearch} />
    </Grid.Col>
  );
};


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
};


const Category: React.FC<CategoryProps> = ({ products }) => {
  const [productSearch, setSearch] = useState('')
  
 const searchItems = useMemo(() => products.filter(({ name }) => {
   const productName = name.toLowerCase()
   return productName.includes(productSearch.toLowerCase())
 }),[productSearch])
  
  const productSearchHandler = (e: productSearchHandler) => {
    setSearch(e.target.value)
  }
  
  return (
    <Grid
      style={{ width: "100%" }}
      gutter={9}
      gutterXs={16}
      gutterSm={16}
      gutterXl={24}
    >
      <CategoryFilters onSearch={productSearchHandler} inValue={productSearch} />
      <CategoryProducts products={searchItems} />
    </Grid>
  );
};


export async function getServerSideProps({ params }: CategoryServerSideProps) {
  if (typeof params.category !== "string") return { props: {} };

  const getProducts = getEndpoint(`${VALID_DOMAIN}/api/v1/products?category=`);
  const products = await getProducts(params.category);
  return {
    props: {
      ...products,
    },
  };
}

export default Category;
