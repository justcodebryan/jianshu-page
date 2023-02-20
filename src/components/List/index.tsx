import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import ListItem from './ListItem'
import styles from './styles.module.scss'

type ListProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> & {
  items?: { title: string; abstract: string }[]
}

const List = ({ items = [], className, ...rest }: ListProps) => {
  const internalClassName = classNames([className, styles['list'], styles['list-wrapper']])
  return (
    <ul className={internalClassName} {...rest}>
      {items.length ? items.map((item) => <ListItem {...item} key={item.title} />) : <div>No Data</div>}
    </ul>
  )
}

export default List
