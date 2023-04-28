
export const getPriceWithDiscount = (discount: number | undefined, price: number): number => {
  if (discount === 0 || discount === null || discount === undefined) return price
  return price - (discount / 100) * price
}

export const isValidArray = (arr: unknown[]): boolean => Array.isArray(arr) && arr.length > 0
export const isArrayOfObjects = (arr: object[]): boolean => isValidArray(arr) && typeof arr[0] === 'object'
export const isArrayOfPrimitives = (arr: string[] | number[]): boolean => isValidArray(arr) && (isNumber(arr[0]) || isString(arr[0]))
export const isArrayOfString = (arr: string[]): boolean => isValidArray(arr) && isString(arr[0])

export const setUpperCase = (name: string): string => name[0].toLocaleUpperCase() + name.slice(1)
export const isNumber = (num: unknown): boolean => num !== null && !Number.isNaN(num) && typeof num === 'number'
export const isString = (string: unknown): boolean => (string !== null || string !== undefined) && typeof string === 'string'
export const isValidNumber = (num: unknown): boolean => !Number.isNaN(num) && typeof num === 'number' && (num >= 0 && num <= 5)
export const isValidRangeNumber = (num: unknown): boolean => !Number.isNaN(num) && typeof num === 'number' && (num > 0 && num < 1000)
