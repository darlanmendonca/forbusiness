import MainHeader from '../main-header/main-header.component'
import { useUser } from '../user/user.hook.js'
import Avatar from '../avatar/avatar.component.js'
// import Menu from '../menu/menu.component.js'

const SystemHeader = () => {
  const user = useUser()

  return (
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
        label={ user.firstname }
        as='button'
        image={ user.image }
        size='.75rem'
        style={{ transform: 'translateY(-1rem)', marginLeft: 8 }}
        tooltip
      />

      {/* <Menu label={ user.firstname }> */}
      {/*   <Menu.Item */}
      {/*     label='Alterar dados' */}
      {/*     href='/editar-dados' */}
      {/*   /> */}
      {/*   <Menu.Item */}
      {/*     label='Sair' */}
      {/*     href='/sair' */}
      {/*   /> */}
      {/* </Menu> */}
    </MainHeader>
  )
}

export default SystemHeader
