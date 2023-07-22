import { VALID_DOMAIN } from 'src/environment'

import Link from 'next/link'
import { FC, ReactElement, useEffect, useMemo, useState } from 'react'
// import { useInfinitePagination } from '@/hooks/useInfinitePagination'

import { Layout } from '@/components/layout'
import { Drawer } from '@/components/Drawer'

import { ProductsCard } from '@/modules/category/components/card'
import { CategoryHeader, CategoryHeaderInfo } from '@/modules/category/components/header'
import { CategoryDiscountFilter, CategorySearchFilter, CategoryBrandFilter, CategoryRatingFilter } from '@/modules/category/components/filters'

import { isArrayOfObjects } from '@/utils'
import { filterStructure } from '@/refs'

import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import type { NextPageWithLayout } from '_app-types'
import type { BaseComponentProps } from '@/schemas'
import { fetchAllProductData } from '@/services'
import type { ProductCard } from '@/models'
import { isValidCategory } from '@/utils/isValidCategory.utility'

const ITEMS_DISPLAYED = 12

export enum SortBy {
  DATE = 'date',
  RATING = 'rating',
  PRICE = 'price'
}

interface CategoryProps {
  products: ProductCard[]
  discounts: number[]
  brands: string[]
  currentCategory: string
}

type ProductSortFunction = (a: ProductCard, b: ProductCard) => number
type FilterFunction = ((product: ProductCard) => boolean)
type CategoryFiltersProp = Pick<BaseComponentProps, 'children'>

const CategoryFilters: FC<CategoryFiltersProp> = ({ children }): ReactElement => (
  <div className='sticky top-0 left-0 right-0 lg:relative col-span-12 lg:col-span-4 border-b border-x lg:border lg:shadow bg-gray-100 rounded-b lg:rounded z-40'>
    <div className='flex lg:flex-col lg:gap-y-7 p-2 lg:p-0 lg:pb-8 lg:pl-6 lg:pr-4 text-gray-700 h-full xs:justify-between lg:justify-normal'>
      {children}
    </div>
  </div>
)

const CategoryProducts: FC<Pick<CategoryProps, 'products'>> = ({ products }): ReactElement => (
  <div className='pt-6 lg:pt-0 grid grid-cols-12 col-span-12 lg:col-span-8 gap-x-4 gap-y-6 md:gap-6'>
    {isArrayOfObjects(products) &&
      products.map(({ id, name, price, category, rating, image, discount }) => (
        <div key={id} className='col-span-12 min-[320px]:col-span-6 min-[500px]:col-span-4 sm:col-span-4 md:col-span-3 lg:col-span-4 xl:col-span-4'>
          <Link href='/[category]/[productId]' as={`/${category}/${id}`}>
            <ProductsCard element={{ name, price, rating, image, discount }} />
          </Link>
        </div>
      ))}
  </div>
)

export const sortFunctions: Record<string, ProductSortFunction> = {
  [SortBy.DATE]: (a, b) => {
    const dateOfA = new Date(a.createdAt).getTime()
    const dateOfB = new Date(b.createdAt).getTime()
    return dateOfA - dateOfB
  },
  [SortBy.RATING]: (a, b) => b.rating?.stars - a.rating?.stars,
  [SortBy.PRICE]: (a, b) => a.price - b.price
}

// later refactor with custom hook and a reducer
const Category: NextPageWithLayout<CategoryProps> = ({ products, discounts, brands, currentCategory }): ReactElement => {
  const [filters, setFilters] = useState<Record<string, null | FilterFunction>>(filterStructure)
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.RATING)
  // const items = useInfinitePagination(products, currentCategory)

  const searchItems = useMemo(() => {
    if ((filters.name === null) && (filters.brand === null) && (filters.discount === null)) return [...products].sort(sortFunctions[sortBy])

    const filterFunctions = Object.values(filters).filter(Boolean)
    let matches = products

    filterFunctions.forEach((callback) => {
      if (typeof callback === 'function') {
        matches = matches.filter(callback)
      }
    })

    return matches.sort(sortFunctions[sortBy])
  }, [products, filters, sortBy])

  const updateNameFilter = (name: FilterFunction | null): void => setFilters(filters => ({ ...filters, name }))
  const updateBrandFilter = (brand: FilterFunction | null): void => setFilters(filters => ({ ...filters, brand }))
  const updateDiscountFilter = (discount: FilterFunction | null): void => setFilters(filters => ({ ...filters, discount }))
  const updateRatingFilter = (sortType: SortBy): void => setSortBy(sortType)

  useEffect(() => {
    setFilters({ ...filterStructure })
    setSortBy(SortBy.RATING)
  }, [products])

  return (
    <div className='py-4 px-6 sm:px-10 lg:px-16 xl:px-24 relative'>
      <div className='grid grid-cols-12 lg:gap-5 w-full sticky top-0 left-0 right-0'>
        <CategoryHeader>
          <CategoryHeaderInfo currentCategory={currentCategory} productsNumber={searchItems.length} />
          <CategoryRatingFilter onChange={updateRatingFilter} sortBy={sortBy} />
        </CategoryHeader>
        <CategoryFilters>
          <CategorySearchFilter onChange={updateNameFilter} currentCategory={currentCategory} />
          <Drawer>
            <CategoryBrandFilter onChange={updateBrandFilter} currentCategory={currentCategory} brands={brands} />
            <CategoryDiscountFilter onChange={updateDiscountFilter} currentCategory={currentCategory} discounts={discounts} />
          </Drawer>
        </CategoryFilters>
        <CategoryProducts products={searchItems} />
      </div>
    </div>
  )
}

Category.getLayout = function getLayout (page, _pageProps): JSX.Element {
  return <Layout title='Category' section={page?.props?.currentCategory as string}>{page}</Layout>
}

export async function getServerSideProps ({ params }: GetServerSidePropsContext): Promise<GetServerSidePropsResult<CategoryProps>> {
  if (VALID_DOMAIN === undefined) return { notFound: true }

  const category = params?.category ?? undefined
  if (category === undefined || !isValidCategory(category))  return { notFound: true }
  const encodedCategory = encodeURI(category)

  try {
    // Implement AbortController
    const [brands, discounts, products] = await fetchAllProductData(encodedCategory)

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
