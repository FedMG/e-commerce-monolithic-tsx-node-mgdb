import { BadRequestError } from '../../../errors/customTypes.js'
import { isArray, isObject } from "../../../utils/functions.js"
import { PRODUCT_KEY } from "../refs.js"

const OPERATOR = '$or'
const filters = {
  [PRODUCT_KEY.NAME]: (value) => ({ $regex: value, $options: 'i' }),
  [PRODUCT_KEY.BRAND]: (value) => value,
  [PRODUCT_KEY.CATEGORY]: (value) => value,
  [PRODUCT_KEY.DESCRIPTION]: (value) => ({ $regex: value, $options: 'i' })
}


export const setTextFilter = (textFilters, TEXT_PROPERTIES) => {  
  const queries = isArray(textFilters) ? textFilters.join(',') : textFilters
  const queryConfig = {}
  
  for (const item of queries.split(',')) {
    const [field, value] = item.split('=')
    
    if (field.includes('.')) {
      const [property, nestedProperty] = field.split('.')
      if (!TEXT_PROPERTIES[property]?.includes(nestedProperty)) {
        throw new BadRequestError(`property or nested property entered is not valid.`)
      }
      queryConfig[field] = filters[property](value)
      continue
    }
    
    if (!TEXT_PROPERTIES[field]) throw new BadRequestError (`${field} is not valid field.`)
    const filter = filters[field](value)
    const fieldName = RegExp(field, 'gi')
        
    if (queries.match(fieldName).length > 1) {
      if (isObject(filter)) {
        queryConfig[OPERATOR] = (queryConfig[OPERATOR] || []).concat([{ [field]: filter }])
        continue
      }
      queryConfig[field] = (queryConfig[field] || []).concat(filter)
      continue
    }
    queryConfig[field] = filter
  }

  return queryConfig
}
