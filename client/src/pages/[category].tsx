import { Grid } from "@mantine/core";

import { ProductsCard } from "@/components/cards";
import { getEndpoint } from "./api/utils";

import { CategoryProps, CategoryServerSideProps, Products } from "additional";
import { FC, ReactElement } from "react";

import { VALID_DOMAIN } from "src/environment";


const renderProducts: FC<Products> = ({
  name,
  price,
  rating,
  image,
  ...element
}): ReactElement => {
  return (
    <Grid.Col span={4} sm={3} md={3} key={element["_id"]}>
      <ProductsCard element={{ name, price, rating, image }} />
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
        {products.map(renderProducts)}
      </Grid.Col>
    </Grid>
  );
};

export async function getServerSideProps({ params }: CategoryServerSideProps) {
  if (typeof params.category !== "string") return { props: {} };
  let category = params.category;

  // the query category parameters must not has spaces, only hyphens-scores
  if (category.split("-").length > 0) {
    category = params.category.split("-").join(" ");
  }

  const getProducts = getEndpoint(`${VALID_DOMAIN}/api/v1/products?category=`);
  const products = await getProducts(params.category);
  return {
    props: {
      ...products,
    },
  };
}

export default Category;
