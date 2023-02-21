import Anchor from '@/components/Anchor'
import Content from '@/components/Content'
import useEffectOnce from '@/hooks/useEffectOnce'
import { getArticleDetail } from '@/services/article'
import { Article } from '@/types/article'
import { useState } from 'react'
import styles from './styles.module.scss'

type ArticleDetailProps = {
  id: string
}

const ArticleDetail = ({ id }: ArticleDetailProps) => {
  const [articleDetail, setArticleDetail] = useState<Article>()

  useEffectOnce(() => {
    const fetchArticleDetail = async () => {
      const res = await getArticleDetail(id)
      if (!res) return
      setArticleDetail(res)
    }

    fetchArticleDetail()
  })

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
                {(
                  [
                    {
                      title: 'ttt',
                    },
                  ] as Article[]
                ).map((article) => (
                  <div className={styles['article-list-item']} key={article.title}>
                    <div className={styles['article-list-item-title']}>{article.title}</div>
                    <div className={styles['article-list-item-read-volume']}>阅读 {article.title}</div>
                  </div>
                ))}
              </div>
            </section>
            <section className={styles['hot-article']}>
              <h3 className={styles['title']}>热门故事</h3>
              {(
                [
                  {
                    title: 'ttt',
                  },
                ] as Article[]
              ).map((article) => (
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
