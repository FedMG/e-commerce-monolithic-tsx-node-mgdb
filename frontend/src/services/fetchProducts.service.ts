import { getAdaptedProductCard } from "@/adapters"
import { ProductCard, ProductsResponse} from "@/models"

const ITEMS_DISPLAYED = 12

export const fetchProducts = async (category: string): Promise<ProductCard[]> => {
  const url = `https://e-commerce-store-api.onrender.com/api/v1/products`
  const query = `?text=category=${category}&limit=${ITEMS_DISPLAYED}`

  const res = await fetch(url + query)
  const data: ProductsResponse = await res.json()

  return getAdaptedProductCard(data)
}
