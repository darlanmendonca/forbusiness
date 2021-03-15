import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import Stepper from 'components/stepper/stepper.component.js'
import Card from 'components/card/card.component.js'
import Anuncio from 'components/anuncio/anuncio.component.js'
import Gestao from 'components/gestao/gestao.component.js'
import Divulgacao from 'components/divulgacao/divulgacao.component.js'
import Confirmacao from 'components/confirmacao/confirmacao.component.js'

const NovaVaga = () => (
  <Page>
    <Head>
      <title>Nova Vaga - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <UserHeader />

    <Page.Header>
      <h2>Nova Vaga</h2>
    </Page.Header>

    <Page.Content>
      <Stepper label='Passos para publicar uma nova vaga'>
        <Stepper.Item label='Anúncio' current />
        <Stepper.Item label='Gestão' disabled  />
        <Stepper.Item label='Divulgação' disabled />
        <Stepper.Item label='Confirmação' disabled />
      </Stepper>

      <Anuncio />
      {/* <Gestao /> */}
      {/* <Divulgacao /> */}
      {/* <Confirmacao /> */}
    </Page.Content>
  </Page>
)

export default NovaVaga
