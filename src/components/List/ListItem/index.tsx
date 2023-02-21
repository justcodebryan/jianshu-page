import { navigate } from 'raviger'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './styles.module.scss'

type ListItemProps = DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> &
  Partial<{
    title: string
    abstract: string
    _id?: string
  }>

const ListItem = ({ _id, title, abstract, onClick, ...rest }: ListItemProps) => {
  const onInternalClick: ListItemProps['onClick'] = (e) => {
    if (_id) {
      navigate(`/article/${_id}`)
    } else {
      console.error('[error]: unknown article id')
    }
    onClick?.(e)
  }

  return (
    <li key={title} className={styles['list-item']} onClick={onInternalClick} {...rest}>
      <div className={styles['list-item-title']}>{title}</div>
      <p className={styles['list-item-abstract']}>{abstract}</p>
      <div className={styles['list-item-meta']}>{title}</div>
    </li>
  )
}

export default ListItem
