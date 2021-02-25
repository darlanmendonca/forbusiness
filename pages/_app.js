import Head from 'next/head'
import '../styles/globals.css'
import '../styles/tokens.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap' rel='stylesheet' />
      <title>{ process.env.NEXT_PUBLIC_APP_NAME }</title>
      <meta key='robots' name='robots' content='noindex,follow' />
      <meta key='googlebot' name='googlebot' content='noindex,follow' />
      <link rel='icon' href='/favicon.png' />
      <script src='https://unpkg.com/boxicons@latest/dist/boxicons.js'></script>
    </Head>

    <Component { ...pageProps } />
  </>
)

export default App
