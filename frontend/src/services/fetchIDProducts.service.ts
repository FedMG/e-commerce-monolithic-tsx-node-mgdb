// LATER refactor this and fetchAllProducts service with a query function

import { adaptAllProductCards } from '@/adapters'
import { errorHandler, FetchAPIError } from '@/errors'
import type { ProductCard, ProductsResponse } from '@/models'

type Params = { limit: number }
const _fetchIDProducts = async (params: Params): Promise<ProductCard[]> => {
  const { limit } = params
  const url = 'https://e-commerce-store-api.onrender.com/api/v1/products'
  const query = `?fields=_id,category&limit=${limit}`
  const res = await fetch(url + query)

  const { status, ok } = res
  if (!ok) throw new FetchAPIError({ origin: 'fetchIDProducts', status })

  const data: ProductsResponse = await res.json()
  return adaptAllProductCards(data)
}

export const fetchIDProducts = errorHandler<Params, ProductCard[]>(_fetchIDProducts)
