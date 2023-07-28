import { useContext } from 'react'

import { InvalidContextError } from '@/errors'
import { CartContext } from '@/contexts/cartContext'
import type { CartContextType } from '@/contexts/cartContextType'

export const useCart = (): CartContextType => {
  const cartContext = useContext(CartContext)
  if (cartContext == null) {
    throw new InvalidContextError({ origin: 'useCart', message:'useCart must be used within a CartProvider'})
  }
  return cartContext
}
