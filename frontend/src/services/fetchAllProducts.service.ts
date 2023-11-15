import { adaptAllProductCards } from '@/adapters'
import { errorHandler, FetchAPIError } from '@/errors'
import type { ProductCard, ProductsResponse } from '@/models'

export type Params = { category: string; signal?: AbortSignal, limit: number  }

const _fetchAllProducts = async (params: Params): Promise<ProductCard[]> => {
  const { category, signal, limit } = params

  const url = 'https://e-commerce-store-api.onrender.com/api/v1/products'
  const query = `?text=category=${category}&limit=${limit}`
  const res = await fetch(url + query, { signal })

  const { status, ok } = res
  if (!ok) throw new FetchAPIError({ origin: 'fetchAllProducts', status })

  const data: ProductsResponse = await res.json()
  return adaptAllProductCards(data)
}

export const fetchAllProducts = errorHandler<Params, ProductCard[]>(
  _fetchAllProducts
)
