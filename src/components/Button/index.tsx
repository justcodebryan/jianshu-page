import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

type ButtonProps = PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>

const Button = ({ children, className, ...rest }: ButtonProps) => {
  const internalClass = classNames([styles['button'], className])

  return (
    <div className={internalClass} {...rest}>
      {children}
    </div>
  )
}

export default Button
