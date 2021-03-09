import Page from '../../components/page/page.component.js'
import Head from 'next/head'
import UserHeader from '../../components/user-header/user-header.component.js'

/**
  * Exibe a publicação de vaga, permitindo publicar uma nova vaga do zero
  * ou a partir de uma vaga recorrente/modelo.
  */
const Publicacao = () => (
  <Page>
    <Head>
      <title>Publicação de Vaga - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <UserHeader />

    <Page.Header>
      <h2>Publicação de Vaga</h2>
    </Page.Header>

    <Page.Content>

    </Page.Content>
  </Page>
)

export default Publicacao
