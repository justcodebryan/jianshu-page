import { User } from '@/types/user'
import styles from './styles.module.scss'

type RecommendPros = {
  authorList?: User[]
}

const Recommend = ({ authorList = [] }: RecommendPros) => {
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
              <div className={styles['avatar']}>{author.avatar_source}</div>
              <div className={styles['follow']}>关注</div>
              <div className={styles['name']}>{author.nickname}</div>
              <p>{author.nickname}</p>
            </li>
          ))}
        </ul>
      ) : (
        <>No Data</>
      )}
    </div>
  )
}

export default Recommend
