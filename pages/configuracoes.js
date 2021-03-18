import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import Section from 'components/section/section.component.js'
import Card from 'components/card/card.component.js'

/**
  * Exibe configurações gerais da empresa como
  * dados da empresa,
  * construtor de testes,
  * fichas disponíveis,
  * e relatórios disponíveis.
  */
const Configuracoes = () => (
  <Page>
    <Head>
      <title>Configurações - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <UserHeader />

    <Page.Header>
      <h2>Configurações</h2>
      <p>Configure o funcionamento do modo mais adequado para sua empresa.</p>
    </Page.Header>

    <Page.Content>
      <Section title='Empresa'>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Dados cadastrais</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Serviços contratados</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Apresentação</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Twitter</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>LGPD - Termos de uso</Card.Link></Card.Title>
        </Card.Item>
      </Section>

      <Section title='Usuários'>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Usuários e divisões</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Política de senha</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Permissões sobre relatórios</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Permissões sobre fichas</Card.Link></Card.Title>
        </Card.Item>
      </Section>

      <Section title='Gestão de vagas'>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Construtor de Testes</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Fichas disponíveis</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Relatórios disponíveis</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Modelos de vaga</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Mensagens padrão</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Mensagens SMS padrão</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Status globais</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Fases dos processos</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Categoria de documentos externos</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Perfil de cargo do VAGAS ETALENT</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Permissão de indicação</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Tempo de fechamento de vaga</Card.Link></Card.Title>
        </Card.Item>
        <Card.Item>
          <Card.Title><Card.Link href='#'>Requisitantes de vagas</Card.Link></Card.Title>
        </Card.Item>
      </Section>
    </Page.Content>
  </Page>
)

export default Configuracoes
