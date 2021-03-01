import MainHeader from '../main-header/main-header.component'
import { useUser } from '../../hooks/user/user.hook.js'
import Avatar from '../avatar/avatar.component.js'
import Menu from '../menu/menu.component.js'
import { useMenu } from '../menu/menu.hook.js'

/**
  * O componente `UserHeader` exibe o links e opções de usuário,
  * baseado nas permissões do usuário.
  */
const UserHeader = () => {
  const user = useUser()
  const userOptions = useMenu()

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
      <MainHeader.Button label='Marketplace' icon='store' solid />
      <MainHeader.Button label='Ajuda' icon='help-circle' solid />

      <Avatar
        label={ user.firstname }
        aria-label='Opções de usuário'
        image={ user.image }
        size='.75rem'
        style={{ transform: 'translateY(-1rem)', marginLeft: 8 }}
        tooltip
        as='button'
        onClick={ userOptions.toggle }
        { ...userOptions.buttonProps }
      >
        <Menu controller={ userOptions }>
          <Menu.Item
            label='Alterar dados'
            href='/editar-dados'
          />
          <Menu.Item
            label='Sair'
            href='/sair'
          />
        </Menu>
      </Avatar>
    </MainHeader>
  )
}

export default UserHeader
