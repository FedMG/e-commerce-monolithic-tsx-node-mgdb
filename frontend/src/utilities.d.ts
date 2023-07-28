export type AddReactComponent<T> = React.ComponentType<T>

// get all values as union type // must be used with typeof
export type GetValues<T> = (T)[keyof T]
// get all keys as union type // must be used with typeof
export type GetKeys<T> = keyof T

export type AddStringKeyRecord<T> = Record<string, T>
export type DropUndefined<T, K> = K extends keyof T ? Exclude<T[K], undefined> : never
export type DropUndefinedUnion<T> = T extends undefined ? never : T
export type AddDisplayName<T> = T & { displayName: string }

export type AddOptional<Type> = {
  [Property in keyof Type ]+?: Type[Property]
}

export type AddSetCallbacks<I, T> = {
  [Property in keyof I ]+?: AddCallback<T>
}

type CallbackWithoutParams = () => void
type CallbackWithParams<T> = (params: T) => void
export type AddVoidCallback<T> = T extends undefined ? CallbackWithoutParams : CallbackWithParams<T>
export type AddCallback<T> = () => T

// It does inference of callback types passed through T and return (P) the parameters types
type InferParamsType<T> = T extends (...args: infer P) => void ? P : T
