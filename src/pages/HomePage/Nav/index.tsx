import classNames from 'classnames'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import NavItem from '@/pages/HomePage/Nav/NavItem'

import styles from './styles.module.scss'

const Nav = () => {
  return (
    <nav className={classNames([styles['navbar'], styles['navbar-default'], styles['navbar-fixed-top']])}>
      <div className={styles['width-limit']}>
        <div className={styles['navbar-section-left']}>
          <Logo />
        </div>

        <div className={styles['navbar-section-mid']}>
          <NavItem href="/" active>
            首页
          </NavItem>
          <NavItem href="/download">下载App</NavItem>
          <NavItem href="/download">会员</NavItem>
          <NavItem href="/download">IT技术</NavItem>
        </div>

        <div className={styles['navbar-section-right']}>
          <Button className={styles['writing']}>
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className={styles['reg']}>注册</Button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
