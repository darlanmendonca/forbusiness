import { useState, useRef, useEffect } from 'react'

export const useAside = () => {
  const [ isVisible, setIsVisible ] = useState(false)
  const [ openButton, setOpenButton ] = useState()
  const closeButtonRef = useRef()

  const toggle = () => setIsVisible(!isVisible)
  const show = ()  => setIsVisible(true)
  const hide = () => setIsVisible(false)

  const autoFocus = () => {
    if (isVisible) {
      setOpenButton(document.activeElement)
      closeButtonRef.current?.focus()
    } else {
      openButton?.focus()
    }
  }

  useEffect(autoFocus, [isVisible])

  return {
    toggle,
    show,
    isVisible,
    hide,
    closeButtonRef,
  }
}
