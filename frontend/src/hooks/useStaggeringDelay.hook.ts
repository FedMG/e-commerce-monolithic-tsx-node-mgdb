import { useEffect, useState } from 'react'

const DELAY_DEFAULT = 210

type useStaggeringDelay = { time: number }
export const useStaggeringDelay = ({ time }: useStaggeringDelay) => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const delay = DELAY_DEFAULT * time
    const timeout = setTimeout(() => {
      setLoading(!isLoading)
    }, delay)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  return isLoading
}
