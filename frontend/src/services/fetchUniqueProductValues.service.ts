import { adaptUniqueProductValues } from '@/adapters'
import { ProductPropertyResponse } from '@/models'

export const fetchUniqueProductValues = async <T>(category: string, property: string): Promise<T[]> => {
  const url = `https://e-commerce-store-api.onrender.com/api/v1/products/${category}/${property}`
  const res = await fetch(url)
  const data: ProductPropertyResponse<T> = await res.json()

  return adaptUniqueProductValues<T>(data)
}
