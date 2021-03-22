import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import useUser  from 'hooks/user/user.hook.js'
import Section from 'components/section/section.component.js'
import Card from 'components/card/card.component.js'
import Icon from 'components/icon/icon.component.js'
import useVacancies  from 'hooks/vacancies/vacancies.hook.js'
import VacancyList from 'components/vacancy-list/vacancy-list.component.js'

/**
  * Exibe a lista de vagas, com filtros de pesquisa,
  * e permite publicar e editar vagas (baseado nas permissões do usuário).
  */
const Vagas = () => {
  const { vacancies } = useVacancies()
  const user = useUser()

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
        <Section.List>
          { user.permissions?.vaga.write &&
            <Section.Item>
              <Icon name='file-blank'
                solid
                size='68px'
                color='var(--secondary)'
                style={{ display: 'block', margin: '0 auto 1rem' }}
              />

              <Card.Title  style={{ justifyContent: 'center' }}>
                <Card.Link href='/vagas/publicacao'>Nova vaga</Card.Link>
              </Card.Title>

              <Card.Text>
                Crie uma vaga do zero, preenchendo cada uma das informações.
              </Card.Text>
            </Section.Item>
          }

          { user.permissions?.vaga_modelo.write &&
            <Section.Item>
              <Icon name='file-plus'
                solid
                size='68px'
                color='var(--secondary)'
                style={{ display: 'block', margin: '0 auto 1rem' }}
              />

              <Card.Title style={{ justifyContent: 'center' }}>
                <Card.Link href='/vagas/modelos'>Usar um modelo</Card.Link>
              </Card.Title>

              <Card.Text>
                Crie uma vaga a partir de um modelo de vaga definido.
              </Card.Text>
            </Section.Item>
          }

          { user.permissions?.vaga_recorrente.write &&
            <Section.Item>
              <Icon name='file-find'
                solid
                size='68px'
                color='var(--secondary)'
                style={{ display: 'block', margin: '0 auto 1rem' }}
              />

              <Card.Title style={{ justifyContent: 'center' }}>
                <Card.Link href='/vagas/recorrentes'>Usar uma vaga recorrente</Card.Link>
              </Card.Title>

              <Card.Text>
                Crie uma vaga a partir de uma vaga anteriormente publicada.
              </Card.Text>
            </Section.Item>
          }
        </Section.List>

        <VacancyList
          vacancies={ vacancies.data }
          loading={ vacancies.isValidating }
        />
      </Page.Content>
    </Page>
  )
}

export default Vagas
