import { useEffect } from 'react'
import { useProductFilters } from './useProductFilters.hook'
import { useProductSort } from './useProductSort.hook'

import type { ProductCard } from '@/models'
import { SortBy } from '../enums'

export const useManagementState = (products: ProductCard[]) => {
  const { clearFilters, itemsResult, updateFilter } = useProductFilters(products)
  const { sortBy, sortedProducts, updateSortBy } = useProductSort(itemsResult)

  useEffect(() => {
    clearFilters()
    updateSortBy(SortBy.RATING)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])

  return {
    sortBy,
    sortedProducts,
    updateSortBy,
    updateFilter
  }
}
