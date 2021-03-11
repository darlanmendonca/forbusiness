import Page from '../../components/page/page.component.js'
import Head from 'next/head'
import UserHeader from '../../components/user-header/user-header.component.js'
import Card from '../../components/card/card.component.js'
import Icon from '../../components/icon/icon.component.js'
import Link from 'next/link'
import { useVacancies } from '../../hooks/vacancies/vacancies.hook.js'
import Tags from '../../components/tags/tags.component.js'
import Avatar from '../../components/avatar/avatar.component.js'
import Menu from '../../components/menu/menu.component.js'
import { useMenu } from '../../components/menu/menu.hook.js'
import Button from '../../components/button/button.component.js'

/**
  * Exibe a lista de vagas, com filtros de pesquisa,
  * e permite publicar e editar vagas (baseado nas permissões do usuário).
  */
const Vagas = () => {
  const vacancies = useVacancies()
  const day = 'numeric'
  const month = 'long'

  const listOptions = useMenu()

  return (
    <Page>
      <Head>
        <title>Vagas - { process.env.NEXT_PUBLIC_APP_NAME }</title>
      </Head>

      <UserHeader />

      <Page.Header>
        <h2>Vagas</h2>
        <p>Gerencie as vagas da sua empresa</p>
      </Page.Header>

      <Page.Content>
        <Card.List title='Vagas'>
          <Card.Options>
            <Button aria-label='Filtros'>
              <Icon
                name='slider'
                color='var(--primary)'
              />
            </Button>

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
                  <Tags.Item label='Código da vaga' color='var(--accent)' icon='file-blank'>
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
                    color={ status === 'Encerrada' ? 'var(--yellow)' : 'var(--green)' }
                    icon='time-five'
                  >
                    { date.open.toLocaleDateString('pt-BR', { day }) }
                    { ' a ' }
                    { date.expiration.toLocaleDateString('pt-BR', { day, month }) }
                  </Tags.Item>

                  <Tags.Item
                    label='Status'
                    color='var(--light-blue)'
                    icon='info-circle'
                  >
                    { status }
                  </Tags.Item>
                </Tags>
              </Card.Item>
            )
          }
        </Card.List>
      </Page.Content>
    </Page>
  )
}

export default Vagas
