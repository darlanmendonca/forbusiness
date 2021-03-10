import Page from '../components/page/page.component.js'
import UserHeader from '../components/user-header/user-header.component.js'
import Avatar from '../components/avatar/avatar.component.js'
import Link from 'next/link'
import { useUser } from '../hooks/user/user.hook.js'
import Card from '../components/card/card.component.js'
import Charts from '../components/charts/charts.component.js'
import { useVacancies } from '../hooks/vacancies/vacancies.hook.js'
import Tags from '../components/tags/tags.component.js'
import Button from '../components/button/button.component.js'
import Icon from '../components/icon/icon.component.js'

/**
  * Página inicial, visível apenas para usuários logados.
  * Atua como um dashboard, exibindo informações e links úteis.
  */
const Home = () => {
  const user = useUser()
  const vacancies = useVacancies()
  const day = 'numeric'
  const month = 'long'

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

        <Card title='Suas vagas em andamento' as='ul'>
          <Card.Options>
            <Link href='/vagas/publicacao' passHref>
              <Button as='a' aria-label='Publicar vaga'>
                <Icon
                  name='plus'
                  color='var(--primary)'
                />
              </Button>
            </Link>
          </Card.Options>

          { vacancies
            .filter(vaga => vaga.owner.firstname === user.firstname)
            .filter(vaga => vaga.status === 'Em andamento')
            .map(({ name, location, level, id, owner, status, date }, index) =>
              <Card.Item key={ index }>
                <Card.Subtitle>
                  <Avatar
                    label={ owner.firstname }
                    image={ owner.image }
                    size='11px'
                    style={{ marginRight: 10 }}
                    tooltip
                  />

                  { name } { level }
                </Card.Subtitle>

                <Tags label='Informações da vaga'>
                  <Tags.Item
                    label='Código da vaga'
                    color='var(--accent)'
                    icon='note'
                  >
                    v{ id }
                  </Tags.Item>

                  <Tags.Item
                    label='Local de trabalho'
                    color='var(--blue)'
                    icon='map'
                  >
                    { location }
                  </Tags.Item>

                  <Tags.Item
                    label='Período de inscrições'
                    icon='time-five'
                    color={ status === 'Encerrada' ? 'var(--yellow)' : 'var(--green)' }
                  >
                    { date.open.toLocaleDateString('pt-BR', { day }) }
                    { ' a ' }
                    { date.expiration.toLocaleDateString('pt-BR', { day, month }) }
                  </Tags.Item>
                </Tags>
              </Card.Item>
            )
          }
        </Card>
      </Page.Content>
    </Page>
  )
}

export default Home
