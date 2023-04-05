import { VALID_DOMAIN } from 'src/environment'

import { FC, ReactElement, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

import { Layout } from '@/components/layout'
import { ProductsCard } from '@/components/productCard'
import { CategoryDiscountFilter } from '@/components/discountFilter'
import { CategorySearchFilter } from '@/components/searchFilters'
import { CategoryBrandFilter } from '@/components/brandFilter'
import { CategoryRatingFilter } from '@/components/sortFilter'

import { getEndpoint } from './api/utils'
import { isArrayOfObjects } from '@/utils'
import { filterStructure } from '@/refs'

import type { CategoryProps, ChildrenNode, FilterFunction, ProductSortFunction } from 'additional'
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import type { NextPageWithLayout } from '_app-types'
import { SortBy } from 'enums'

const CategoryFilters: FC<ChildrenNode> = ({ children }): ReactElement => (
  <div className='col-span-12 lg:col-span-3 my-3 border border-solid border-gray-200'>
    <div className='lg:flex lg:flex-col gap-y-7 pb-8 pl-6 pr-4 rounded-sm bg-[#F1F3F5] h-full shadow-[0_15px_0_15px_1_165px_#777777] text-gray-700 border-1 border-solid border-[#f5f5f5]'>
      {children}
    </div>
  </div>
)

const CategoryProducts: FC<Pick<CategoryProps, 'products'>> = ({ products }): ReactElement => (
  <div className='col-span-12 lg:col-span-9 flex flex-wrap'>
    {isArrayOfObjects(products) &&
      products.map(({ _id, name, price, category, rating, image, discount }) => (
        <div key={_id} className='p-3  w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4'>
          <Link href='/[category]/[productId]' as={`/${category}/${_id}`}>
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
  [SortBy.RATING]: (a, b) => b.rating - a.rating,
  [SortBy.PRICE]: (a, b) => a.price - b.price
}

// refactor later with a custom hook
const Category: NextPageWithLayout<CategoryProps> = ({ products, discounts, brands, currentCategory }): ReactElement => {
  const [filters, setFilters] = useState<Record<string, null | FilterFunction>>(filterStructure)
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.RATING)

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
    <div className='grid grid-cols-12 gap-6 lg:gap-10 w-full'>
      <CategoryFilters>
        <CategorySearchFilter onChange={updateNameFilter} currentCategory={currentCategory} productsNumber={searchItems.length} />
        <CategoryBrandFilter onChange={updateBrandFilter} currentCategory={currentCategory} brands={brands} />
        <CategoryDiscountFilter onChange={updateDiscountFilter} currentCategory={currentCategory} discounts={discounts} />
        <CategoryRatingFilter onChange={updateRatingFilter} sortBy={sortBy} />
      </CategoryFilters>
      <CategoryProducts products={searchItems} />
    </div>
  )
}

Category.getLayout = function getLayout (page, _pageProps): JSX.Element {
  return <Layout title='Category' section={page?.props?.currentCategory as string}>{page}</Layout>
}

export async function getServerSideProps ({ params }: GetServerSidePropsContext<Params>): Promise<GetServerSidePropsResult<CategoryProps>> {
  if (params?.category === undefined || VALID_DOMAIN === undefined) return { notFound: true }

  const encodedParameter = encodeURI(params.category)
  const getProductData = getEndpoint(`${VALID_DOMAIN}/api/v1/products`)

  try {
    // Implement AbortController
    const [brands, discounts, products] = await Promise.all([
      getProductData(`/${encodedParameter}/brand`),
      getProductData(`/${encodedParameter}/discount`),
      getProductData(`?category=${encodedParameter}&limit=100`)
    ])

    return {
      props: {
        ...products,
        discounts: [...discounts.uniqueValues],
        brands: [...brands.uniqueValues],
        currentCategory: params.category
      }
    }
  } catch (error) {
    return { notFound: true }
  }
}

export default Category
