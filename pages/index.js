import Page from '../page/page.component.js'
import SystemHeader from '../system-header/system-header.component.js'
import Avatar from '../avatar/avatar.component.js'
import Link from 'next/link'
import { useUser } from '../user/user.hook.js'
import Card from '../card/card.component.js'
import Charts from '../charts/charts.component.js'

const Home = () => {
  const user = useUser()

  return (
    <Page>
      <SystemHeader />

      <Page.Header>
        <Avatar
          label={ user.firstname }
          as='button'
          image={ user.image }
          size='17px'
        />
        <h2>Olá { user.firstname }</h2>
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
