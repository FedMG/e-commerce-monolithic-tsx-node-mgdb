import { CATEGORY_VALUES } from "./isValidCategory.utility"

export const sanatize = (category: string) => {
  const result = CATEGORY_VALUES.find(item => item === category)
  if (!result) throw new Error('category value is not valid')
  return result
}
