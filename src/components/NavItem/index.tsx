import { Link } from 'raviger'
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

type NavItemProps = PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    href: string
  }
>

const NavItem = ({ children, href, ...rest }: NavItemProps) => {
  return (
    <div className={styles['nav-item']}>
      <Link href={href} className={styles['link']}>
        <div {...rest}>{children}</div>
      </Link>
    </div>
  )
}

export default NavItem
