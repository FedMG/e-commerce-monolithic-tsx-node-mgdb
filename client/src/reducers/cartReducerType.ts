import type { CartProduct } from '@/contexts/cartContextType'
import type { CART_ACTIONS } from '@/hooks/cartActions'
import type { Product } from 'additional'

export type CartInitialStatetype = Map<Product['_id'], CartProduct['product']>

export interface CartReducerType {
  state: CartInitialStatetype
  action: { type: CART_ACTIONS, payload?: CartProduct | Partial<CartProduct> }
}
