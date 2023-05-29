import { VALID_DOMAIN } from '@/environment'
import { getProducts } from '@/services'

import { Layout } from '@/components/layout'
import { Article } from '@/components/Article'
import { ProductHeaderArticle } from '@/components/ProductHeaderArticle'
import { BreadCrumbs } from '@/components/breadCrumbs'
import { ProductBrandLogo } from '@/components/ProductBrandLogo'
import { ProductSection } from '@/components/ProductSection'
import { ProductHeader, ProductTitle } from '@/components/ProductHeader'
import { ProductFigure } from '@/components/ProductFigure'
import { ProductImage } from '@/components/Image'
import { ProductInfo } from '@/components/ProductInfo'
import { ProductDescription, ProductParagraph, ProductParagraphLabel } from '@/components/ProductDescription'

import { isValidObject } from '@/utils'

import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import type { NextPageWithLayout } from '_app-types'
import type { ProductProps } from 'additional'
import type { ReactElement } from 'react'
import { ProductForm } from '@/components/ProductForm'

const PAGE_ALIGN_BREAKPOINT = 'py-4 px-6 sm:px-10 lg:px-16 xl:px-24'

const Product: NextPageWithLayout<ProductProps> = ({ product }): ReactElement | null => {
  if (!isValidObject(product)) return null
  const { _id, name, brand, category, description, image, colors, sizes, stock, price, discount, rating } = product

  return (
    <Article className={PAGE_ALIGN_BREAKPOINT} labelledby='product-title-article' describedby='product-article'>
      <ProductHeaderArticle className='bg-gray-100 shadow-sm border rounded-xl' labelledby='product-header'>
        <BreadCrumbs category={category} brand={brand} name={name} className='border-r-none sm:border-r capitalize text-sm md:text-md font-medium text-gray-700' />
        <ProductBrandLogo className='capitalize font-extrabold sm:max-md:text-2xl md:max-xl:text-3xl xl:text-4xl'>{brand}</ProductBrandLogo>
      </ProductHeaderArticle>

      <ProductSection id='product-article'>
        <ProductFigure className='bg-gray-100 rounded-t-xl sm:rounded-xl border shadow-sm'>
          <ProductHeader className='block sm:hidden' rating={rating}>
            <ProductTitle className='text-gray-900'>{name}</ProductTitle>
          </ProductHeader>
          <ProductImage className='rounded-t-xl sm:rounded-xl' image={image} alt={name} resolution={390} />
        </ProductFigure>

        <ProductInfo className='bg-gray-100 border shadow-sm rounded-b-xl sm:rounded-xl' {...{ name, rating, price, discount }}>
          <ProductForm productId={_id} product={{ name, image, price, discount }} sizes={sizes} colors={colors} stock={stock} />
        </ProductInfo>

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
