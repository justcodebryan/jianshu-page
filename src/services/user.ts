import { $delete, $get, $post, $put } from '@/api'
import { PaginationResponseData } from '@/types/api'
import { User } from '@/types/user'
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants'

export const getUserList = (page: number = DEFAULT_PAGE, pageSize: number = DEFAULT_PAGE_SIZE) =>
  $get<PaginationResponseData<User[]>>('/users', {
    page,
    pageSize,
  })

export const getUserDetail = (id: string) => $get<User>(`/users/${id}`)

export const addUser = (data: User) =>
  $post(`/users`, {
    ...data,
  })

export const updateUser = (id: string, data: User) =>
  $put(`/users/${id}`, {
    ...data,
  })

export const deleteUser = (id: string) => $delete(`/users/${id}`)
