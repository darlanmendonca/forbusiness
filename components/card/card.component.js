import { Card as CardElement, Title, Illustration, Item, Text, Tag, Carousel } from './card.style.js'
import { string, node } from 'prop-types'
import { Children } from 'react'

/**
  * O componente `Card` serve para destacar uma informação, ou um grupo dentre outras.
  * Possui um elevação que coloca o conteúdo em foreground em relação ao background.
  */
const Card = ({ title, children, ...props }) => (
  <CardElement { ...props }>
    { title &&
      <Title>{ title }</Title>
    }
    { children }
  </CardElement>
)

export default Card

Card.propTypes = {
  // Define um título para o card
  title: string,

  // Define o conteúdo do card
  children: node,
}

/**
  * Exibe uma imagem ilustrativa para o card.
  */
Card.Illustration = Illustration

Card.List = props => <Card as='ul' { ...props} />

Card.Item = Item

Card.Title = Title

Card.Text = Text
