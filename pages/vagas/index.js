import Page from '../../components/page/page.component.js'
import Head from 'next/head'
import UserHeader from '../../components/user-header/user-header.component.js'
import Card from '../../components/card/card.component.js'
import Icon from '../../components/icon/icon.component.js'
import Link from 'next/link'

/**
  * Exibe a lista de vagas, com filtros de pesquisa,
  * e permite publicar e editar vagas (baseado nas permissões do usuário).
  */
const Vagas = () => (
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
      <Card title='Vagas em andamento' style={{ height: 3 * 100 }}>
        <Card.Options>
          <Icon
            name='menu-alt-left'
            color='var(--primary)'
            size='32px'
          />

          <Link href='/vagas/publicacao'>
            <a>
              <Icon
                name='plus'
                color='var(--primary)'
                size='32px'
              />
            </a>
          </Link>
        </Card.Options>
      </Card>
    </Page.Content>
  </Page>
)

export default Vagas
