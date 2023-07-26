export const isValidObject = (obj: unknown): boolean => typeof obj === 'object' && obj !== null && Object.keys(obj).length > 1
