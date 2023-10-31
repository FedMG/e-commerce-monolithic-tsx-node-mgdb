import { useEffect, useReducer } from 'react'

import { cartReducer, initialState } from '../reducers'
import type { Cart, CartItem, ProductId } from '@/models'
import { CART_ACTIONS } from '../enums'

export function useCartReducer (): Cart {
  const [cart, dispatch] = useReducer(cartReducer, initialState)
  useEffect(() => dispatch({ type: CART_ACTIONS.ESTABLISHED_INITIAL_STATE }), [])

  const addCartItem = (product: CartItem): void => dispatch({
    type: CART_ACTIONS.ADDED_CART_ITEM,
    payload: product
  })

  const removeCartItem = (productId: ProductId): void => dispatch({
    type: CART_ACTIONS.REMOVED_CART_ITEM,
    payload: productId
  })

  const clearCart = (): void => dispatch({ type: CART_ACTIONS.CLEANED_CART })

  return { cartLength: cart.size, cart, addCartItem, removeCartItem, clearCart }
}
