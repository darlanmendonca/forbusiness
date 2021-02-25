import Page from '../page/page.component.js'
import Head from 'next/head'
import SystemHeader from '../system-header/system-header.component.js'

const Relatorios = () => (
  <Page>
    <Head>
      <title>Relatórios - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <SystemHeader />

    <Page.Header>
      <h2>Relatórios</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </Page.Header>

    <Page.Content>

    </Page.Content>
  </Page>
)

export default Relatorios
