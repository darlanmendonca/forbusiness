import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'

/**
  * Exibe produtos de parceiros que podem ser adquiridos e
  * aplicados em diferentes fases do processo seletivo.
  */
const Marketplace = () => (
  <Page>
    <Head>
      <title>Marketplace - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <UserHeader />

    <Page.Header>
      <h2>Marketplace</h2>
      <p>Essa é sua central de serviços contratados, onde você pode ver quais estão disponíveis e aplicá-los em seu processo seletivo.</p>
    </Page.Header>

    <Page.Content>

    </Page.Content>
  </Page>
)

export default Marketplace
