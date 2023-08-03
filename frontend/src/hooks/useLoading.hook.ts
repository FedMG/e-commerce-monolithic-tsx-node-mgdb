import { useEffect, useState } from 'react'

type useLoading = {
  items: unknown[]
}

export const useLoading = ({ items }: useLoading): boolean => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (items?.length > 0) return setLoading(!isLoading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return isLoading
}
