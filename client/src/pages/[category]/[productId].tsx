import { VALID_DOMAIN } from '@/environment'

import Image from 'next/image'
import { useCart } from '@/hooks/useCart'

import { Layout } from '@/components/layout'
import { Heart } from '@/components/heart'
import { BreadCrumbs } from '@/components/breadCrumbs'
import { ProductDiscountPrice } from '@/components/productDiscount'
import { ProductClothingSizes } from '@/components/productClothingSizes'
import { ProductClothingColors } from '@/components/productClothingColors'
import { ProductsNumberInput } from '@/components/productNumberInput'
import { ProductButton } from '@/components/productButton'
import { ProductMainInfoHeader } from '@/components/productMainInfoHeader'
import { CartIcon } from '@/components/SVGIcons'
import { Text } from '@/components/Text'

import { getEndpoint } from '../api/utils'
import { setUpperCase } from '@/utils'

import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import type { Product as ProductObject, ProductProps } from 'additional'
import type { NextPageWithLayout } from '_app-types'
import type { FC, ReactElement } from 'react'

// later refactor all this code
const ProductHeader: FC<Pick<ProductObject, 'category' | 'brand' | 'name'>> = ({ category, brand, name }): ReactElement => {
  return (
    <div className='col-span-2 pb-4 sm:pb-6'>
      <div className='flex rounded-xl'>
        <div className='bg-gray-100 shadow-sm border-x border-y p-4 rounded-xl sm:rounded-r-none sm:rounded-l-xl flex-1'>
          <BreadCrumbs category={category} brand={brand} name={name} />
        </div>
        <div className='p-3 rounded-r-xl border-r border-y shadow-sm bg-gradient-to-t from-gray-300 via-gray-50 to-gray-300 hidden sm:flex items-center'>
          <span className='text-slate-800 sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold leading-tight'>{setUpperCase(brand)}</span>
          {/* <Text.Gradient from='from-orange-500' to='to-blue-600'>{setUpperCase(brand)}</Text.Gradient> */}
        </div>
      </div>
    </div>
  )
}

const ProductImage: FC<Pick<ProductObject, 'image' | 'name' | 'rating'>> = ({ image, name, rating }): ReactElement => {
  return (
    <div className='px-4 pt-1 sm:p-0 col-span-2 sm:col-span-1 lg:col-span-3 grid lg:grid-cols-5 bg-gray-100 rounded-t-xl sm:rounded-xl grid-rows-1 border shadow-sm'>
      {/* lg:col-start-2 lg:col-end-5 */}
      <ProductMainInfoHeader name={name} rating={rating} breakpoint='block sm:hidden pb-4' />
      <div className='lg:col-start-2 lg:col-end-5 lg:col-span-2 flex justify-center align-items select-none'>
        <Image
          priority
          src={image.src}
          width={390}
          height={0}
          alt={name}
          className='rounded-t-xl sm:rounded-xl w-auto'
        />
      </div>
    </div>
  )
}

const ProductMainInfo: FC<Pick<ProductObject, 'name' | 'price' | 'rating' | 'discount' | 'sizes' | 'colors' | 'stock'>> = ({ name, price, rating, discount, sizes, colors, stock }): ReactElement => {
  const { addToCart } = useCart()

  return (
    <div className='col-span-2 sm:col-span-1 lg:col-span-2 grid grid-rows-1 gap-4'>
      <form onSubmit={(e) => e.preventDefault()} className='relative border col-span-1 flex flex-col gap-1 bg-gray-100 shadow-sm rounded-b-xl sm:rounded-xl p-4 sm:p-3 md:p-6'>
        <ProductMainInfoHeader name={name} rating={rating} breakpoint='hidden sm:block'>
          <Heart />
        </ProductMainInfoHeader>
        <Heart breakpoint='absolute top-6 right-4 w-9 h-9 sm:hidden z-10' />
        <ProductDiscountPrice price={price} discount={discount} />
        <ProductClothingSizes sizes={sizes} />
        <ProductClothingColors colors={colors} />
        <ProductsNumberInput stock={stock} />
        <div className='flex flex-col pt-2 gap-2 md:gap-3 justify-end h-full'>
          <ProductButton name='Buy now' />
          <ProductButton name='Add to cart' onClick={() => addToCart({ name, price, discount })}>
            <CartIcon />
            <span className='sr-only'>Cart icon of the button</span>
          </ProductButton>
        </div>
      </form>
    </div>
  )
}

const ProductDetails: FC<Pick<ProductObject, 'description'>> = ({ description }): ReactElement => {
  return (
    <div className='col-span-2 lg:col-span-5 rounded-xl'>
      <div className='col-span-2 bg-gray-100 p-4 rounded-xl shadow-sm border'>
        <div className='my-3'><span className='text-gray-800 text-md md:text-lg lg:text-xl font-semibold'>Description</span></div>
        <p className='text-md text-gray-600'>
          <span className='block pb-5'>
            {description.introduction}
          </span>
          <span className='block pb-5'>
            {description.body}
          </span>
          <span className='block pb-5'>
            {description.conclusion}
          </span>
        </p>
      </div>
    </div>
  )
}

const Product: NextPageWithLayout<ProductProps> = ({ product }): ReactElement => {
  const { name, brand, category, description, image, colors, sizes, stock, price, discount, rating } = product

  return (
    <div className='py-4 px-6 sm:px-10 lg:px-16 xl:px-24'>
      <ProductHeader name={name} brand={brand} category={category} />
      <div className='grid grid-cols-2 lg:grid-cols-5 sm:gap-4 gap-1 gap-y-4 rounded-xl'>
        <ProductImage image={image} name={name} rating={rating} />
        <ProductMainInfo name={name} rating={rating} price={price} discount={discount} sizes={sizes} colors={colors} stock={stock} />
        <ProductDetails description={description} />
      </div>
    </div>
  )
}

Product.getLayout = function getLayout (page, pageProps): JSX.Element {
  return <Layout title='Product' section={pageProps?.product?.name}>{page}</Layout>
}

export async function getServerSideProps ({ params }: GetServerSidePropsContext<Params>): Promise<GetServerSidePropsResult<ProductObject>> {
  if (params?.productId === undefined || VALID_DOMAIN === undefined) return { notFound: true }

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
