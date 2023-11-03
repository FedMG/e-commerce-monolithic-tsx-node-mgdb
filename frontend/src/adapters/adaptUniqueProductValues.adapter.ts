import type { ProductPropertyResponse } from '@/models'

export const adaptUniqueProductValues = <T>(response: ProductPropertyResponse<T>): T[] => {
  const { uniqueValues } = response
  return uniqueValues
}
