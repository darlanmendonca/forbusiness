import Page from '../components/page/page.component.js'
import UserHeader from '../components/user-header/user-header.component.js'
import Avatar from '../components/avatar/avatar.component.js'
import Link from 'next/link'
import { useUser } from '../hooks/user/user.hook.js'
import Charts from '../components/charts/charts.component.js'
import { useVacancies } from '../hooks/vacancies/vacancies.hook.js'
import VacancyList from '../components/vacancy-list/vacancy-list.component.js'

/**
  * Página inicial, visível apenas para usuários logados.
  * Atua como um dashboard, exibindo informações e links úteis.
  */
const Home = () => {
  const user = useUser()
  const vacancies = useVacancies({ 'owner.id': user.id })

  const currentUser = ({ owner }) => owner.firstname === user.firstname

  return (
    <Page>
      <UserHeader />

      <Page.Header>
        <Avatar
          label={ user.firstname }
          image={ user.image }
          size='17px'
        />
        <h2 style={{ marginTop: 15 }}>Olá { user.firstname }</h2>
        <p>
          Você não tem vagas abertas na <wbr /><strong>{ user.company }</strong>.
          <wbr />
          <Link href='/vagas' passHref>
            <a>Acompanhar vagas</a>
          </Link>
        </p>
      </Page.Header>

      <Page.Content>
        <Charts />
        <VacancyList
          title='Suas vagas'
          vacancies={ vacancies.filter(currentUser) }
        />
      </Page.Content>
    </Page>
  )
}

export default Home
