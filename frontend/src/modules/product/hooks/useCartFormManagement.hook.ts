import { useCart } from '@/hooks'
import { useSelectProductPreferences } from './useSelectProductPreferences.hook'
import { useWarningManagement } from './useWarningManagement.hook'

import type { Product } from '@/models'

export type ProductCartItem = {
  productId: Product['id']
  product: Pick<Product, 'name' | 'price' | 'discount' | 'image' | 'category'>
}

export const useCartFormManagement = () => {
  const { preferences, ...selectors } = useSelectProductPreferences()
  const { addWarning, ...warningFeatures } = useWarningManagement()
  const { addCartItem } = useCart()

  const addItemHandler = ({ productId, product }: ProductCartItem): void => {
    const { color, itemsNumber, size } = preferences
    console.log(preferences)

    if (color === null) {
      addWarning({ colorMessage: 'You must select at least 1 color option.' })
    }

    if (size === null) {
      addWarning({ sizeMessage: 'You must select at least 1 size option.' })
    }

    if (itemsNumber === null || itemsNumber === 0) {
      addWarning({ itemsNumberMessage: 'You must add at least 1 product.' })
    }

    if (color && size && itemsNumber) {
      return addCartItem({ productId, product: { ...product, size, color, itemsNumber } })
    }
  }

  return { ...warningFeatures, ...selectors, addItem: addItemHandler }
}
