import { useState, useEffect } from 'react'

export const useMenu = () => {
  const [ isVisible, setIsVisible ] = useState(false)

  const toggle = () => setIsVisible(!isVisible)
  const show = ()  => setIsVisible(true)
  const hide = () => setIsVisible(false)

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
    } else {
      document.body.removeAttribute('style')
    }
  }, [ isVisible ])

  const autoHideMenuOnBlur = event => {
    setTimeout(() => {
      const hasParentMenu = document.activeElement.closest('[role="menu"]')

      if (!hasParentMenu) hide()
    }, 0)
  }

  const buttonProps = {
    role: 'menuitem',
    'aria-expanded': isVisible,
    'aria-haspopup': 'true',
    onBlur: autoHideMenuOnBlur,
  }

  return {
    toggle,
    show,
    hide,
    isVisible,
    buttonProps,
  }
}
