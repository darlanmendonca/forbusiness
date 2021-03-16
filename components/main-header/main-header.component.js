import { Header, Container, Logotype, Navigation, NavigationLink, Options, AvatarButton } from './main-header.style.js'
import Button from 'components/button/button.component.js'
import Link from 'next/link'
import Icon from 'components/icon/icon.component.js'
import { useRouter } from 'next/router'
import Aside, { useAside } from 'components/aside/aside.component.js'
import { node } from 'prop-types'
import { Children } from 'react'
import { ThemeProvider } from '@emotion/react'

/**
  * O componente `MainHeader` exibe o header de navegação principal.
  * O mesmo é fixado ao scrollar a página, de forma que é sempre visível.
  * Em ambientes mobile, os links de navegação, bem como outras opções,
  * são exibidas em um menu lateral.
  */
const MainHeader = ({ children }) => {
  const mobileMenu = useAside()

  const userOptions = Children
    .toArray(children)
    .find(item => item.type === MainHeader.Options)
    ?.props.children
    .find(item => item.type === MainHeader.AvatarButton)
    ?.props.children
    .props.children

  return (
    <>
      <Header aria-label='Principal'>
        <Container>
          <ThemeProvider theme={{ type: 'desktop' }}>
            { children }
          </ThemeProvider>

          <Button
            label='Menu'
            icon='menu'
            size='44px'
            onClick={ mobileMenu.show }
          />
        </Container>
      </Header>

      <Aside title='Menu' controller={ mobileMenu }>
        <ThemeProvider theme={{ type: 'mobile' }}>
          { children }

          { userOptions?.length &&
            <Options aria-label='Opções de usuário'>
              { userOptions.map(
                ({ props }, index) =>
                  <NavigationLink
                    key={ index }
                    href={ props.href }
                    children={ props.label }
                  />
                )
              }
            </Options>
          }
        </ThemeProvider>
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
  * O MainHeader.Logotype define a imagem e link a ser exibido
  * no canto esquerdo do header.
  */
MainHeader.Logotype = ({ href, label, src, width }) => (
  <Link href={ href } passHref>
    <Logotype aria-label={ label }>
      <img
        src={ src }
        width={ width }
        aria-hidden='true'
        draggable='false'
      />
    </Logotype>
  </Link>
)

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
MainHeader.Options = ({ children, ...props }) => (
  <Options { ...props }>{ children }</Options>
)

/**
  * O MainHeader.Link exibe um link de navegação
  * e informa ao usuário se é um link ativo.
  */
MainHeader.Link = ({ label, href }) => {
  const router = useRouter()

  return router.pathname === href || (href !== '/' && router.pathname.startsWith(href))
    ? <NavigationLink aria-current='page' href={ href }>{ label }</NavigationLink>
    : (
    <Link href={ href } passHref>
      <NavigationLink>{ label }</NavigationLink>
    </Link>
  )
}

MainHeader.AvatarButton = ({ label, user, image, ...props }) => (
  <AvatarButton
    label={ user }
    aria-label={ label }
    image={ image }
    size='.75rem'
    tooltip
    as='button'
    { ...props }
  />
)
