import Card from '../card/card.component.js'
import { Container } from './charts.style.js'

/**
  * O componente `Charts` exibe gráficos resumidos ao usuário
  */
const Charts = () => (
  <Container>
    <Card subtitle='SLA de vagas' />
    <Card subtitle='Novas candidaturas' />
  </Container>
)

export default Charts
