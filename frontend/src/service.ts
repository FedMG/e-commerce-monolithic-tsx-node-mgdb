import { handleError } from '@/errors/handler-error-wraper'
import { BadFetchError } from '@/errors/customs'
import { Product } from './models'

export const getProducts = handleError<Product>(async (endpoint: string) => {
  // const URL = '' later fill it with the URL
  const res = await fetch(`${endpoint}`)

  if (!res.ok) {
    throw new BadFetchError('Failed to fetch product')
  }

  return await res.json()
})
