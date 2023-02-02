import { useRouter } from "next/router";
import { Grid } from "@mantine/core";

import { ProductsCard } from "@/components/cards";
import { getEndpoint } from "./api/utils";
import { CategoryProps, CategoryServerSideProps } from "additional";


const Category: React.FC<CategoryProps> = ({ products }) => {
  const router = useRouter();
  const { category } = router.query;
  
  if (!category) {
    return <div>Loading...</div>
  }

  return (
    <Grid
      gutter={6}
      gutterXs={16}
      gutterSm={20}
      gutterXl={24}
    >
      <Grid.Col
        span={0}
        lg={2}
      >
        {<h3>Filters</h3>}
      </Grid.Col>
      <Grid.Col
        span={12}
        lg={10}
        display='flex'
        style={{ flexWrap: "wrap" }}
      >
        {products.map(({ name, price, rating, ...element}) => {
          return (
            <Grid.Col span={4} sm={3} md={3} key={element["_id"]}>
              <ProductsCard element={{ name, price, rating}} />
            </Grid.Col>
          );
        })}
      </Grid.Col>
    </Grid>
  );
};

const getProducts = getEndpoint('ek5sqy-3005.preview.csb.app/api/v1/products?category=')

export async function getServerSideProps({ params }: CategoryServerSideProps) {
  const products = await getProducts(params.category)
  return {
    props: {
      ...products,
    },
  }
}

export default Category;
