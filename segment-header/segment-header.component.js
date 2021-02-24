import { Navigation, Link } from './segment-header.style.js'

const SegmentHeader = ({ current }) => {
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
      id: 'forbusiness',
      label: 'Para empresas',
      url: process.env.NEXT_PUBLIC_URL_EMPRESAS,
      color: 'var(--forbusiness-color)',
    },
  ]

  const toLinks = segment => (
    <Link
      key={ segment.id }
      href={ current === segment.id ? null : segment.url }
      color={ segment.color }
      active={ current === segment.id }
    >
      { segment.label }
    </Link>
  )

  return (
    <Navigation aria-label='Segmentos'>
      { segments.map(toLinks) }
    </Navigation>
  )
}

export default SegmentHeader
