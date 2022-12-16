const operatorMap = {
  '>': '$gt',
  '>=': '$gte',
  '=': '$eq',
  '<': '$lt',
  '<=': '$lte'
}

export const numericFilter = (queryConfig, number) => {
  const regEx = /\b(<|>|>=|=|<|<=)\b/g
  const filters = number.replace(regEx, (match) => `-${operatorMap[match]}-`)

  for (const item of filters.split(',')) {
    const [field, operator, value] = item.split('-')

    if (['price', 'rating'].includes(field)) {
      queryConfig[field] = { [operator]: Number(value) }
    }
  }

  return queryConfig
}
