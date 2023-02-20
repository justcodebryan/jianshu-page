import { AnyObject } from '@/types'
import { BaseResponse } from '@/types/api'
import instance from './instance'

export const $request = <TResponse extends BaseResponse, TParams = unknown, TData = unknown>(
  url: string,
  method: string,
  params: TParams,
  data: TData
): Promise<TResponse['data'] | void> => {
  const token = import.meta.env.VITE_API_KEY
  instance.defaults.headers.common['X-CoinAPI-Key'] = token

  return new Promise<TResponse['data']>((resolve, reject) => {
    instance
      .request({
        url,
        method,
        params,
        data,
      })
      .then((res) => {
        if (res && res.data) {
          return resolve(res.data)
        }

        return reject(res)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

export const $get = <TResponse = unknown, TParams extends object = AnyObject>(
  url: string,
  params?: TParams
): Promise<TResponse | void> => $request<BaseResponse<TResponse>>(url, 'GET', params || {}, {})

export const $post = <TResponse = unknown, TData extends object = AnyObject>(
  url: string,
  data: TData
): Promise<TResponse | void> => $request<BaseResponse<TResponse>>(url, 'POST', {}, data)

export const $put = <TResponse = unknown, TData extends object = AnyObject>(
  url: string,
  data: TData
): Promise<TResponse | void> => $request<BaseResponse<TResponse>>(url, 'PUT', {}, data)

export const $delete = <TResponse = unknown, TData extends object = AnyObject>(
  url: string,
  data?: TData
): Promise<TResponse | void> => $request<BaseResponse<TResponse>>(url, 'DELETE', {}, data)
