import { adaptAllCovers } from '@/adapters'
import { errorHandler, FetchAPIError } from '@/errors'
import type { Cover, CoversResponse } from '@/models'

const _fetchAllCovers = async (): Promise<Cover[]> => {
  const url = 'https://e-commerce-store-api.onrender.com/api/v1/covers'
  const res = await fetch(url)

  const { status, ok } = res
  if (!ok) throw new FetchAPIError({ origin: 'fetchAllCovers', status })

  const data: CoversResponse = await res.json()
  return adaptAllCovers(data)
}

export const fetchAllCovers = errorHandler<null, Cover[]>(_fetchAllCovers)

// type FetchAllCoversParams = { signal?: AbortSignal }
// const _fetchAllCovers = async (params?: FetchAllCoversParams): Promise<Cover[]> => {
// const { signal } = params
// const res = await fetch(url, { signal })
// export const fetchAllCovers = errorHandler<FetchAllCoversParams, Cover[]>(_fetchAllCovers)
