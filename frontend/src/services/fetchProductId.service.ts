import { adaptProduct } from '@/adapters'
import { Product, ProductIdResponse } from '@/models'

export const fetchProductId = async (id: string): Promise<Product> => {
  const url = `https://e-commerce-store-api.onrender.com/api/v1/products/${id}`
  const res = await fetch(url)
  const data: ProductIdResponse = await res.json()
  return adaptProduct(data)
}
