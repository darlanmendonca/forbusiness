import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import { Summary } from 'components/vacancy-form/vacancy-form.component.js'

const Editar = () => (
  <Page>
    <Head>
      <title>Editar Modelo de Vaga - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <UserHeader />

    <Page.Header>
      <h2>Editar de Vaga</h2>
    </Page.Header>

    <Page.Content>
      <Summary />
    </Page.Content>
  </Page>
)

export default Editar
