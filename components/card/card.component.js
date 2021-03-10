import { Container, Section, Title, Subtitle, Illustration, Options, Item, Text, Tag } from './card.style.js'
import { string, node } from 'prop-types'
import { Children } from 'react'

/**
  * O componente `Card` serve para destacar uma informação, ou um grupo dentre outras.
  * Possui um elevação que coloca o conteúdo em foreground em relação ao background.
  */
const Card = ({ title, subtitle, children, ...props }) => {
  const options = child => child.type !== Card.Options
  const cardOptions = Children.toArray(children).find(child => child.type === Card.Options)

  return (
    <Container>
      { title &&
        <Title>{ title }</Title>
      }

      { cardOptions &&
        <>
          { cardOptions }
        </>
      }

      <Section { ...props }>
        { subtitle &&
          <Subtitle>{ subtitle }</Subtitle>
        }
        { Children.toArray(children).filter(options) }
      </Section>
    </Container>
  )
}

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

Card.Item = Item

Card.Subtitle = Subtitle

Card.Text = Text
