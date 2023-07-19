import { InvalidArgumentError } from '@/errors/customs'
import { updateLocalStore, getLocalStorageItem } from '@/utils/localStorage'
import { CartInitialStatetype, CartReducerType } from './cartReducerType'

const updateLocalCartStore = updateLocalStore('e-commerce-cart')
export const initialState: CartInitialStatetype = new Map(null)

export function cartReducer (state: CartReducerType['state'], action: CartReducerType['action']): CartInitialStatetype {
  switch (action.type) {
    case 'ESTABLISHED_INITIAL_STATE': {
      const localStoreCart = getLocalStorageItem('e-commerce-cart')
      if (!localStoreCart) return state

      const parsedLocalStorage: CartInitialStatetype = JSON.parse(localStoreCart)
      const initialState: CartInitialStatetype = new Map(Object.entries(parsedLocalStorage))
      return initialState
    }

    case 'ADDED_CART_ITEM': {
      if ((action?.payload) == null) throw new InvalidArgumentError('cartReducer', 'action.payload is missing in ADDED_CART_ITEM option')

      const { productId, product } = action.payload
      if (productId === undefined || product === undefined) throw new InvalidArgumentError('cartReducer', 'action.payload is missing productId or product in ADDED_CART_ITEM option')

      if (state.has(productId)) return state

      const productClone = structuredClone(state)
      productClone.set(productId, product)

      const convertedToObject = Object.fromEntries(productClone)
      updateLocalCartStore(convertedToObject)
      return productClone
    }

    case 'REMOVED_CART_ITEM': {
      if ((action?.payload) == null) throw new InvalidArgumentError('cartReducer', 'action.payload is missing in REMOVED_CART_ITEM option')

      const { productId } = action.payload
      if (productId === undefined) throw new InvalidArgumentError('cartReducer', 'action.payload is missing productId argument in REMOVED_CART_ITEM option')

      const productClone = structuredClone(state)
      productClone.delete(productId)

      const convertedToObject = Object.fromEntries(productClone)
      updateLocalCartStore(convertedToObject)
      return productClone
    }

    case 'CLEANED_CART': {
      updateLocalCartStore({})
      return initialState
    }

    default:
      return state
  }
}
