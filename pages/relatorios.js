import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import Section from 'components/section/section.component.js'
import Card from 'components/card/card.component.js'
import Icon from 'components/icon/icon.component.js'

/**
  * Exibe relatórios com base no
  * banco de currículos da empresa (BCE),
  * ou nas vagas da empresa.
  * Também permite criar relatórios personalizados.
  */
const Relatorios = () => (
  <Page>
    <Head>
      <title>Relatórios - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <UserHeader />

    <Page.Header>
      <h2>Relatórios</h2>
      <p>Descubra as melhores informações de seus dados.</p>
    </Page.Header>

    <Page.Content>
      <Section.List>
        <Section.Item>
          <Icon name='file'
            solid
            size='68px'
            color='var(--secondary)'
            style={{ display: 'block', margin: '0 auto 1rem' }}
          />

          <Card.Title  style={{ justifyContent: 'center' }}>
            <Card.Link href='/profissionais/banco-de-curriculos'>Análise de currículos no BCE</Card.Link>
          </Card.Title>

          <Card.Text>
            Raio-X dos profissionais do Banco de Currículos da Empresa.
          </Card.Text>
        </Section.Item>

        <Section.Item>
          <Icon name='pie-chart-alt-2'
            solid
            size='68px'
            color='var(--secondary)'
            style={{ display: 'block', margin: '0 auto 1rem' }}
          />

          <Card.Title style={{ justifyContent: 'center' }}>
            <Card.Link href='/profissionais/banco-de-talentos'>Visão geral das vagas</Card.Link>
          </Card.Title>

          <Card.Text>
            Acompanhe o andamento de todas as vagas da sua empresa.
          </Card.Text>
        </Section.Item>

        <Section.Item>
          <Icon name='plus-square'
            solid
            size='68px'
            color='var(--secondary)'
            style={{ display: 'block', margin: '0 auto 1rem' }}
          />

          <Card.Title style={{ justifyContent: 'center' }}>
            <Card.Link href='/profissionais/colaboradores'>Relatórios Customizados</Card.Link>
          </Card.Title>

          <Card.Text>
            Consulte relatórios desenvolvidos exclusivamente para sua empresa.
          </Card.Text>
        </Section.Item>
      </Section.List>
    </Page.Content>
  </Page>
)

export default Relatorios
