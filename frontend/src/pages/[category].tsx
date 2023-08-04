import { useManagementState } from '@/modules/category'
import { fetchAllCategoryData } from '@/services'

import { Drawer, Layout } from '@/components'
import { CategoryHeader, CategoryHeaderInfo } from '@/modules/category/components/header'
import { CategoryBrandFilter, CategoryDiscountFilter, CategoryFilters, CategoryRatingFilter, CategorySearchFilter } from '@/modules/category/components/filters'
import { CategoryProducts } from '@/modules/category/components/cards'

import { CATEGORY_VALUES, isValidCategory } from '@/utils'
import { StatusApiError } from '@/errors'

import type { CategoryProps } from '@/modules/category/schemas'
import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import type { NextPageWithLayout } from '@/next-pages'
import type { ReactElement } from 'react'

const TIMEOUT_ABORT = 30000

const Category: NextPageWithLayout<CategoryProps> = ({ products, discounts, brands, currentCategory }): ReactElement => {
  const { updateFilter, updateSortBy, sortBy, sortedProducts } = useManagementState(products)
  // const items = useInfinitePagination(products, currentCategory)

  return (
    <div className='py-4 px-6 sm:px-10 lg:px-16 xl:px-24 relative'>
      <div className='grid grid-cols-12 lg:gap-5 w-full sticky top-0 left-0 right-0'>
        <CategoryHeader>
          <CategoryHeaderInfo currentCategory={currentCategory} productsNumber={sortedProducts.length} />
          <CategoryRatingFilter onChange={updateSortBy} sortBy={sortBy} />
        </CategoryHeader>
        <CategoryFilters>
          <CategorySearchFilter onChange={updateFilter} currentCategory={currentCategory} />
          <Drawer>
            <CategoryBrandFilter onChange={updateFilter} currentCategory={currentCategory} brands={brands} />
            <CategoryDiscountFilter onChange={updateFilter} currentCategory={currentCategory} discounts={discounts} />
          </Drawer>
        </CategoryFilters>
        <CategoryProducts products={sortedProducts} />
      </div>
    </div>
  )
}

Category.getLayout = function getLayout (page, _pageProps): JSX.Element {
  return <Layout title='Category' section={page?.props?.currentCategory as string}>{page}</Layout>
  
}

export async function getStaticPaths (): Promise<GetStaticPathsResult> {
  const paths = CATEGORY_VALUES.map((category) => ({
    params: { category }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }: GetStaticPropsContext): Promise<GetStaticPropsResult<CategoryProps>> {
  const category = params?.category
  if (category === undefined || !isValidCategory(category)) return { notFound: true }
  const encodedCategory = encodeURIComponent(category)
  const controller = new AbortController()

  const timeout = setTimeout(() => {
    controller.abort()
  }, TIMEOUT_ABORT)

  try {
    const [brands, discounts, products] = await fetchAllCategoryData(encodedCategory, controller.signal)

    return {
      props: {
        products,
        discounts,
        brands,
        currentCategory: category
      }
    }
  } catch (error) {    

    if (error instanceof StatusApiError) {
      console.error(error.getMessage())
    }
    return { notFound: true }
  } finally {
    clearTimeout(timeout)
  }
}

export default Category
