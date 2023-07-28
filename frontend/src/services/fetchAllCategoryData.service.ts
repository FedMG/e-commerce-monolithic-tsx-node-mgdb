import { ProductCard } from '@/models'
import { fetchAllProducts, fetchUniqueProductValues } from '@/services'

type FetchResponse = [string[], number[], ProductCard[]]

export const fetchAllCategoryData = async (category: string, signal: AbortSignal): Promise<FetchResponse> => {
  return await Promise.all([
    fetchUniqueProductValues<string>({ category, property: 'brand', signal }),
    fetchUniqueProductValues<number>({ category, property: 'discount', signal }),
    fetchAllProducts({ category, signal })
  ])
}
