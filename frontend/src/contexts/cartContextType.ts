import { ClothingSizes, Product, ProductColors } from '@/models'
import { CartInitialStatetype } from '@/reducers/cartReducerType'

export interface CartProduct {
  productId: Product['id']
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
