import { MouseEventHandler } from 'react'
import styles from './styles.module.scss'

type AnchorProps = {
  likesCount?: number
  onClick: MouseEventHandler<HTMLDivElement> | undefined
}

const Anchor = ({ onClick, likesCount }: AnchorProps) => {
  return (
    <div className={styles['anchor-wrapper']}>
      <div className={styles['like-btn']}>
        <div className={styles['like']} onClick={onClick}>
          <div className={styles['anticon']}>👍</div>
        </div>
        <div className={styles['desc']}>{likesCount || 0}赞</div>
      </div>
    </div>
  )
}

export default Anchor
