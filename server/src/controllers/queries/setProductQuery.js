import Product from '../../models/product.js'

import { setTextFilter } from './filters/setTextFilter.js'
import { setNumericFilter } from './filters/setNumericFilter.js'
import { setPageAndLimit } from './filters/setPageAndLimit.js'
import { setSortQuery } from './filters/setSortQuery.js'

import { splitAndJoin } from '../../utils/functions.js'
import { NUMERIC_PROPERTIES, TEXT_PROPERTIES } from './refs.js'


export const setProductQuery = (query) => {
  const { numFilter, sort, fields, page, limit, text } = query
  let queryConfig = text ? setTextFilter(text, TEXT_PROPERTIES) : {}

  if (numFilter) {
    queryConfig = { ...setNumericFilter(numFilter, NUMERIC_PROPERTIES), ...queryConfig }
  }

  let result = Product.find(queryConfig)
  result = setSortQuery(result, sort)

  if (fields) {
    const list = splitAndJoin(fields)
    result = result.select(list)
  }

  const [skip, chooseLimit] = setPageAndLimit(page, limit)
  return result.skip(skip).limit(chooseLimit)
}
