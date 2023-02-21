import Anchor from '@/components/Anchor'
import Content from '@/components/Content'
import useEffectOnce from '@/hooks/useEffectOnce'
import { getArticleDetail, getArticleList, updateArticle } from '@/services/article'
import { getUserDetail } from '@/services/user'
import { Article } from '@/types/article'
import { User } from '@/types/user'
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants'
import { navigate } from 'raviger'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

type ArticleDetailProps = {
  id: string
}

const ArticleDetail = ({ id }: ArticleDetailProps) => {
  const [articleDetail, setArticleDetail] = useState<Article>()
  const [userDetail, setUserDetail] = useState<User>()
  const [userArticleList, setUserArticleList] = useState<Article[]>([])
  const [hotArticleList, setHotArticleList] = useState<Article[]>([])

  const fetchArticleDetail = async () => {
    const res = await getArticleDetail(id)
    if (!res) return
    setArticleDetail(res)
  }

  useEffectOnce(() => {
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

    const fetchUserDetail = async (userId: string) => {
      const res = await getUserDetail(userId)
      if (!res) return
      setUserDetail(res)
    }

    if (!articleDetail) return

    fetchUserArticleDetail(articleDetail.user)
    fetchUserDetail(articleDetail.user)
  }, [articleDetail])

  return (
    <Content style={{ backgroundColor: '#f9f9f9' }}>
      <div className={styles['article']}>
        <div className={styles['article-detail']}>
          <div className={styles['article-content']}>
            <h1 className={styles['title']}>{articleDetail?.title}</h1>
            <div className={styles['user-info']}>
              <img className={styles['avatar']} src={userDetail?.avatar_source} alt="" />
              <div className={styles['info']}>
                <div className={styles['base']}>
                  <div className={styles['nickname']}>{userDetail?.nickname}</div>
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
                <img className={styles['avatar']} src={userDetail?.avatar_source} alt="" />
                <div className={styles['info']}>
                  <div className={styles['name']}>{userDetail?.nickname}</div>
                  <div className={styles['asset']}>总资产: {userDetail?.total_wordage || 0}</div>
                </div>
              </div>
              <div className={styles['list-divider']}></div>
              <div className={styles['article-list']}>
                {userArticleList.map((article) => (
                  <div
                    className={styles['list-item']}
                    key={article._id}
                    onClick={() => {
                      navigate(`/article/${article._id}`)
                      history.go(0)
                    }}
                  >
                    <div className={styles['title']}>{article.title}</div>
                    <div className={styles['view-count']}>阅读 {article.view_count}</div>
                  </div>
                ))}
              </div>
            </section>
            <section className={styles['hot-article']}>
              <h3 className={styles['title']}>热门故事</h3>
              {hotArticleList.map((article) => (
                <div
                  className={styles['list-item']}
                  key={article._id}
                  onClick={() => {
                    navigate(`/article/${article._id}`)
                    history.go(0)
                  }}
                >
                  {article.title}
                </div>
              ))}
            </section>
          </aside>

          <Anchor
            likesCount={articleDetail?.likes_count}
            onClick={() => {
              if (articleDetail) {
                updateArticle(articleDetail?._id, {
                  ...articleDetail,
                  likes_count: articleDetail?.likes_count ? articleDetail.likes_count + 1 : 1,
                })
                fetchArticleDetail()
              }
            }}
          />
        </div>
      </div>
    </Content>
  )
}

export default ArticleDetail
