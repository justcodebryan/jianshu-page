import Anchor from '@/components/Anchor'
import Content from '@/components/Content'
import useEffectOnce from '@/hooks/useEffectOnce'
import { getArticleDetail, getArticleList } from '@/services/article'
import { Article } from '@/types/article'
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

type ArticleDetailProps = {
  id: string
}

const ArticleDetail = ({ id }: ArticleDetailProps) => {
  const [articleDetail, setArticleDetail] = useState<Article>()
  const [userArticleList, setUserArticleList] = useState<Article[]>([])
  const [hotArticleList, setHotArticleList] = useState<Article[]>([])

  useEffectOnce(() => {
    const fetchArticleDetail = async () => {
      const res = await getArticleDetail(id)
      if (!res) return
      setArticleDetail(res)
    }

    const fetchHotArticleList = async () => {
      const res = await getArticleList()
      if (!res) return
      setHotArticleList(res.items)
    }

    fetchArticleDetail()
    fetchHotArticleList()
  })

  useEffect(() => {
    const fetchUserArticleDetail = async (userId: string) => {
      const res = await getArticleList(DEFAULT_PAGE, DEFAULT_PAGE_SIZE, userId)
      if (!res) return
      setUserArticleList(res.items)
    }

    if (!articleDetail) return

    fetchUserArticleDetail(articleDetail.user)
  }, [articleDetail])

  return (
    <Content style={{ backgroundColor: '#f9f9f9' }}>
      <div className={styles['article']}>
        <div className={styles['article-detail']}>
          <div className={styles['article-content']}>
            <h1 className={styles['title']}>{articleDetail?.title}</h1>
            <div className={styles['user-info']}>
              <div className={styles['avatar']}>{articleDetail?.title}</div>
              <div className={styles['info']}>
                <div className={styles['base']}>
                  <div className={styles['nickname']}>{articleDetail?.title}</div>
                  <div className={styles['subscribe']}>关注</div>
                </div>
                <div className={styles['more']}></div>
              </div>
            </div>

            <article className={styles['content']}>{articleDetail?.content}</article>
          </div>

          <aside className={styles['article-aside']}>
            <section className={styles['author-article']}>
              <div className={styles['author-info']}>
                <div className={styles['avatar']}>{articleDetail?.title}</div>
                <div className={styles['info']}>
                  <div className={styles['name']}>{articleDetail?.title}</div>
                  <div className={styles['asset']}>总资产: {articleDetail?.title}</div>
                </div>
              </div>
              <div className={styles['list-divider']}></div>
              <div className={styles['article-list']}>
                {userArticleList.map((article) => (
                  <div className={styles['article-list-item']} key={article.title}>
                    <div className={styles['article-list-item-title']}>{article.title}</div>
                    <div className={styles['article-list-item-read-volume']}>阅读 {article.title}</div>
                  </div>
                ))}
              </div>
            </section>
            <section className={styles['hot-article']}>
              <h3 className={styles['title']}>热门故事</h3>
              {hotArticleList.map((article) => (
                <div key={article.title}>{article.title}</div>
              ))}
            </section>
          </aside>

          <Anchor />
        </div>
      </div>
    </Content>
  )
}

export default ArticleDetail
