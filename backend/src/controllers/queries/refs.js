export const PRODUCT_KEY = Object.freeze({
  NAME: 'name',
  BRAND: 'brand',
  PRICE: 'price',
  STOCK: 'stock',
  RATING: 'rating',
  DISCOUNT: 'discount',
  CATEGORY: 'category',
  DESCRIPTION: 'description'
})

export const NUMERIC_PROPERTIES = {
  [PRODUCT_KEY.STOCK]: true,
  [PRODUCT_KEY.PRICE]: true,
  [PRODUCT_KEY.DISCOUNT]: true,
  [PRODUCT_KEY.RATING]: ['stars', 'votes'],
}

export const TEXT_PROPERTIES = {
  [PRODUCT_KEY.NAME]: true,
  [PRODUCT_KEY.BRAND]: true,
  [PRODUCT_KEY.CATEGORY]: true,
  [PRODUCT_KEY.DESCRIPTION]: ['introduction', 'body', 'conclusion']
}
