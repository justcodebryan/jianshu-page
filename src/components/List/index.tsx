import { AnyObject } from '@/types'
import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import ListItem from './ListItem'
import styles from './styles.module.scss'

type ListProps<T extends object = AnyObject> = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> & {
  itemList?: T[]
}

const List = <T extends object = AnyObject>({ itemList = [], className, ...rest }: ListProps<T>) => {
  const internalClassName = classNames([className, styles['list'], styles['list-wrapper']])
  return (
    <ul className={internalClassName} {...rest}>
      {itemList.length ? itemList.map((item, idx) => <ListItem {...item} key={idx} />) : <div>No Data</div>}
    </ul>
  )
}

export default List
