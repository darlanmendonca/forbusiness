import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'

/**
  * Exibe configurações gerais da empresa como
  * dados da empresa,
  * construtor de testes,
  * fichas disponíveis,
  * e relatórios disponíveis.
  */
const Configuracoes = () => (
  <Page>
    <Head>
      <title>Configurações - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <UserHeader />

    <Page.Header>
      <h2>Configurações</h2>
      <p>Configure o funcionamento do modo mais adequado para sua empresa.</p>
    </Page.Header>

    <Page.Content>

    </Page.Content>
  </Page>
)

export default Configuracoes
