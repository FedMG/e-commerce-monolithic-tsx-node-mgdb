import { CartInitialStatetype } from '@/reducers/cartReducerType'
import type { ClothingSizes, Product, ProductColors } from 'additional'

export interface CartProduct {
  productId: Product['_id']
  product: Pick<Product, 'name' | 'image' | 'price' | 'discount'> & {
    size: ClothingSizes
    color: ProductColors
    addedItems: number
  }
}

export interface CartContextType {
  cart: CartInitialStatetype
  cartLength: number
  addCartItem: (product: CartProduct) => void
  removeCartItem: (productId: Pick<CartProduct, 'productId'>) => void
  clearCart: () => void
}
