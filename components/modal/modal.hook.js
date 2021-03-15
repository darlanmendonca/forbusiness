import { useState, useRef, useEffect } from 'react'

export const useModal = () => {
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

  const avoidBodyScroll = () => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.removeAttribute('style')
    }
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

  useEffect(autoFocus, [isVisible])
  useEffect(avoidBodyScroll, [ isVisible ])
  useEffect(listenEscapeKey, [ isVisible ])

  return {
    toggle,
    show,
    isVisible,
    hide,
    closeButtonRef,
  }
}
