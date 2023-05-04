import { PRODUCT_KEY } from "./refs.js"

export const setTextFilter = (text, TEXT_PROPERTIES) => {
  const queryConfig = {}

  for (const item of text.split(',')) {
    const [field, value] = item.split('=')

    const filters = {
      [PRODUCT_KEY.NAME]: { $regex: value, $options: 'i' },
      [PRODUCT_KEY.BRAND]: value,
      [PRODUCT_KEY.CATEGORY]: value,
      [PRODUCT_KEY.DESCRIPTION]: { $regex: value, $options: 'i' }
    }
  
    if (TEXT_PROPERTIES[field]) {
      queryConfig[field] = filters[field]
      continue
    }
  
    if (field.includes('.')) {
      const [property, nestedProperty] = field.split('.')
      
      if (TEXT_PROPERTIES[property]?.includes(nestedProperty)) {
        queryConfig[field] = filters[property]
        continue
      }
      break
    }
  }
  return queryConfig
}
