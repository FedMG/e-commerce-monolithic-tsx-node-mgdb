import { fetchProductId } from '@/services'

import { Article } from '@/components/templates'
import { Layout } from '@/components/layout'
import { ProductImage } from '@/components'

import { ProductSection } from '@/modules/product/components'
import { ProductInfo, ProductForm } from '@/modules/product/components/form'
import { ProductHeader, ProductTitle, ProductFigure } from '@/modules/product/components/figure'
import { ProductHeaderArticle, ProductBrandLogo, ProductBreadCrumbs } from '@/modules/product/components/header'
import { ProductDescription, ProductParagraph, ProductParagraphLabel } from '@/modules/product/components/description'

import { isValidObject } from '@/utils'

import type { Product } from '@/models'
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import type { NextPageWithLayout } from '@/next-pages'
import { StatusApiError } from '@/errors'

const PAGE_ALIGN_BREAKPOINT = 'py-4 px-6 sm:px-10 lg:px-16 xl:px-24'
const TIMEOUT_ABORT = 30000

export interface ProductProps {
  product: Product
}

const Product: NextPageWithLayout<ProductProps> = ({ product }): React.ReactElement | null => {
  if (!isValidObject(product)) return null
  const { id, name, brand, category, description, image, colors, sizes, stock, price, discount, rating } = product
  return (
    <Article className={PAGE_ALIGN_BREAKPOINT} labelledby='product-title-article' describedby='product-article'>
      <ProductHeaderArticle className='bg-gray-100 shadow-sm border rounded-xl' labelledby='product-header'>
        <ProductBreadCrumbs category={category} brand={brand} name={name} className='border-r-none sm:border-r capitalize text-sm md:text-md font-medium text-gray-700' />
        <ProductBrandLogo className='capitalize font-extrabold sm:max-md:text-2xl md:max-xl:text-3xl xl:text-4xl'>{brand}</ProductBrandLogo>
      </ProductHeaderArticle>

      <ProductSection id='product-article'>
        <ProductFigure className='bg-gray-100 rounded-t-xl sm:rounded-xl border shadow-sm'>
          <ProductHeader className='block sm:hidden' rating={rating}>
            <ProductTitle className='text-gray-900'>{name}</ProductTitle>
          </ProductHeader>
          <ProductImage className='rounded-t-xl sm:rounded-xl' image={image} alt={name} resolution={390} />
        </ProductFigure>

        <ProductInfo className='bg-gray-100 border shadow-sm rounded-b-xl sm:rounded-xl' {...{name, rating, price, discount}}>
          <ProductForm productId={id} product={{ name, image, price, discount, category, brand, rating }} sizes={sizes} colors={colors} stock={stock} />
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


export async function getServerSideProps ({ params }: GetServerSidePropsContext<Params>): Promise<GetServerSidePropsResult<ProductProps>> {
  if (params?.productId === undefined) return { notFound: true }
  const id = encodeURIComponent(params.productId)
  const controller = new AbortController()

  const timeout = setTimeout(() => {
    controller.abort()
  }, TIMEOUT_ABORT)

  try {
    const product = await fetchProductId({ id, signal: controller.signal })
    return { props: { product } }

  } catch (error) {    
    if (error instanceof StatusApiError) {
      console.error(error.getMessage())
    }

    return { notFound: true }
  } finally {
    clearTimeout(timeout)
  } 
}

export default Product
