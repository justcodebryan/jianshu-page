import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'
import styles from './styles.module.scss'

type ContentProps = PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>

const Content = ({ children, className, ...rest }: ContentProps) => {
  const internalClassName = classNames([styles['content'], className])
  return (
    <div className={internalClassName} {...rest}>
      <div className={styles['container']}>{children}</div>
    </div>
  )
}

export default Content
