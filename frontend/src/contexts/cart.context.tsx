import { createContext } from 'react'

import type { Cart } from '@/models'
import { useCartReducer } from '@/modules/cart/hooks'

type CartContext = Cart | undefined
export const CartContext = createContext<CartContext>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cart, cartLength, addCartItem, removeCartItem, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{ cart, cartLength, addCartItem, removeCartItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
