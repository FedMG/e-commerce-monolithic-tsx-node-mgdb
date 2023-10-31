import type { AddVoidCallback } from '@/utilities'
import type { ClothingSizes, Product, ProductColors } from './product.model'

export type CartProduct = Pick<Product, 'name' | 'image' | 'price' | 'discount' | 'category'>

type CartProductFeatures = {
  size: ClothingSizes
  color: ProductColors
  itemsNumber: number
}

export type CartItem = {
  productId: Product['id']
  product: CartProduct & CartProductFeatures
}

export type ProductId = Pick<CartItem, 'productId'>

export type CartInitialState = Map<Product['id'], CartItem['product']>
export interface Cart {
  cart: CartInitialState
  cartLength: number
  addCartItem: AddVoidCallback<CartItem>
  removeCartItem: AddVoidCallback<ProductId>
  clearCart: AddVoidCallback<undefined>
}
