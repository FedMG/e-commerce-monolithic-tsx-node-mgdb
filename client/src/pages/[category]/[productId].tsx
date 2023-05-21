import { VALID_DOMAIN } from '@/environment'
import { getProducts } from '@/services'

import { Layout } from '@/components/layout'
import { Article } from '@/components/Article'
import { ProductHeader } from '@/components/ProductHeader'
import { BreadCrumbs } from '@/components/breadCrumbs'
import { ProductBrandLogo } from '@/components/ProductBrandLogo'
import { ProductSection } from '@/components/ProductSection'
import { ProductFigure } from '@/components/ProductFigure'
import { ProductImage } from '@/components/Image'
import { ProductMainInfoHeader } from '@/components/productMainInfoHeader'
import { ProductMainInfo } from '@/components/ProductMainInfo'
import { ProductDescription, ProductParagraph, ProductParagraphLabel } from '@/components/ProductDescription'

import { isValidObject } from '@/utils'

import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import type { NextPageWithLayout } from '_app-types'
import type { ProductProps } from 'additional'
import type { ReactElement } from 'react'

const PAGE_ALIGN_BREAKPOINT = 'py-4 px-6 sm:px-10 lg:px-16 xl:px-24'

const Product: NextPageWithLayout<ProductProps> = ({ product }): ReactElement | null => {
  if (!isValidObject(product)) return null
  const { name, brand, category, description, image, colors, sizes, stock, price, discount, rating } = product

  return (
    // later check the aria-attributes
    <Article className={PAGE_ALIGN_BREAKPOINT} labelledby='product-title-article' describedby='product-article'>
      <ProductHeader className='bg-gray-100 shadow-sm border rounded-xl' labelledby='product-header'>
        <BreadCrumbs category={category} brand={brand} name={name} className='border-r-none sm:border-r capitalize text-sm md:text-md font-medium text-gray-700' />
        <ProductBrandLogo className='capitalize font-extrabold sm:max-md:text-2xl md:max-xl:text-3xl xl:text-4xl'>{brand}</ProductBrandLogo>
      </ProductHeader>

      <ProductSection id='product-article'>
        <ProductFigure className='bg-gray-100 rounded-t-xl sm:rounded-xl border shadow-sm'>
          {/* later refactor productMainInfoHeader */}
          <ProductMainInfoHeader name={name} rating={rating} breakpoint='block sm:hidden pb-4' />
          <ProductImage className='rounded-t-xl sm:rounded-xl' image={image} alt={name} resolution={390} />
        </ProductFigure>

        {/* later refactor productMainInfo */}
        <ProductMainInfo name={name} rating={rating} price={price} discount={discount} sizes={sizes} colors={colors} stock={stock} />

        <ProductDescription className='bg-gray-100 rounded-xl shadow-sm border'>
          <ProductParagraphLabel className='text-gray-800 text-md md:text-lg lg:text-xl font-semibold'>Description</ProductParagraphLabel>
          <ProductParagraph description={description} className='text-md text-gray-600 whitespace-normal' />
        </ProductDescription>
      </ProductSection>
    </Article>
  )
}

Product.getLayout = function getLayout (page, pageProps): JSX.Element {
  return <Layout title='Product' section={pageProps?.product?.name}>{page}</Layout>
}

export async function getServerSideProps ({ params }: GetServerSidePropsContext<Params>): Promise<GetServerSidePropsResult<ProductProps['product']>> {
  if (params?.productId === undefined || VALID_DOMAIN === undefined) return { notFound: true }
  const encodedID = encodeURI(params.productId)

  try {
    const product = await getProducts(`https://${VALID_DOMAIN}/api/v1/products/${encodedID}`)
    return { props: { ...product } }
  } catch (error) {
    return { notFound: true }
  }
}
export default Product
