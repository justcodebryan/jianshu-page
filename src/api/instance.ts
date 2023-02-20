import axios from 'axios'
import { requestHandler, responseHandler } from './interceptor'

const instance = axios.create({
  baseURL: '/api/v1',
})

instance.interceptors.request.use(requestHandler)

instance.interceptors.response.use(responseHandler)

export default instance
