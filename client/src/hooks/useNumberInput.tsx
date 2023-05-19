import { useRef, useState } from 'react'

import type { useNumberInputResult } from 'additional'
import type { Callback } from 'utilities'

const MINIMUM_RANGE = 0
const STEP = 1

export const useNumberInput = (itemsNumber: number): useNumberInputResult => {
  const heldButtonInterval = useRef<ReturnType<typeof setInterval> | null>(null)
  const [items, setItemsNumber] = useState(0)

  const handleMouseDown = (callback: Callback<void>): void => {
    callback()
    heldButtonInterval.current = setInterval(callback, 200)
  }

  const handleMouseUpAndLeave = (): void => {
    if (heldButtonInterval.current !== null) return clearInterval(heldButtonInterval.current)
    heldButtonInterval.current = null
  }

  const handleAddItem = (): void => {
    return setItemsNumber(item => item + STEP > itemsNumber ? itemsNumber : item + STEP)
  }

  const handleDropItem = (): void => {
    return setItemsNumber(item => item - STEP < MINIMUM_RANGE ? MINIMUM_RANGE : item - STEP)
  }

  return {
    addItem: () => handleMouseDown(handleAddItem),
    dropItem: () => handleMouseDown(handleDropItem),
    reset: handleMouseUpAndLeave,
    result: items
  }
}
