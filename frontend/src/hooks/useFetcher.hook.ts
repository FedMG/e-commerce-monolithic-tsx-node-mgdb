import { useEffect, useState } from 'react'
import { StatusApiError } from '@/errors'

interface UseFetcherParam<P, T> {
  fetcher: (params: P) => Promise<T>
  config: Omit<P, 'signal'>
}

type UseFetcherResult<T> = {
  items: T | []
  isLoading: boolean
}

const useFetcher = <P, T>({ fetcher, config }: UseFetcherParam<P, T>): UseFetcherResult<T> => {
  const [items, setItems] = useState<T | []>([])
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const controller = new AbortController()

    fetcher({ ...(config as P), signal: controller.signal })
      .then(items => {
        setItems(items)
        setLoading(!isLoading)
      })
      .catch(error => {
        if (error instanceof StatusApiError) {
          console.error(error.getMessage())
          return
        }

        if (error.name !== 'AbortError') {
          console.error(error)
        }
      })

    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { items, isLoading }
}

export { useFetcher }
