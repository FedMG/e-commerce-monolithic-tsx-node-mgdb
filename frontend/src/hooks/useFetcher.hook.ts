import { useEffect, useState } from "react"
import { StatusApiError } from "@/errors"

interface UseFetcherParam<T> {
  fetcher: (params: any) => Promise<T>  // later fix it
  config: object
}

export const useFetcher = <T>({ fetcher, config }: UseFetcherParam<T>): T | [] => {
  const [items, setItems] = useState<T | []>([])

  useEffect(() => {
    const controller = new AbortController()

    fetcher({ ...config, signal: controller.signal })
      .then(items => {
        setItems(items)
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
  }, [fetcher, config])

  return items
}
