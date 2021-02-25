import Page from '../page/page.component.js'
import Head from 'next/head'
import SystemHeader from '../system-header/system-header.component.js'

const Configuracoes = () => (
  <Page>
    <Head>
      <title>Configurações - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <SystemHeader />

    <Page.Header>
      <h2>Configurações</h2>
      <p>Configure o funcionamento do modo mais adequado para sua empresa.</p>
    </Page.Header>

    <Page.Content>

    </Page.Content>
  </Page>
)

export default Configuracoes
