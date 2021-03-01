import { List, MenuList, Container } from './menu.style.js'
import Link from 'next/link'
import { string, node, object } from 'prop-types'

/** O componente `Menu` exibe um menu contextual ao clicar no botão,
  * contendo opções relacionadas.
  */
const Menu = ({ label, children, controller }) => (
  <Container>
    <MenuList
      role='menu'
      hidden={ !controller.isVisible }
      aria-label={ label }
    >
      { children }
    </MenuList>
  </Container>
)

export default Menu

Menu.propTypes = {
  // Define o texto do botão que abre o menu
  label: string,

  // Define as opções do menu
  children: node,

  // Define um controlador de visibilidade externo ao menu utilizando o hook useMenu.
  controller: object,
}

/**
  * O Menu.Item permite definir um link como opção do menu.
  */
Menu.Item = ({ label, href }) => (
  <li role='none'>
    <Link href={ href }>
      <a role='menuitem'>{ label }</a>
    </Link>
  </li>
)

Menu.Item.propTypes = {
  // Define a descrição da opção
  label: string,

  // Define a opção como um link
  href: string,
}

