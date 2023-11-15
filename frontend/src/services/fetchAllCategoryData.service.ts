import { fetchAllProducts, fetchUniqueProductValues } from '@/services'
import type { Brands, ProductCard } from '@/models'

type FetchResponse = [Brands[], number[], ProductCard[]]
const ITEMS_DISPLAYED = 7

export const fetchAllCategoryData = async (category: string, signal?: AbortSignal): Promise<FetchResponse> => {
  return await Promise.all([
    fetchUniqueProductValues<Brands>({ category, property: 'brand', signal }),
    fetchUniqueProductValues<number>({ category, property: 'discount', signal }),
    fetchAllProducts({ category, signal, limit: ITEMS_DISPLAYED })
  ])
}
