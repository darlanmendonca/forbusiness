import Page from '../page/page.component.js'
import Head from 'next/head'
import SegmentHeader from '../segment-header/segment-header.component'
import MainHeader from '../main-header/main-header.component'
import Link from 'next/link'
import Menu from '../menu/menu.component.js'

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
