import type { ProductCard } from '@/models'

export type FilterFunction = (product: ProductCard) => boolean
export type FilterField = 'name' | 'brand' | 'discount'
export type FilterValue = null | FilterFunction

export interface UpdateFilterParameters {
  field: FilterField
  value: FilterValue
}

export interface CategoryProps {
  products: ProductCard[]
  discounts: number[]
  brands: string[]
  currentCategory: string
}

export interface CategoryNextFilterProps {
  onChange: ({ field, value }: UpdateFilterParameters) => void
  currentCategory: CategoryProps['currentCategory']
}
