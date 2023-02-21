import { useEffect, useState } from 'react'

type WindowSizeDataType = {
  width?: number
  height?: number
}

const useWindowSize = (): WindowSizeDataType => {
  const [windowSize, setWindowSize] = useState<WindowSizeDataType>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
