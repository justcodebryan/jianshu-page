import Content from '@/components/Content'
import List from '@/components/List'
import RecommendAuthorList from '@/components/RecommendAuthorList'
import useEffectOnce from '@/hooks/useEffectOnce'
import { getArticleList } from '@/services/article'
import { getUserList } from '@/services/user'
import { Article } from '@/types/article'
import { User } from '@/types/user'
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants'
import { useState } from 'react'
import styles from './styles.module.scss'

const MainPage = () => {
  const [itemList, setItemList] = useState<Article[]>([])
  const [authorList, setAuthorList] = useState<User[]>([])

  useEffectOnce(() => {
    const fetchArticleList = async (page: number = DEFAULT_PAGE, pageSize: number = DEFAULT_PAGE_SIZE) => {
      const res = await getArticleList(page, pageSize)
      if (!res) return
      setItemList(res.items)
    }

    const fetchUserList = async (page: number = DEFAULT_PAGE, pageSize: number = DEFAULT_PAGE_SIZE) => {
      const res = await getUserList(page, pageSize)
      if (!res) return
      setAuthorList(res.items)
    }

    fetchArticleList()
    fetchUserList()
  })

  return (
    <Content>
      <div className={styles['main-page']}>
        <div className={styles['main-page-left']}>
          <div className={styles['banner']}></div>
          <List<Article> itemList={itemList} />
        </div>
        <div className={styles['main-page-right']}>
          <RecommendAuthorList authorList={authorList} />
        </div>
      </div>
    </Content>
  )
}

export default MainPage
