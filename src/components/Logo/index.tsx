import styles from './styles.module.scss'
import jianshuLogo from '@/assets/logo.png'

const Logo = () => {
  return <img className={styles['logo']} src={jianshuLogo} alt="logo" />
}

export default Logo
