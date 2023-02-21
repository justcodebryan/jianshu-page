import { EffectCallback, useEffect } from 'react'

const useEffectOnce = (effectFn: EffectCallback) => {
  useEffect(() => {
    effectFn()
  }, [])
}

export default useEffectOnce
