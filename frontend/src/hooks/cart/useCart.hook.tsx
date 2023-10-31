import { useContext } from 'react'

import { InvalidContextError } from '@/errors'
import { CartContext } from '@/contexts'
import { Cart } from '@/models'

export const useCart = (): Cart => {
  const cartContext = useContext(CartContext)
  if (!cartContext) {
    throw new InvalidContextError({ origin: 'useCart', message:'useCart must be used within a CartProvider'})
  }
  return cartContext
}
