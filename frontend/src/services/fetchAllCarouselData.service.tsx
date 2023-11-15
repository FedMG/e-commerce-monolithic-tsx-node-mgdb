import { fetchAllProducts } from '@/services'
import type { ProductCard } from '@/models'
import { sanatize } from '@/utils'

const ITEMS_DISPLAYED = 7
type FetchResponse = Record<string, ProductCard[]>[]

export const fetchAllCarouselData = async (categories: string[]): Promise<FetchResponse> => {
  const productPromises = categories.map(categoryName => {
    const category = sanatize(categoryName)
    return fetchAllProducts({ category, limit: ITEMS_DISPLAYED })
  })
  const responses = await Promise.all(productPromises)

  return responses.map((response, index) => ({ [categories[index]]: response }))
}
