import { useState } from 'react'
import { List, Button, MenuList, Container } from './menu.style.js'
import Link from 'next/link'
import Icon from '../icon/icon.component.js'

const Menu = ({ label, children }) => {
  const [ isVisible, setIsVisible ] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

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

Menu.Item = ({ label, href, children }) => (
  <li role='none'>
    <Link href={ href }>
      <a role='menuitem'>{ label }</a>
    </Link>
  </li>
)

export default Menu

