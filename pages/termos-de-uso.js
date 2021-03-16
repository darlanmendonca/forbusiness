import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import Card from 'components/card/card.component.js'

/**
  * Exibe os termos de uso da plataforma
  */
const TermosDeUso = () => (
  <Page>
    <Head>
      <title>Termos de Uso - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <UserHeader />

    <Page.Header>
      <h2>Termos de Uso</h2>
    </Page.Header>

    <Page.Content>
      <Card>
        <Card.Illustration
          aria-label='Ilustração de termos de uso e segurança'
          src='termos-de-uso.svg'
          width={ 180 }
        />

        <p>
          Se sua empresa contratou o licenciamento do software de e-recruitment <strong>{ process.env.NEXT_PUBLIC_APP_NAME }</strong>, pode usar o site de carreira <strong>VAGAS.com.br</strong> para agregar captação às suas vagas.
        </p>

        <p>
          Você só pode publicar vagas que efetivamente estejam abertas e que não envolvam qualquer custo para os candidatos.
        </p>

        <p>
          As informações dos currículos só podem ser utilizadas no contexto da condução dos processos seletivos de sua empresa.
        </p>

        <p>
          Não é permitido o uso do software <strong>{ process.env.NEXT_PUBLIC_APP_NAME }</strong> para captar currículos a serem processados por soluções concorrentes sem a prévia autorização da <strong>VAGAS</strong>.
        </p>

        <p>
          Se desejar, visualize aqui o <a href='#'>texto completo do termo de uso do software de e-recruitment <strong>{ process.env.NEXT_PUBLIC_APP_NAME }</strong></a>
        </p>
      </Card>
    </Page.Content>
  </Page>
)

export default TermosDeUso
