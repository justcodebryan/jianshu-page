import { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
// Request Interceptor
export const requestHandler = (config: InternalAxiosRequestConfig) => {
  return config
}

//  Response Interceptor
export const responseHandler = (response: AxiosResponse) => {
  return response.data
}
