import { isNumber, isString } from "@/utils"

export const isValidArray = (arr: unknown[]): boolean => Array.isArray(arr) && arr.length > 0
export const isArrayOfObjects = (arr: object[]): boolean => isValidArray(arr) && typeof arr[0] === 'object'
export const isArrayOfPrimitives = (arr: string[] | number[]): boolean => isValidArray(arr) && (isNumber(arr[0]) || isString(arr[0]))
export const isArrayOfString = (arr: string[]): boolean => isValidArray(arr) && isString(arr[0])
