import { Header, Container, Navigation, NavigationLink, Options, Button, MenuButton, MenuHeader } from './main-header.style.js'
import Link from 'next/link'
import Icon from '../icon/icon.component.js'
import { useRouter } from 'next/router'
import Aside from '../aside/aside.component.js'
import { useAside } from '../aside/aside.hook.js'
import { node } from 'prop-types'

/**
  * O componente `MainHeader` exibe o header de navegação principal.
  * O mesmo é fixado ao scrollar a página, de forma que é sempre visível.
  * Em ambientes mobile, os links de navegação, bem como outras opções,
  * são exibidas em um menu lateral.
  */
const MainHeader = ({ children }) => {
  const mobileMenu = useAside()

  return (
    <>
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

          { children }

          <MenuButton aria-label='Menu' onClick={ mobileMenu.show }>
            <Icon
              name='menu'
              aria-hidden='true'
              color='white'
              size='34px'
            />
          </MenuButton>
        </Container>
      </Header>

      <Aside title='Menu' controller={ mobileMenu }>
        { children }
      </Aside>
    </>
  )
}

export default MainHeader

MainHeader.propTypes = {
  // Define o conteúdo do header
  children: node,
}

/**
  * O MainHeader.Navigation exibe links de navegação,
  * visível em telas maiores que 1200px de largura.
  * Em telas menores é exibido no menu lateral.
  */
MainHeader.Navigation = ({ children }) => (
  <Navigation aria-label='Principal'>
    { children }
  </Navigation>
)

/**
  * O MainHeader.Navigation exibe botões para funções complementares,
  * visível em telas maiores que 1200px de largura.
  * Em telas menores é exibido no menu lateral.
  */
MainHeader.Options = ({ children }) => (
  <Options>{ children }</Options>
)

/**
  * O MainHeader.Link exibe um link de navegação
  * e informa ao usuário se é um link ativo.
  */
MainHeader.Link = ({ label, href }) => {
  const router = useRouter()

  return router.pathname === href
    ? <NavigationLink aria-current="page" href={ href }>{ label }</NavigationLink>
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
