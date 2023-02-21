import { User } from '@/types/user'
import styles from './styles.module.scss'

type RecommendAuthorListProps = {
  authorList?: User[]
}

const RecommendAuthorList = ({ authorList = [] }: RecommendAuthorListProps) => {
  return (
    <div className={styles['recommend-authors']}>
      <div className={styles['title']}>
        <span>推荐作者</span>
        <p className={styles['page-change']}>换一批</p>
      </div>
      {authorList.length ? (
        <ul className={styles['list']}>
          {authorList.map((author) => (
            <li key={author._id}>
              <img className={styles['avatar']} src={author.avatar_source} alt="" />
              <div className={styles['follow']}>关注 +</div>
              <div className={styles['name']}>{author.nickname}</div>
              <p>总资产：{author.total_wordage}</p>
            </li>
          ))}
        </ul>
      ) : (
        <>No Data</>
      )}
    </div>
  )
}

export default RecommendAuthorList
