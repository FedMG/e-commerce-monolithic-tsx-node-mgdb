import { useEffect, useRef, useState } from 'react'
import type { AddVoidCallback } from '@/utilities'
import type { ClearWarningType, ItemsNumber, ItemsNumberWithNull } from '../schema'

const MINIMUM_RANGE = 0
const STEP = 1

type Params = ItemsNumberWithNull<false> & {
  selectCartItemsNumber: AddVoidCallback<ItemsNumber>
  clearWarning: ClearWarningType['onChange']
}

type Result = {
  addItem: AddVoidCallback<undefined>
  dropItem: AddVoidCallback<undefined>
  reset: AddVoidCallback<undefined>
  result: number
}

export const useNumberInput = ({
  itemsNumber,
  selectCartItemsNumber,
  clearWarning
}: Params): Result => {
  const heldButtonInterval = useRef<ReturnType<typeof setInterval> | null>(null)
  const [items, setItemsNumber] = useState(0)

  const handleMouseDown = (callback: AddVoidCallback<undefined>): void => {
    callback()
    heldButtonInterval.current = setInterval(callback, 200)
  }

  const handleMouseUpAndLeave = (): void => {
    if (heldButtonInterval.current !== null) return clearInterval(heldButtonInterval.current)
    heldButtonInterval.current = null
  }

  const handleAddItem = (): void => {
    return setItemsNumber(item => (item + STEP > itemsNumber ? itemsNumber : item + STEP))
  }

  const handleDropItem = (): void => {
    return setItemsNumber(item => (item - STEP < MINIMUM_RANGE ? MINIMUM_RANGE : item - STEP))
  }

  useEffect(() => {
    selectCartItemsNumber({ itemsNumber: items })
    clearWarning({ property: 'itemsNumberMessage' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return {
    addItem: () => handleMouseDown(handleAddItem),
    dropItem: () => handleMouseDown(handleDropItem),
    reset: handleMouseUpAndLeave,
    result: items
  }
}
