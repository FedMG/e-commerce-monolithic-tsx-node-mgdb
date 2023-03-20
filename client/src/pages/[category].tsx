import { Grid } from "@mantine/core";

import { ProductsCard } from "@/components/productCard";
import { getEndpoint } from "./api/utils";

import { CategoryProps, CategoryServerSideProps, Products } from "additional";
import { FC, ReactElement } from "react";

import { VALID_DOMAIN } from "src/environment";

const isThereProduct = (products: Products[]) =>
  Array.isArray(products) && products.length > 0;

const renderProducts: FC<Products> = ({
  name,
  price,
  rating,
  image,
  discount,
  ...element
}): ReactElement => {
  return (
    <Grid.Col span={4} sm={3} md={3} key={element["_id"]}>
      <ProductsCard element={{ name, price, rating, image, discount }} />
    </Grid.Col>
  );
};

const Category: React.FC<CategoryProps> = ({ products }) => {
  return (
    <Grid gutter={6} gutterXs={16} gutterSm={20} gutterXl={24}>
      <Grid.Col span={0} lg={2}>
        {<h3>Filters</h3>}
      </Grid.Col>
      <Grid.Col span={12} lg={10} display="flex" style={{ flexWrap: "wrap" }}>
        {isThereProduct(products) && products.map(renderProducts)}
      </Grid.Col>
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
