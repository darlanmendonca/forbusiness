import { Container, Title, Subtitle, Illustration, Options } from './card.style.js'
import { string, node } from 'prop-types'

/**
  * O componente `Card` serve para destacar uma informação, ou um grupo dentre outras.
  * Possui um elevação que coloca o conteúdo em foreground em relação ao background.
  */
const Card = ({ title, subtitle, children, ...props }) => (
  <>
    { title &&
      <Title>{ title }</Title>
    }

    <Container { ...props }>
      { subtitle &&
        <Subtitle>{ subtitle }</Subtitle>
      }
      { children }
    </Container>
  </>
)

export default Card

Card.propTypes = {
  // Define um título, visível externamente ao card
  title: string,

  // Define um subtítulo, visível internamente ao card
  subtitle: string,

  // Define o conteúdo do card
  children: node,
}

/**
  * Exibe uma imagem ilustrativa para o card.
  */
Card.Illustration = Illustration

/**
  * Exibe um header com opções relativas ao card
  */
Card.Options = Options
