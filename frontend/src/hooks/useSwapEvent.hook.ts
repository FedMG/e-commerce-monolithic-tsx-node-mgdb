import { useState } from 'react'

type useSwapEventResult = [boolean, () => void]

export const useSwapEvent = (): useSwapEventResult => {
  const [isEvent, setEvent] = useState<boolean>(false)
  const swapState = (): void => setEvent(!isEvent)
  return [isEvent, swapState]
}
