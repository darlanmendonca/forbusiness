import Page from '../components/page/page.component.js'
import Head from 'next/head'
import SystemHeader from '../components/system-header/system-header.component.js'

const Profissionais = () => (
  <Page>
    <Head>
      <title>Profissionais - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <SystemHeader />

    <Page.Header>
      <h2>Profissionais</h2>
      <p>Encontre os melhores profissionais para seus processos seletivos.</p>
    </Page.Header>

    <Page.Content>

    </Page.Content>
  </Page>
)

export default Profissionais
