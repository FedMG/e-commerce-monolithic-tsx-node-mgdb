import { useContext } from 'react'

import { InvalidContextError } from '@/errors/customs'
import { CartContext } from '@/contexts/cartContext'
import type { CartContextType } from '@/contexts/cartContextType'

export const useCart = (): CartContextType => {
  const cartContext = useContext(CartContext)
  if (cartContext == null) {
    throw new InvalidContextError('useCart must be used within a CartProvider')
  }
  return cartContext
}
