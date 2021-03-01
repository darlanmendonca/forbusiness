import { useState, useRef, useEffect } from 'react'

export const useAside = () => {
  const [ isVisible, setIsVisible ] = useState(false)
  const [ openButton, setOpenButton ] = useState()
  const closeButtonRef = useRef()

  const toggle = () => setIsVisible(!isVisible)
  const show = ()  => setIsVisible(true)
  const hide = () => setIsVisible(false)

  useEffect(() => {
    if (isVisible) {
      setOpenButton(document.activeElement)
      closeButtonRef.current?.focus()
    } else {
      openButton?.focus()
    }
  }, [isVisible])

//   const autoHideMenuOnBlur = event => {
//     setTimeout(() => {
//       const hasParentMenu = document.activeElement.closest('[role="menu"]')
//
//       if (!hasParentMenu) hide()
//     }, 0)
//   }

  // const buttonProps = {
  //   role: 'menuitem',
  //   'aria-expanded': isVisible,
  //   'aria-haspopup': 'true',
  //   onBlur: autoHideMenuOnBlur,
  // }

  return {
    toggle,
    show,
    isVisible,
    hide,
    closeButtonRef,
    // buttonProps,
  }
}
