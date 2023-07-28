import { adaptAllProductCards } from '@/adapters'
import { errorHandler, FetchAPIError } from '@/errors'
import type { ProductCard, ProductsResponse } from '@/models'

const ITEMS_DISPLAYED = 12

const _fetchAllProducts = async (category: string): Promise<ProductCard[]> => {
  const url = 'https://e-commerce-store-api.onrender.com/api/v1/products'
  const query = `?text=category=${category}&limit=${ITEMS_DISPLAYED}`
  const res = await fetch(url + query)

  const { status, ok } = res
  if (!ok) throw new FetchAPIError({ origin: 'fetchAllProducts', status })

  const data: ProductsResponse = await res.json()
  return adaptAllProductCards(data)
}

export const fetchAllProducts = errorHandler<string, ProductCard[]>(_fetchAllProducts)