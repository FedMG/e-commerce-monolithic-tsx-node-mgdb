import { splitAndJoin } from '../../utils/functions.js'

export const sortQuery = (result, sort) => {
  if (sort) {
    const values = splitAndJoin(sort)
    return result.sort(values)
  }
  return result.sort('createAt')
}
