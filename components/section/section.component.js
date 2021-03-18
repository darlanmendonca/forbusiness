import { Section as SectionElement, Title, Options, List } from './section.style.js'
import { string, node } from 'prop-types'
import { Children } from 'react'
import Card from 'components/card/card.component.js'

const Section = ({ title, subtitle, children, list, ...props }) => {
  const options = child => child.type !== Options
  const sectionOptions = Children.toArray(children).find(child => child.type === Options)
  const hasList = Children.toArray(children).some(child => child.type === Card.Item)

  const CardElement = hasList ? Card.List : Card

  return (
    <SectionElement>
      { title &&
        <Title>{ title }</Title>
      }

      { sectionOptions }

      <CardElement>
        { Children.toArray(children).filter(options) }
      </CardElement>
    </SectionElement>
  )
}

export default Section

Section.propTypes = {
  // Define um título para a seção
  title: string,

  // Define o conteúdo da seção
  children: node,
}

Section.Options = Options

Section.List = ({ label, title, children, ...props }) => (
  <SectionElement>
    { title &&
      <Title>{ title }</Title>
    }

    <List
      aria-label={ label || title }
      { ...props }
    >
      { children }
    </List>
  </SectionElement>
)

Section.Item = props => (
  <Card as='li'
    style={{ textAlign: 'center' }}
    { ...props }
  />
)
