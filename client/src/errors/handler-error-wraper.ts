import { BadRequestError } from './customs'
import type { FetchResponse } from 'utilities'

export function handleError<T> (callback: FetchResponse<T>): FetchResponse<T> {
  return async function (endpoint: string) {
    try {
      return await callback(endpoint)
    } catch (error) {
      throw new BadRequestError('Something went wrong!') // later get error msg and details throwed from the fetcher
    }
  }
}
