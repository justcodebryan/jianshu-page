import Anchor from '@/components/Anchor'
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
      <div className={styles['article-sider']}>111</div>

      <Anchor />
    </div>
  )
}

export default ArticleDetail
