import type { Product } from "additional"

export const getPriceWithDiscount = (discount: number | undefined, price: number) => {
  if (!discount || discount === null || discount === undefined) return price;
  return price - (discount / 100) * price;
}

export const isThereProduct = (products: Product[] | string[] | number[]) =>
  Array.isArray(products) && products.length > 0;

export const setUpperCase = (name: string) => name[0].toLocaleUpperCase() + name.slice(1)
export const isNumber = (num: any) => num && typeof num === 'number'
export const isString = (string: unknown) => string && typeof string === 'string'

export const isValidNumber = (num: any) => isNumber(num) && num > 0 && num <= 5
