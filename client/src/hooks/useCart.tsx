import { useContext } from 'react'

import { CartContext, CartContextType } from '@/contexts/cartContext'
import { InvalidContextError } from '@/errors/customs'

export const useCart = (): CartContextType => {
  const cartContext = useContext(CartContext)
  if (cartContext == null) {
    throw new InvalidContextError('useCart must be used within a CartProvider')
  }
  return cartContext
}
