import { useEffect, useReducer } from 'react'

import { CART_ACTIONS } from './cartActions'
import { CartContextType, CartProduct } from '@/contexts/cartContextType'
import { cartReducer, initialState } from '@/reducers/cartReducer'

export function useCartReducer (): CartContextType {
  const [cart, dispatch] = useReducer(cartReducer, initialState)
  useEffect(() => dispatch({ type: CART_ACTIONS.ESTABLISHED_INITIAL_STATE }), [])

  const addCartItem = (product: CartProduct): void => dispatch({
    type: CART_ACTIONS.ADDED_CART_ITEM,
    payload: product
  })

  const removeCartItem = (productId: Pick<CartProduct, 'productId'>): void => dispatch({
    type: CART_ACTIONS.REMOVED_CART_ITEM,
    payload: productId
  })

  const clearCart = (): void => dispatch({ type: CART_ACTIONS.CLEANED_CART })

  return { cartLength: cart.size, cart, addCartItem, removeCartItem, clearCart }
}
