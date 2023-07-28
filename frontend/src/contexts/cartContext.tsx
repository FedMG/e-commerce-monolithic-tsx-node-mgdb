import { createContext } from 'react'

import { useCartReducer } from '@/hooks'
import { CartContextType } from './cartContextType'

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cart, cartLength, addCartItem, removeCartItem, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{ cart, cartLength, addCartItem, removeCartItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
