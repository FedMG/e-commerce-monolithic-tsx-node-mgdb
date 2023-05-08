import { splitAndJoin } from '../../../utils/functions.js'

export const setSortQuery = (result, sort) => {
  if (sort) {
    const values = splitAndJoin(sort)
    return result.sort(values)
  }

  return result
}
