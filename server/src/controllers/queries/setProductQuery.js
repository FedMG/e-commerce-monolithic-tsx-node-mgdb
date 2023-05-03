import Product from '../../models/product.js'

import { splitAndJoin } from '../../utils/functions.js'
import { numericFilter } from './filters/numericFilter.js'
import { setPageAndLimit } from './filters/setPageAndLimit.js'
import { sortQuery } from './filters/sortQuery.js'

const NUMERIC_PROPERTIES = ['price', 'rating', 'discount']

export const setProductQuery = (query) => {
  const { numFilter, sort, fields, page, limit, category, brand, name, description } = query

  const queryConfig = {}
  const matches = {
    'name': { $regex: name, $options: 'i' },
    'brand': brand,
    'category': category,
    'description': { $regex: description, $options: 'i' },
  }
  
  Object.keys(matches).forEach((key) => {
    if (query[key]) {
      queryConfig[key] = matches[key]
    }
  })

  const condition = numFilter
    ? numericFilter(queryConfig, numFilter, NUMERIC_PROPERTIES)
    : queryConfig

  let result = Product.find(condition)
  result = sortQuery(result, sort)

  if (fields) {
    const list = splitAndJoin(fields)
    result = result.select(list)
  }

  const [skip, chooseLimit] = setPageAndLimit(page, limit)
  return result.skip(skip).limit(chooseLimit)
}
