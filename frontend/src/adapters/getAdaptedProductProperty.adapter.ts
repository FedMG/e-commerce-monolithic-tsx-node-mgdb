import { ProductPropertyResponse } from "@/models"

export const getAdaptedProductProperty = <T>(response: ProductPropertyResponse<T>): T[] => {
  const { uniqueValues } = response
  return uniqueValues
}
