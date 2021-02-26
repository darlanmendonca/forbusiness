import Page from '../components/page/page.component.js'
import Head from 'next/head'
import UserHeader from '../components/user-header/user-header.component.js'

/**
  * Exibe a lista de vagas, com filtros de pesquisa,
  * e permite baseado nas permissões do usuário, publicar e editar vagas.
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

    </Page.Content>
  </Page>
)

export default Vagas
