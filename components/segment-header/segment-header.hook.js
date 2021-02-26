export const useSegmentHeader = () => {
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

  return segments
}
