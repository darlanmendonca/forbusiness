import Page from '../components/page/page.component.js'
import Head from 'next/head'
import UserHeader from '../components/user-header/user-header.component.js'

/**
  * Exibe uma busca avançada por profissionais em diferentes fontes,
  * como no banco de currículos da VAGAS,
  * banco de currículos da empresa (BCE),
  * ou nos colaboradores atuais da empresa.
  */
const Profissionais = () => (
  <Page>
    <Head>
      <title>Profissionais - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <UserHeader />

    <Page.Header>
      <h2>Profissionais</h2>
      <p>Encontre os melhores profissionais para seus processos seletivos.</p>
    </Page.Header>

    <Page.Content>

    </Page.Content>
  </Page>
)

export default Profissionais
