import { Section as SectionElement, Title, Options, List } from './section.style.js'
import { string, node } from 'prop-types'
import { Children } from 'react'
import Card from 'components/card/card.component.js'

const Section = ({ title, subtitle, children, list, ...props }) => {
  const options = child => child.type !== Options
  const sectionOptions = Children.toArray(children).find(child => child.type === Options)

  const CardElement = list ? Card.List : Card

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

Section.List = ({ label, children, ...props }) => (
  <List
    aria-label={ label }
    { ...props }
  >
    { children }
  </List>
)

Section.Item = props => <Card as='li' { ...props } />
