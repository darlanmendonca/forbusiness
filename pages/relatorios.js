import Page from '../components/page/page.component.js'
import Head from 'next/head'
import UserHeader from '../components/user-header/user-header.component.js'

/**
  * Exibe relatórios com base no
  * banco de currículos da empresa (BCE),
  * ou nas vagas da empresa.
  * Também permite criar relatórios personalizados.
  */
const Relatorios = () => (
  <Page>
    <Head>
      <title>Relatórios - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <UserHeader />

    <Page.Header>
      <h2>Relatórios</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </Page.Header>

    <Page.Content>

    </Page.Content>
  </Page>
)

export default Relatorios
