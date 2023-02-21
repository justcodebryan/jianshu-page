import classNames from 'classnames'
import { Link } from 'raviger'
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

type NavItemProps = PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    active?: boolean
    href: string
  }
>

const NavItem = ({ children, active = false, href, ...rest }: NavItemProps) => {
  return (
    <div className={styles['nav-item']}>
      <Link href={href} className={classNames([styles['link'], active ? styles['active'] : ''])}>
        <div {...rest}>{children}</div>
      </Link>
    </div>
  )
}

export default NavItem
