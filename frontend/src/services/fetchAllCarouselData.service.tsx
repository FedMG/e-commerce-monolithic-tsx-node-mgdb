import { fetchAllProducts } from '@/services'
import type { ProductCard } from '@/models'
import { sanatize } from '@/utils'

type FetchResponse = Record<string, ProductCard[]>[]

export const fetchAllCarouselData = async (categories: string[]): Promise<FetchResponse> => {
  const productPromises = categories.map(categoryName => {
    const category = sanatize(categoryName)
    return fetchAllProducts({ category })
  })
  const responses = await Promise.all(productPromises)

  return responses.map((response, index) => ({ [categories[index]]: response }))
}
