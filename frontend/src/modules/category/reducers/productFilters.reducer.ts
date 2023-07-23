import type { FilterField, FilterValue } from "@/modules/category/schemas"

export const initialState = {
  name: null,
  brand: null,
  discount: null
}

export interface ProductFilterReducer {
  state: Record<FilterField, FilterValue>
  action: {
    type: string
    payload?: Record<string, FilterValue>
  }
}

export function productFiltersReducer(
  state: ProductFilterReducer['state'],
  action: ProductFilterReducer['action']
) {
  switch (action.type) {
    case 'UPDATED_FILTER': {
      return { ...state, ...action.payload }
    }
    case 'CLEAN_FILTERS': {
      return initialState
    }
    default:
      return state
  }
}
