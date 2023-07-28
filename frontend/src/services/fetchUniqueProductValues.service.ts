import { adaptUniqueProductValues } from '@/adapters'
import { errorHandler, FetchAPIError } from '@/errors'
import type { ProductPropertyResponse } from '@/models'

type FetchUPVParams = { category: string, property: string }

const _fetchUniqueProductValues = async <T>({ category, property }: FetchUPVParams): Promise<T[]> => {
  const url = `https://e-commerce-store-api.onrender.com/api/v1/products/${category}/${property}`
  const res = await fetch(url)

  const { status, ok } = res
  if (!ok) throw new FetchAPIError({ origin: 'fetchUniqueProductValues', status })

  const data: ProductPropertyResponse<T> = await res.json()
  return adaptUniqueProductValues<T>(data)
}

export const fetchUniqueProductValues = errorHandler(_fetchUniqueProductValues)
