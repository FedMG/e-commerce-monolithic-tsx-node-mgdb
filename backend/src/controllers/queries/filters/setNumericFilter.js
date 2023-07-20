// 1- Weather there are more than one numeric filter spaced by a comma or not.
// 2- Split the symbol btw scores that was previous replaced. Example: from '>' to -'$gt'-
// 3- If the field has a nested property. Example: "rating.stars".

const REGEX_FILTER = /\b(<|>|>=|=|<|<=)\b/g
const OPERATORS = Object.freeze({
  '>': '$gt',
  '>=': '$gte',
  '=': '$eq',
  '<': '$lt',
  '<=': '$lte'
})

export const setNumericFilter = (numFilter, NUMERIC_PROPERTIES) => {
  const queryConfig = {}
  const filters = numFilter.replace(REGEX_FILTER, (match) => `-${OPERATORS[match]}-`)
  
  for (const item of filters.split(',')) { // 1
    const [field, operator, value] = item.split('-') // 2
    
    if (field.includes('.')) { // 3
      const [property, nestedProperty] = field.split('.')
      if (NUMERIC_PROPERTIES[property]?.includes(nestedProperty)) {
        queryConfig[field] = {[operator]: Number(value)}
        continue
      }
      break
    }

    if (NUMERIC_PROPERTIES[field]) {
      queryConfig[field] = { [operator]: Number(value) }
    }
  }

  return queryConfig
}
