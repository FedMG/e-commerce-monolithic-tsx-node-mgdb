import { adaptProduct } from '@/adapters'
import { errorHandler, FetchAPIError } from '@/errors'
import type { Product, ProductIdResponse } from '@/models'

const _fetchProductId = async (id: string): Promise<Product> => {
  const url = `https://e-commerce-store-api.onrender.com/api/v1/products/${id}`
  const res = await fetch(url)

  const { status, ok } = res
  if (!ok) throw new FetchAPIError({ origin: 'fetchProductId', status })

  const data: ProductIdResponse = await res.json()
  return adaptProduct(data)
}

export const fetchProductId = errorHandler<string, Product>(_fetchProductId)
