import Page from '../components/page/page.component.js'
import Head from 'next/head'
import SegmentHeader from '../components/segment-header/segment-header.component'
import MainHeader from '../components/main-header/main-header.component'
import Link from 'next/link'
import Menu from '../components/menu/menu.component.js'

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
const Sobre = () => (
  <Page>
    <Head>
      <title>Plataforma de Recrutamento e Seleção - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <MainHeader>
      <MainHeader.Link
        label='Plataforma de Recrutamento e Seleção'
        href='/plataforma-de-recrutamento-e-selecao'
      />
      <MainHeader.Link label='Soluções' href='/solucoes' />
      <MainHeader.Link label='Conteúdo' href='/conteudo' />
      <MainHeader.Link label='Dúvidas' href='/duvidas' />
    </MainHeader>

    <Page.Content>

    </Page.Content>
  </Page>
)

export default Sobre
