import { useState } from 'react'

export const useMenu = () => {
  const [ isVisible, setIsVisible ] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return {
    toggleVisibility,
    isVisible,
  }
}
