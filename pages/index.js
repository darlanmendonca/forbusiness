import Page from '../page/page.component.js'
import Head from 'next/head'
import SegmentHeader from '../segment-header/segment-header.component'
import MainHeader from '../main-header/main-header.component'
import Avatar from '../avatar/avatar.component.js'
import Menu from '../menu/menu.component.js'
import WelcomeHeader from '../welcome-header/welcome-header.component.js'

const Content = ({ children }) => (
  <main style={{ flex: 1, color: 'var(--primary)', margin: '0 auto', maxWidth: 1200, width: '100%' }}>
    { children }
  </main>
)

const Home = () => (
  <Page>
    <SegmentHeader current='forbusiness' />

    <MainHeader>
      <MainHeader.Link label='Início' href='/'  />
      <MainHeader.Link label='Vagas' href='/vagas' />
      <MainHeader.Link label='Profissionais' href='/profissionais' />
      <MainHeader.Link label='Relatórios' href='/relatorios' />
      <MainHeader.Link label='Configurações' href='/configuracoes' />

      <MainHeader.Button label='Buscar profissionais' icon='search' />
      <MainHeader.Button label='Novidades' icon='megaphone' solid />
      <MainHeader.Button label='Mensagens' icon='message-square-detail' solid />
      <MainHeader.Button label='Entrevistas online' icon='videos' solid />
      <MainHeader.Button label='Marketplace' icon='shopping-bag' solid />
      <MainHeader.Button label='Ajuda' icon='help-circle' solid />

      <Avatar
        label='Moisés'
        as='button'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnbPwGl2V5JYyHx0FKy1daEeMN77cDCKPjQ&usqp=CAU'
        size='.75rem' style={{ transform: 'translateY(-1rem)', marginLeft: 8 }}
      />

      {/* <Menu label='Darlan'> */}
      {/*   <Menu.Item */}
      {/*     label='Alterar senha' */}
      {/*     href='/alterar-senha' */}
      {/*   /> */}
      {/*   <Menu.Item */}
      {/*     label='Sair' */}
      {/*     href='/sair' */}
      {/*   /> */}
      {/* </Menu> */}
    </MainHeader>

    <WelcomeHeader />

    <Page.Content>

    </Page.Content>
  </Page>
)

export default Home
