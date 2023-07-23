import { useManagementState } from '@/modules/category/hooks'
import { fetchAllCategoryData } from '@/services'

import { Layout } from '@/components/layout'
import { Drawer } from '@/components/Drawer'
import { CategoryHeader, CategoryHeaderInfo } from '@/modules/category/components/header'
import { CategoryDiscountFilter, CategorySearchFilter, CategoryBrandFilter, CategoryRatingFilter, CategoryFilters } from '@/modules/category/components/filters'
import { CategoryProducts } from '@/modules/category/components/card'

import type { CategoryProps } from '@/modules/category/schemas'
import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import type { NextPageWithLayout } from '@/next-pages'
import type { ReactElement } from 'react'

import { CATEGORY_VALUES, isValidCategory } from '@/utils'

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
    params: { category: category }
  }))

  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps ({ params }: GetStaticPropsContext): Promise<GetStaticPropsResult<CategoryProps>> {
 const category = params?.category
 if (category === undefined || !isValidCategory(category))  return { notFound: true }
 const encodedCategory = encodeURIComponent(category)

  try {
    const [brands, discounts, products] = await fetchAllCategoryData(encodedCategory)

    return {
      props: {
        products,
        discounts,
        brands,
        currentCategory: category
      }
    }

  } catch (error) {
    return { notFound: true }
  }
}

export default Category
