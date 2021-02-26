import { Container, Title, Subtitle } from './card.style.js'

const Card = ({ children, placeholder, title, ...props }) => (
  <>
    { title &&
      <Title>{ title }</Title>
    }

    <Container { ...props }>
      { placeholder &&
        <Subtitle>{ placeholder }</Subtitle>
      }
      { children }
    </Container>
  </>
)

export default Card
