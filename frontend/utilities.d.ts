export type FetchResponse<T> = (endpoint: string) => Promise<T>

export type AddStringKeyRecord<T> = Record<string, T>
export type DropUndefined<T, K> = K extends keyof T ? Exclude<T[K], undefined> : never
export type DropUndefinedUnion<T> = T extends undefined ? never : T
export type AddDisplayName<T> = T & { displayName: string }

export type AddOptional<Type> = {
  [Property in keyof Type ]+?: Type[Property]
}

export type AddCallback<I, T> = {
  [Property in keyof I ]+?: Callback<T>
}

export type CallbackWithoutParams = () => void
export type CallbackWith<T> = (params: T) => void
export type Callback<T> = T extends unknown ? CallbackWithoutParams : CallbackWith<T>

// It does inference of callback types passed through T and return (P) the parameters types
type InferParamsType<T> = T extends (...args: infer P) => void ? P : T

// later
// const getType = <T, K>(type: DropUndefined<T, K>): DropUndefined<T, K> => type
// type ResponseReturned = ReturnType<typeof getType>
