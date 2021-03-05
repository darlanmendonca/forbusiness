import { Navigation, Link } from './segment-header.style.js'
import { useSegmentHeader } from './segment-header.hook.js'
import { oneOf } from 'prop-types'

/**
  * O componente `SegmentHeader` exibe links para os prinncipais
  * segmentos da vagas, sendo Institucional, Candidatos, e Profissionais.
  */
const SegmentHeader = ({ current }) => {
  const { segments, navigationRef } = useSegmentHeader()

  const toLinks = segment => (
    <Link
      key={ segment.id }
      href={ segment.url }
      color={ segment.color }
      aria-current={ current === segment.id ? 'page' : 'false' }
    >
      { segment.label }
    </Link>
  )

  return (
    <Navigation aria-label='Segmentos' ref={ navigationRef }>
      { segments.map(toLinks) }
    </Navigation>
  )
}

export default SegmentHeader

SegmentHeader.propTypes = {
  // Define o segmento atual/em uso
  current: oneOf(['institutional', 'candidates', 'professionals']),
}
