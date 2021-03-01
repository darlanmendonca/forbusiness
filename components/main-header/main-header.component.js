import { Header, Container, Navigation, NavigationLink, Button } from './main-header.style.js'
import Link from 'next/link'
import Icon from '../icon/icon.component.js'
import { useRouter } from 'next/router'
import { node } from 'prop-types'

/**
  * O componente `MainHeader` exibe o header de navegação principal.
  * O mesmo é fixado ao scrollar a página, de forma que é sempre visível.
  * Em ambientes mobile, os links de navegação, bem como outras opções,
  * são exibidas através de um menu lateral.
  */
const MainHeader = ({ children }) => (
  <Header aria-label='Principal'>
    <Container>
      <Link href='/'>
        <a aria-label={ process.env.NEXT_PUBLIC_APP_NAME }>
          <img
            src='forbusiness.svg'
            width={ 203 }
            aria-hidden='true'
            draggable='false'
          />
        </a>
      </Link>

      <Navigation aria-label='Principal'>
        { children }
      </Navigation>
    </Container>
  </Header>
)

export default MainHeader

MainHeader.propTypes = {
  // Define o conteúdo do header
  children: node,
}

/**
  * O MainHeader.Link exibe um link de navegação
  * e informa ao usuário se é um link ativo.
  */
MainHeader.Link = ({ label, href }) => {
  const router = useRouter()

  return router.pathname === href
    ? <NavigationLink data-active>{ label }</NavigationLink>
    : (
    <Link href={ href } passHref>
      <NavigationLink>{ label }</NavigationLink>
    </Link>
  )
}

/**
  * O MainHeader.Button exibe um botão com ícone e tooltip,
  * posicionado de forma secundária visualmente.
  */
MainHeader.Button = ({ label, icon, solid, ...props }) => (
  <Button aria-label={ label } { ...props }>
    <Icon
      aria-hidden='true'
      name={ icon }
      color='white'
      type={ solid ? 'solid' : 'regular' }
    />
  </Button>
)
