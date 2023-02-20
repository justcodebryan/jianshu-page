import List from '@/components/List'
import useEffectOnce from '@/hooks/useEffectOnce'
import styles from './styles.module.scss'

const MainPage = () => {
  useEffectOnce(() => {
    const fetchArticleList = () => {
      return void 0
    }
    fetchArticleList()
  })

  return (
    <div className={styles['main-page']}>
      <div className={styles['main-page-left']}>
        <div className={styles['banner']}></div>
        <List
          items={[
            {
              title: 'test111',
              abstract:
                '感觉宝爸今天打了一天的电话，都是在联系熟人帮他介绍工作，宝爸快四十了，他现在也变成了上有老下有小的人了，今年六月份又要开始交房租了，可是我们彼此...',
            },
            {
              title: 'test222',
              abstract:
                '感觉宝爸今天打了一天的电话，都是在联系熟人帮他介绍工作，宝爸快四十了，他现在也变成了上有老下有小的人了，今年六月份又要开始交房租了，可是我们彼此...',
            },
          ]}
        />
      </div>
      <div className={styles['main-page-right']}>111</div>
    </div>
  )
}

export default MainPage
