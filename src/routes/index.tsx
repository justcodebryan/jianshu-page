import { lazy } from 'react'

// lazy load components
const MainPage = lazy(() => import('@/pages/MainPage'))
const ArticleDetailPage = lazy(() => import('@/pages/ArticleDetail'))

const routes = {
  '/': () => <MainPage />,
  '/article/:id': ({ id }: { id: string }) => <ArticleDetailPage id={id} />,
}

export default routes
