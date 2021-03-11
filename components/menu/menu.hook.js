import { useState, useEffect } from 'react'

export const useMenu = () => {
  const [ isVisible, setIsVisible ] = useState(false)

  const toggle = () => setIsVisible(!isVisible)
  const show = ()  => setIsVisible(true)
  const hide = () => setIsVisible(false)

  const autoHideMenuOnBlur = event => {
    setTimeout(() => {
      const hasParentMenu = document.activeElement.closest('[role="menu"]')

      if (!hasParentMenu) hide()
    }, 0)
  }

  const listenEscapeKey = () => {
    const escape = event => event.key === 'Escape' && hide()

    if (isVisible) {
      document.addEventListener('keydown', escape)
    } else {
      document.removeEventListener('keydown', escape)
    }

    return () => document.removeEventListener('keydown', escape)
  }

  useEffect(listenEscapeKey, [ isVisible ])

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
