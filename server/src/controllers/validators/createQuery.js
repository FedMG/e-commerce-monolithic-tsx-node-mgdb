import Product from '../../models/product.js'
import { numericFilter } from './numericFilter.js'
import { setPageAndLimit } from './setPageAndLimit.js'
import { splitAndJoin } from '../../utils/functions.js'
import { sortQuery } from './sortQuery.js'

export const createQuery = (query) => {
  const { featured, name, brand, category, numFilter, sort, fields, page, limit } =
    query

  const queryConfig = {}

  const filters = [
    { featured: [[featured], featured === 'true'] },
    { brand: [brand, brand] },
    { category: [category, category] },
    { name: [name, { $regex: name, $options: 'i' }] }
  ]

  for (const validator of filters) {
    const prop = Object.keys(validator)
    if (validator[prop][0]) {
      queryConfig[prop] = validator[prop][1]
    }
  }

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
