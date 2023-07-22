enum CATEGORY_KEYS {
  MEN_S_CLOTHING = "men's clothing",
  WOMEN_S_CLOTHING = "women's clothing",
  ACCESSORY = 'accessory',
  SHOES = 'shoes'
}

export const isValidCategory = (category: unknown): category is CATEGORY_KEYS => {
  return Object.values(CATEGORY_KEYS).includes(category as CATEGORY_KEYS)
}
