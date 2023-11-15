import { adaptAllProductCards } from '@/adapters'
import { errorHandler, FetchAPIError } from '@/errors'
import type { ProductCard, ProductsResponse } from '@/models'

const ITEMS_DISPLAYED = 7

export type FetchAllProductsParams = { category: string; signal?: AbortSignal, field?: string, itemsDisplayed?: number  }

const _fetchAllProducts = async (params: FetchAllProductsParams): Promise<ProductCard[]> => {
  const { category, signal, itemsDisplayed = ITEMS_DISPLAYED, field } = params
  const isField = field ? '&' + field : ''
  const url = 'https://e-commerce-store-api.onrender.com/api/v1/products'
  const query = `?text=category=${category}&limit=${itemsDisplayed}${isField}`
  const res = await fetch(url + query, { signal })

  const { status, ok } = res
  if (!ok) throw new FetchAPIError({ origin: 'fetchAllProducts', status })

  const data: ProductsResponse = await res.json()
  return adaptAllProductCards(data)
}

export const fetchAllProducts = errorHandler<FetchAllProductsParams, ProductCard[]>(
  _fetchAllProducts
)
