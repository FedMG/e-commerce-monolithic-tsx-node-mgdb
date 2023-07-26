export const isNumber = (num: unknown): boolean => num !== null && !Number.isNaN(num) && typeof num === 'number'
export const isValidNumber = (num: unknown): boolean => !Number.isNaN(num) && typeof num === 'number' && (num >= 0 && num <= 5)
export const isValidRangeNumber = (num: unknown): boolean => !Number.isNaN(num) && typeof num === 'number' && (num > 0 && num < 1000)
