import { useMemo, useReducer } from 'react'
import { initialState, productFiltersReducer } from '../reducers'

import type { ProductCard } from '@/models'
import type { UpdateFilterParameters } from '../schemas'
import { isAllNull } from '@/utils'

export const useProductFilters = (products: ProductCard[]) => {
  const [filters, dispatch] = useReducer(productFiltersReducer, initialState)

  const clearFilters = (): void => dispatch({ type: 'CLEAN_FILTERS' })
  const updateFilter = ({ field, value }: UpdateFilterParameters): void =>
    dispatch({
      type: 'UPDATED_FILTER',
      payload: { [field]: value }
    })

  const itemsResult = useMemo(() => {
    const filterValues = Object.values(filters)
    if (isAllNull(filterValues)) return products

    const validFilters = filterValues.filter(Boolean)
    let matches = products

    validFilters.forEach(callback => {
      if (typeof callback === 'function') {
        matches = matches.filter(callback)
      }
    })

    return matches
  }, [products, filters])

  return {
    updateFilter,
    clearFilters,
    itemsResult
  }
}
