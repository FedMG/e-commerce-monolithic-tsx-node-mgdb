import { VALID_DOMAIN } from "@/environment"

import { Layout } from "@/components/layout"
import { BreadCrumbs } from "@/components/breadCrumbs"

import { setUpperCase } from "@/utils"
import { getEndpoint } from "../api/utils"

import type { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import type { Product, ProductProps } from "additional"
import type { GetServerSidePropsContext } from "next"
import type { NextPageWithLayout } from "_app-types"
import type { FC } from "react"


const ProductHeader: FC<Pick<Product, 'category' | 'brand' | 'name'>> = ({ category, brand, name }) => {
  return (
    <div className="col-span-2 pb-6">
      <div className="grid grid-cols-2 gap-4 bg-slate-600 rounded-xl gap-x-1">
        <div className="bg-gray-50 p-4 rounded-l-xl rounded-r-4xl">
          <BreadCrumbs category={category} brand={brand} name={name} />
        </div>
        <div className="p-3 flex items-center justify-end"><span className="sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl text-white font-mono dark:text-white font-semibold leading-tight">{setUpperCase(brand)}</span></div>
      </div>
    </div>
    )
}


const Product: NextPageWithLayout<ProductProps> = ({ product }) => {
  const { brand, category, image, name, price, rating, description, discount } = product

  return (
    <div className="py-4 px-10 bg-gray-100">
      <ProductHeader { ...{category, brand, name} } />
    <div className="grid grid-cols-2 gap-4 bg-gray-100 rounded-xl">
    </div>
    </div>
  )
}

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
