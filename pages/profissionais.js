import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import Section from 'components/section/section.component.js'
import Card from 'components/card/card.component.js'
import Icon from 'components/icon/icon.component.js'

/**
  * Exibe uma busca avançada por profissionais em diferentes fontes,
  * como no banco de currículos da VAGAS,
  * banco de currículos da empresa (BCE),
  * ou nos colaboradores atuais da empresa.
  */
const Profissionais = () => (
  <Page>
    <Head>
      <title>Profissionais - { process.env.NEXT_PUBLIC_APP_NAME }</title>
    </Head>

    <UserHeader />

    <Page.Header>
      <h2>Profissionais</h2>
      <p>Encontre os melhores profissionais para seus processos seletivos.</p>
    </Page.Header>

    <Page.Content>
      <Section.List>
        <Section.Item>
          <Icon name='data'
            solid
            size='68px'
            color='var(--secondary)'
            style={{ display: 'block', margin: '0 auto 1rem' }}
          />

          <Card.Title  style={{ justifyContent: 'center' }}>
            <Card.Link href='/profissionais/banco-de-curriculos'>Banco de Currículos do VAGAS.com</Card.Link>
          </Card.Title>

          <Card.Text>
            Encontre os melhores profissionais cadastrados em todo nosso site.
          </Card.Text>
        </Section.Item>

        <Section.Item>
          <Icon name='file'
            solid
            size='68px'
            color='var(--secondary)'
            style={{ display: 'block', margin: '0 auto 1rem' }}
          />

          <Card.Title style={{ justifyContent: 'center' }}>
            <Card.Link href='/profissionais/banco-de-talentos'>Banco de Talentos</Card.Link>
          </Card.Title>

          <Card.Text>
            Encontre os melhores profissionais para seus processos de recrutamento.
          </Card.Text>
        </Section.Item>

        <Section.Item>
          <Icon name='user-badge'
            solid
            size='68px'
            color='var(--secondary)'
            style={{ display: 'block', margin: '0 auto 1rem' }}
          />

          <Card.Title style={{ justifyContent: 'center' }}>
            <Card.Link href='/profissionais/colaboradores'>Colaboradores</Card.Link>
          </Card.Title>

          <Card.Text>
            Identifique os talentos dentro de casa e aperfeiçoe a gestão de carreira.
          </Card.Text>
        </Section.Item>
      </Section.List>
    </Page.Content>
  </Page>
)

export default Profissionais
