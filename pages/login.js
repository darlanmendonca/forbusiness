import Page from 'components/page/page.component.js'
import Head from 'next/head'
import SiteHeader from 'components/site-header/site-header.component'
import Card from 'components/card/card.component.js'

/**
  * Exibe a tela de acesso para usuários
  */
const Login = () => (
  <Page>
    <Head>
      <title>Login - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <SiteHeader />

    <Page.Content style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          alt='Pessoas trabalhando em formato Home office'
          style={{ maxWidth: '100%', width: '100%' }}
          src='working_together_from_home.svg'
        />
      </div>
      <Card title='Login' style={{ width: '50%' }} />
    </Page.Content>
  </Page>
)

export default Login
