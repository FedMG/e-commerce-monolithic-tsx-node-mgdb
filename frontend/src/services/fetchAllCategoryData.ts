import { ProductCard } from "@/models"
import { fetchProducts, fetchUniqueProductValues } from "@/services"

type FetchResponse = [string[], number[], ProductCard[]]

export const fetchAllProductData = (encodedCategory: string): Promise<FetchResponse> => {
  return Promise.all([
    fetchUniqueProductValues<string>(encodedCategory, 'brand'),
    fetchUniqueProductValues<number>(encodedCategory, 'discount'),
    fetchProducts(encodedCategory)
  ])
}
