export type EmptyObject = Record<string, never>

export type AnyObject = Record<string | number | symbol, any>

export type NoopFn = () => void
