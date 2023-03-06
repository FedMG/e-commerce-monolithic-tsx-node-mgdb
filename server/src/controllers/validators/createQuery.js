import Product from '../../models/product.js'
import { numericFilter } from './numericFilter.js'
import { setPageAndLimit } from './setPageAndLimit.js'
import { splitAndJoin } from '../../utils/functions.js'
import { sortQuery } from './sortQuery.js'

export const createQuery = (query) => {
  const { numFilter, sort, fields, page, limit } = query

  const queryConfig = {}
  const queryTuple = ['name', 'brand', 'category', 'description']

  queryTuple.forEach((key) => {
    if (query[key]) {
      console.log(query[key])
      queryConfig[key] = { $regex: query[key], $options: 'i' }
    }
  })

  const condition = numFilter
    ? numericFilter(queryConfig, numFilter)
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
