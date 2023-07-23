import { ProductCard } from "@/models"
import { fetchAllProducts, fetchUniqueProductValues } from "@/services"

type FetchResponse = [string[], number[], ProductCard[]]

export const fetchAllCategoryData = async (encodedCategory: string): Promise<FetchResponse> => {
  return await Promise.all([
    fetchUniqueProductValues<string>(encodedCategory, 'brand'),
    fetchUniqueProductValues<number>(encodedCategory, 'discount'),
    fetchAllProducts(encodedCategory)
  ])
}
