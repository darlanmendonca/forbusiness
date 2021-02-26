import { List, Button, MenuList, Container } from './menu.style.js'
import { useMenu } from './menu.hook.js'
import Link from 'next/link'
import Icon from '../icon/icon.component.js'
import { string, node } from 'prop-types'

/** O componente `Menu` exibe um menu contextual ao clicar no botão,
  * contendo opções relacionadas.
  */
const Menu = ({ label, children }) => {
  const { isVisible, toggleVisibility } = useMenu()

  return (
    <Container>
      <Button
        role='menuitem'
        aria-expanded={ isVisible }
        aria-haspopup='true'
        onClick={ toggleVisibility }
      >
        { label }
        <Icon name='chevron-down' color='white' />
      </Button>

      <MenuList
        role='menu'
        hidden={ !isVisible }
        aria-label={label}
      >
        { children }
      </MenuList>
    </Container>
  )
}

export default Menu

Menu.propTypes = {
  // Define o texto do botão que abre o menu
  label: string,

  // Define as opções do menu
  children: node,
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

