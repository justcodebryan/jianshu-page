import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './styles.module.scss'

type ListItemProps = DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> &
  Partial<{
    title: string
    abstract: string
  }>

const ListItem = ({ title, abstract }: ListItemProps) => {
  return (
    <li key={title} className={styles['list-item']}>
      <div className={styles['list-item-title']}>{title}</div>
      <p className={styles['list-item-abstract']}>{abstract}</p>
      <div className={styles['list-item-meta']}>{title}</div>
    </li>
  )
}

export default ListItem
