import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import Stepper from 'components/stepper/stepper.component.js'
import { Announcement, Management, Divulgation, Summary } from 'components/vacancy-form/vacancy-form.component.js'

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
      <Stepper label='Passos para publicar uma vaga'>
        <Stepper.Item label='Anúncio' current />
        <Stepper.Item label='Gestão' disabled  />
        <Stepper.Item label='Divulgação' disabled />
        <Stepper.Item label='Confirmação' disabled />
      </Stepper>

      <Announcement />
      {/* <Management /> */}
      {/* <Divulgation /> */}
      {/* <Summary /> */}
    </Page.Content>
  </Page>
)

export default Publicacao
