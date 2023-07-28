import { adaptProduct } from '@/adapters'
import { errorHandler, FetchAPIError } from '@/errors'
import type { Product, ProductIdResponse } from '@/models'

type FetchProductIdParams = { id: string, signal: AbortSignal }

const _fetchProductId = async (params: FetchProductIdParams): Promise<Product> => {
  const { id, signal } = params
  const url = `https://e-commerce-store-api.onrender.com/api/v1/products/${id}`
  const res = await fetch(url, { signal })

  const { status, ok } = res
  if (!ok) throw new FetchAPIError({ origin: 'fetchProductId', status })

  const data: ProductIdResponse = await res.json()
  return adaptProduct(data)
}

export const fetchProductId = errorHandler<FetchProductIdParams, Product>(_fetchProductId)
