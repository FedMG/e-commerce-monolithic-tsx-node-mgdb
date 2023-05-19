import { createContext, useState } from 'react'

export interface CartContextType {
  cartItems: object[]
  addToCart: (item: object) => void
  itemsAmount: number
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<object[]>([])

  const addToCart = (item: object): void => {
    setCartItems((prevCartItems) => [...prevCartItems, item])
  }

  const cartLength = cartItems.length ?? 0

  return (
    <CartContext.Provider value={{ itemsAmount: cartLength, cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
