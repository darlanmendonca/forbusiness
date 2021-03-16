import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import Section from 'components/section/section.component.js'
import Card from 'components/card/card.component.js'
import Icon from 'components/icon/icon.component.js'
import useUser  from 'hooks/user/user.hook.js'
import Link from 'next/link'

/**
  * Exibe a publicação de vaga, permitindo publicar uma nova vaga do zero
  * ou a partir de uma vaga recorrente/modelo.
  */
const Publicacao = () => {
  const user = useUser()

  return (
    <Page>
      <Head>
        <title>Publicação de Vaga - { process.env.NEXT_PUBLIC_APP_NAME }</title>
      </Head>

      <UserHeader />

      <Page.Header>
        <h2>Publicação de Vaga</h2>
      </Page.Header>

      <Page.Content>
        <Section.List>
          { user.permissions?.vaga.write &&
            <Section.Item>
              <Icon name='file-blank'
                solid
                size='68px'
                style={{ display: 'block', margin: '0 auto 1rem' }}
              />

              <Card.Title  style={{ justifyContent: 'center' }}>
                <Card.Link href='/vagas/publicacao/nova-vaga'>Nova vaga</Card.Link>
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
                style={{ display: 'block', margin: '0 auto 1rem' }}
              />

              <Card.Title style={{ justifyContent: 'center' }}>
                <Card.Link href='/vagas/publicacao/modelos'>Usar um modelo</Card.Link>
              </Card.Title>

              <Card.Text>
                Crie uma vaga a partir de um modelo de vaga definido por um de seus colaboradores.
              </Card.Text>
            </Section.Item>
          }

          { user.permissions?.vaga_recorrente.write &&
            <Section.Item>
              <Icon name='file-find'
                solid
                size='68px'
                style={{ display: 'block', margin: '0 auto 1rem' }}
              />

              <Card.Title style={{ justifyContent: 'center' }}>
                <Card.Link href='/vagas/publicacao/recorrentes'>Usar uma vaga recorrente</Card.Link>
              </Card.Title>

              <Card.Text>
                Crie uma vaga a partir de uma vaga anteriormente publicada.
              </Card.Text>
            </Section.Item>
          }
        </Section.List>
      </Page.Content>
    </Page>
  )
}

export default Publicacao
