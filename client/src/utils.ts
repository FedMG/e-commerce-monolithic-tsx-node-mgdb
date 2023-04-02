
export const getPriceWithDiscount = (discount: number | undefined, price: number) => {
  if (!discount || discount === null || discount === undefined) return price;
  return price - (discount / 100) * price;
}

export const isValidArray = (arr: unknown[]) =>  Array.isArray(arr) && arr.length > 0
export const isArrayOfObjects = (arr: object[]) => isValidArray(arr) && typeof arr[0] === 'object'
export const isArrayOfPrimitives = (arr: string[] | number[]) => isValidArray(arr) && (isNumber(arr[0]) || isString(arr[0]))

export const setUpperCase = (name: string) => name[0].toLocaleUpperCase() + name.slice(1)
export const isNumber = (num: any) => num && typeof num === 'number'
export const isString = (string: unknown) => string && typeof string === 'string'

export const isValidNumber = (num: any) => isNumber(num) && num > 0 && num <= 5
