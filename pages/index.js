import Page from '../components/page/page.component.js'
import UserHeader from '../components/user-header/user-header.component.js'
import Avatar from '../components/avatar/avatar.component.js'
import Link from 'next/link'
import { useUser } from '../hooks/user/user.hook.js'
import Card from '../components/card/card.component.js'
import Charts from '../components/charts/charts.component.js'

/**
  * Página inicial, visível apenas para usuários logados.
  * Atua como um dashboard, exibindo informações e links úteis.
  */
const Home = () => {
  const user = useUser()

  return (
    <Page>
      <UserHeader />

      <Page.Header>
        <Avatar
          label={ user.firstname }
          as='button'
          image={ user.image }
          size='17px'
        />
        <h2 style={{ marginTop: 15 }}>Olá { user.firstname }</h2>
        <p>
          Você não tem vagas abertas na <strong>{ user.company }</strong>.
          <Link href='/vagas' passHref>
            <a>Acompanhar vagas</a>
          </Link>
        </p>
      </Page.Header>

      <Page.Content>
        <Charts />
        <Card title='Suas vagas' style={{ height: 40 * 10 }} />
      </Page.Content>
    </Page>
  )
}

export default Home
