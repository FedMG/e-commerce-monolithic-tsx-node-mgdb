export const getLocalStorageItem = (key: string): string => window.localStorage.getItem(key) ?? ''
export const updateLocalStore = (key: string) => (value: any): void => window.localStorage.setItem(key, JSON.stringify(value))
