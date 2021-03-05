import { useEffect, useRef } from 'react'

export const useSegmentHeader = () => {
  const navigationRef = useRef()

  const segments = [
    {
      id: 'institutional',
      label: 'Institucional',
      url: process.env.NEXT_PUBLIC_URL_INSTITUCIONAL,
      color: 'var(--institutional-color)',
    },
    {
      id: 'candidates',
      label: 'Para candidatos',
      url: process.env.NEXT_PUBLIC_URL_CANDIDATOS,
      color: 'var(--candidates-color)',
    },
    {
      id: 'professionals',
      label: 'Para empresas',
      url: process.env.NEXT_PUBLIC_URL_EMPRESAS,
      color: 'var(--professionals-color)',
    },
  ]

  const scrollToActiveLink = () => {
    if (!navigationRef.current) return
    const activeLink = navigationRef.current.querySelector('a[aria-current="page"]')
    navigationRef.current.scrollLeft = activeLink.offsetLeft
  }

  useEffect(scrollToActiveLink, [])

  return {
    segments,
    navigationRef,
  }
}
