import Nav from '@/components/Layout/Nav'
import { PropsWithChildren } from 'react'

type LayoutProps = PropsWithChildren

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Nav></Nav>
      {/* <SearchBar></SearchBar> */}
      {/* Router */}
      {children}
    </div>
  )
}

export default Layout
