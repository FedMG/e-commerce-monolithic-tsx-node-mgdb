import { adaptUniqueProductValues } from '@/adapters'
import { errorHandler, FetchAPIError } from '@/errors'
import type { ProductPropertyResponse } from '@/models'

type FetchUPVParams = { category: string, property: string, signal?: AbortSignal }

const _fetchUniqueProductValues = async <T>(params: FetchUPVParams): Promise<T[]> => {
  const { category, property, signal } = params
  const url = `https://e-commerce-store-api.onrender.com/api/v1/products/${category}/${property}`
  const res = await fetch(url, { signal })

  const { status, ok } = res
  if (!ok) throw new FetchAPIError({ origin: 'fetchUniqueProductValues', status })

  const data: ProductPropertyResponse<T> = await res.json()
  return adaptUniqueProductValues<T>(data)
}

export const fetchUniqueProductValues = errorHandler(_fetchUniqueProductValues)
