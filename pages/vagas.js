import Page from '../page/page.component.js'
import Head from 'next/head'
import SystemHeader from '../system-header/system-header.component.js'

const Vagas = () => (
  <Page>
    <Head>
      <title>Vagas - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <SystemHeader />

    <Page.Header>
      <h2>Vagas</h2>
      <p>Gerencie as vagas da sua empresa</p>
    </Page.Header>

    <Page.Content>

    </Page.Content>
  </Page>
)

export default Vagas
