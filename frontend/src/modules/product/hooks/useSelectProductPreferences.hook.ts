import { useCallback, useState } from 'react'
import type { Color, Size, ItemsNumber } from '../schema'

type InitalState = Color & Size & ItemsNumber

const intialState = {
  size: null,
  color: null,
  itemsNumber: null
}

export const useSelectProductPreferences = () => {
  const [preferences, setPreferences] = useState<InitalState>(intialState)

  const selectSizeHandler = ({ size }: Size): void => setPreferences({ ...preferences, size })
  const selectColorHandler = ({ color }: Color) => setPreferences({ ...preferences, color })
  const selectQuantityHandler = useCallback(({ itemsNumber }: ItemsNumber): void =>
    setPreferences({ ...preferences, itemsNumber }), [preferences])

  return {
    preferences,
    selectSize: selectSizeHandler,
    selectColor: selectColorHandler,
    selectQuantity: selectQuantityHandler
  }
}
