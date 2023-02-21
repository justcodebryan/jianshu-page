import '@/styles/reset.css'
import '@/styles/index.scss'
import Layout from './components/Layout'
import { useRoutes } from 'raviger'
import routes from './routes'
import { Suspense } from 'react'

function App() {
  const route = useRoutes(routes)
  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>{route}</Suspense>
      </Layout>
    </div>
  )
}

export default App
