import { Container, Content, Header, Title, Text } from './page.style.js'
import SegmentHeader from '../segment-header/segment-header.component'
import CopywriterFooter from '../copywriter-footer/copywriter-footer.component.js'
import { node } from 'prop-types'
import { motion, useReducedMotion } from 'framer-motion'

/**
  * O componente `Page` define o layout da página
  * incluindo componentes constantes em todas as páginas,
  * como o header de segmento, e footer da página.
  */
const Page = ({ children }) => (
  <Container>
    <SegmentHeader current='professionals' />
    { children }
    <CopywriterFooter />
  </Container>
)

export default Page

Page.propTypes = {
  // Define o conteúdo interno da página
  children: node,
}

/**
  * O `Page.Header` exibe informações com alto grau
  * de contraste na hierarquia da página.
  */
Page.Header = Header

Page.Header.propTypes = {
  // Define o conteúdo do header
  children: node,
}

/**
  * O `Page.Content` define o conteúdo principal da página,
  * e empurra o footer para o inferior da página
  * a fim de manter a hierarquia visual do mesmo.
  */
Page.Content = ({ children }) => {
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const transition = { type: 'tween' }

  const initial = shouldReduceMotion ? 'visible' : 'hidden'
  const animate = shouldReduceMotion ? 'visible' : 'visible'

  return (
    <Content>
      <motion.div
        initial={ initial }
        animate={ animate }
        variants={ variants }
        transition={ transition }
      >
        { children }
      </motion.div>
    </Content>
  )
}

Page.Content.propTypes = {
  // Define o elementos a exibir
  children: node,
}
