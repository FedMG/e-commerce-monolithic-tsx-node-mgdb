import { VALID_DOMAIN } from "@/environment"

import Image from "next/image"

import { Layout } from "@/components/layout"
import { BreadCrumbs } from "@/components/breadCrumbs"
import { ProductRating } from "@/components/productRating"

import { getPriceWithDiscount, setUpperCase } from "@/utils"
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


const ProductImage: FC<Pick<Product, 'image' | 'name'>> = ({ image, name }) => {
  return (
    <div className="col-span-1 grid grid-rows-1 gap-4 p-2">
      <div className="bg-gray-50 p-4 flex justify-center align-items rounded-xl">
        <Image
          src={image.src}
          width={410}
          height={0}
          alt={name}
          className='rounded-xl'
        />
      </div>
    </div>
  )
}


const ProductMainInfo: FC<Pick<Product, "name" | "price" | "rating" | "discount">> = ({ name, price, rating, discount }) => {
  return (
    <div className="col-span-1 grid grid-rows-1 gap-4 p-2">
      <div className="col-span-1 flex flex-col gap-4 bg-gray-50 rounded-xl p-6">
        <div className="pt-6 text-md md:text-lg lg:text-1xl xl:text-3xl font-medium leading-tight">
          {setUpperCase(name)}
        </div>
        <ProductRating num={rating} />
        <div className="px-4 py-2">
          <div className="w-full relative">
            <p className="-ml-2 select-none dark:text-white light:text-gray-400 text-gray-600 text-sm md:text-md lg:text-xl font-medium">
              <del>${price}</del>
            </p>
            <div className="flex w-full justify-content align-items">
              <div className="flex gap-3">
                <span className="font-semibold dark:text-white light:text-gray-400 text-md md:text-lg lg:text-3xl xl:text-3xl">
                  ${getPriceWithDiscount(discount, price)}
                </span>
                <span className="text-green-600 dark:text-green-500 light:text-green-700 font-medium text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl">
                  -{discount}% OFF
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-end h-full">
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none active:bg-blue-600 font-medium rounded-lg text-sm md:text-md lg:text-lg md:px-5 md:py-2.5 px-4 py-2 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Buy now
          </button>
          <button
            type="button"
            className="text-blue-600 border-4 border-blue-600 hover:border-blue-700 hover:bg-blue-700 active:bg-blue-600 active:border-blue-600 hover:text-white focus:outline-none font-medium rounded-lg md:px-5 md:py-2.5 text-sm md:text-md lg:text-lg px-4 py-2 inline-flex items-center justify-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Add to cart
          </button>
        </div>
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
        <ProductImage image={image} name={name} />
        <ProductMainInfo { ...{name, rating, price, discount} } />
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
