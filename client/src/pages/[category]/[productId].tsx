import { VALID_DOMAIN } from "@/environment";

import Image from "next/image";

import { Layout } from "@/components/layout";
import { getEndpoint } from "../api/utils";

import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import type { GetServerSidePropsContext } from "next";
import type { NextPageWithLayout } from "_app-types";
import type { ProductProps } from "additional";

const Product: NextPageWithLayout<ProductProps> = ({ product }) => {
  const { brand, category, image, name, price, rating, description, discount } = product;
  return (<div></div>)
};

Product.getLayout = function getLayout (page, pageProps) {
  return <Layout title='Product' section={pageProps?.product?.name}>{page}</Layout>
}

export async function getServerSideProps({ params }: GetServerSidePropsContext<Params>) {
  if (!params || !params.productId) return { notFound: true }

  const getProductByID = getEndpoint(`${VALID_DOMAIN}/api/v1/products/`)
  const encodedID = encodeURI(params.productId)

  return await getProductByID(encodedID)
    .then((product) => {
      return { props: { ...product } }
    })
    .catch(() => {
      return { notFound: true }
    })
}

export default Product
