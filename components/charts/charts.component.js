import Card from '../card/card.component.js'
import { Container } from './charts.style.js'

/**
  * O componente `Charts` exibe gráficos resumidos ao usuário
  */
const Charts = () => (
  <Container>
    <Card subtitle='SLA de vagas'>
    </Card>
    <Card subtitle='Novas candidaturas'>
    </Card>
  </Container>
)

export default Charts
