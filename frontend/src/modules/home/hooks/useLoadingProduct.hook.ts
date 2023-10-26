import { useEffect, useState } from 'react'

export const useLoadingProduct = ({ delay }: { delay?: number}): boolean => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(!isLoading)
    }, delay || 1200)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return isLoading
}
