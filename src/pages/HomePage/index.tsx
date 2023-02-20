import Nav from '@/pages/HomePage/Nav'
import Content from '@/components/Content'
import styles from './styles.module.scss'
import MainPage from '../MainPage'

const HomePage = () => {
  return (
    <div className={styles['home']}>
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
