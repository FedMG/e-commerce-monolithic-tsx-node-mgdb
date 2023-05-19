import { useState } from 'react'
import type { useSwapEventProps } from 'additional'

export const useSwapEvent = (): useSwapEventProps => {
  const [isEvent, setEvent] = useState<boolean>(false)
  const swapState = (): void => setEvent(!isEvent)
  return [isEvent, swapState]
}
