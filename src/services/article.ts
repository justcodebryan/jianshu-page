import { $delete, $get, $post, $put } from '@/api'
import { PaginationResponseData } from '@/types/api'
import { Article } from '@/types/article'
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants'

export const getArticleList = (page: number = DEFAULT_PAGE, pageSize: number = DEFAULT_PAGE_SIZE) =>
  $get<PaginationResponseData<Article[]>>('/articles', {
    page,
    pageSize,
  })

export const getArticleDetail = (id: string) => $get<Article>(`/articles/${id}`)

export const addArticle = (data: Article) =>
  $post(`/articles`, {
    ...data,
  })

export const updateArticle = (id: string, data: Article) =>
  $put(`/articles/${id}`, {
    ...data,
  })

export const deleteArticle = (id: string) => $delete(`/articles/${id}`)
