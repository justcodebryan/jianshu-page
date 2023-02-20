import Nav from '@/components/Layout/Nav'
import Content from '@/components/Content'
import { PropsWithChildren } from 'react'

type LayoutProps = PropsWithChildren

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Nav></Nav>
      {/* <SearchBar></SearchBar> */}
      <Content>
        {/* Router */}
        {children}
      </Content>
    </div>
  )
}

export default Layout
