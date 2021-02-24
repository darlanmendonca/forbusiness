import { Header, Container, Navigation, NavigationLink, Button } from './main-header.style.js'
import Link from 'next/link'
import Icon from '../icon/icon.component.js'

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

MainHeader.Link = ({ label, href }) => (
  <Link href={ href } passHref>
    <NavigationLink>{ label }</NavigationLink>
  </Link>
)

MainHeader.Button = ({ label, icon, solid }) => (
  <Button aria-label={ label }>
    <Icon
      aria-hidden='true'
      name={ icon }
      color='white'
      type={ solid ? 'solid' : 'regular' }
    />
  </Button>
)
