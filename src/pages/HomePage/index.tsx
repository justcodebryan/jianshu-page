import Nav from '@/pages/HomePage/Nav'
import Content from '@/components/Content'
import MainPage from '../MainPage'

const HomePage = () => {
  return (
    <div>
      <Nav></Nav>
      {/* <SearchBar></SearchBar> */}
      <Content>
        {/* Router */}
        <MainPage />
      </Content>
    </div>
  )
}

export default HomePage
