import { AnyObject } from '.'

export type BaseResponse<TData extends object = AnyObject> = {
  data?: TData
  code: number
  msg: string
}

export type CustomResponse<TResponse extends BaseResponse> = Promise<TResponse>

export type PaginationResponseData<TData = unknown> = {
  items: TData
  total: number
}
