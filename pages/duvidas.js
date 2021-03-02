import Page from '../components/page/page.component.js'
import Head from 'next/head'
import SiteHeader from '../components/site-header/site-header.component'

/**
  * Exibe informativos gerais sobre a plataforma, tais como
  * lista de clientes,
  * software de recrutamento e seleção,
  * inteligência artificial,
  * aplicação de testes,
  * ações automáticas,
  * artigos editoriais,
  * e contato.
  */
const Duvidas = () => (
  <Page>
    <Head>
      <title>Soluções - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <SiteHeader />

    <Page.Content>

    </Page.Content>
  </Page>
)

export default Duvidas
