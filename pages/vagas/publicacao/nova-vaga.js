import Page from '../../../components/page/page.component.js'
import Head from 'next/head'
import UserHeader from '../../../components/user-header/user-header.component.js'
import Stepper from '../../../components/stepper/stepper.component.js'

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
        <Stepper.Item label='Anúncio' />
        <Stepper.Item label='Gestão' current />
        <Stepper.Item label='Divulgação' />
        <Stepper.Item label='Confirmação' />
      </Stepper>
    </Page.Content>
  </Page>
)

export default NovaVaga
