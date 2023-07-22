import type { CartProduct } from '@/contexts/cartContextType'
import type { CART_ACTIONS } from '@/hooks/cartActions'
import type { Product } from '@/models'

export type CartInitialStatetype = Map<Product['id'], CartProduct['product']>

export interface CartReducerType {
  state: CartInitialStatetype
  action: { type: CART_ACTIONS, payload?: CartProduct | Partial<CartProduct> }
}
