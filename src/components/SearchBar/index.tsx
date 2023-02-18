import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren, useState } from 'react'
import styles from './styles.module.scss'

type SearchBarProps = PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { loading?: boolean }
>

const SearchBar = () => {
  const [focused, setFocused] = useState<boolean>(false)

  return (
    <div className={styles['search-bar-wrapper']}>
      <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
    </div>
  )
}

export default SearchBar
