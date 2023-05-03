const REGEX_FILTER = /\b(<|>|>=|=|<|<=)\b/g
const OPERATORS = {
  '>': '$gt',
  '>=': '$gte',
  '=': '$eq',
  '<': '$lt',
  '<=': '$lte'
}

export const numericFilter = (queryConfig, number, NUMERIC_PROPERTIES) => {
  const filters = number.replace(REGEX_FILTER, (match) => `-${OPERATORS[match]}-`)

  for (const item of filters.split(',')) {
    const [field, operator, value] = item.split('-')

    if (NUMERIC_PROPERTIES.includes(field)) {
      queryConfig[field] = { [operator]: Number(value) }
    }
  }

  return queryConfig
}
