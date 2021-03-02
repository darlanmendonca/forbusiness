import MainHeader from '../main-header/main-header.component'
import { useUser } from '../../hooks/user/user.hook.js'
import Avatar from '../avatar/avatar.component.js'
import Menu from '../menu/menu.component.js'
import { useMenu } from '../menu/menu.hook.js'
import Aside from '../aside/aside.component.js'
import { useAside } from '../aside/aside.hook.js'

/**
  * O componente `UserHeader` exibe o links e opções de usuário,
  * baseado nas permissões do usuário.
  */
const UserHeader = () => {
  const user = useUser()
  const userOptions = useMenu()
  const news = useAside()
  const messages = useAside()
  const help = useAside()

  return (
    <>
      <MainHeader>
        <MainHeader.Link label='Início' href='/'  />
        <MainHeader.Link label='Vagas' href='/vagas' />
        <MainHeader.Link label='Profissionais' href='/profissionais' />
        <MainHeader.Link label='Relatórios' href='/relatorios' />
        <MainHeader.Link label='Configurações' href='/configuracoes' />
        <MainHeader.Link label='Marketplace' href='/marketplace' />

        <MainHeader.Button label='Buscar profissionais' icon='search' />
        <MainHeader.Button label='Novidades' icon='megaphone' solid onClick={ news.show } />
        <MainHeader.Button label='Mensagens' icon='message-square-detail' solid onClick={ messages.show } />
        {/* <MainHeader.Button label='Entrevistas online' icon='videos' solid /> */}
        {/* <MainHeader.Button label='Marketplace' icon='store' solid /> */}
        <MainHeader.Button label='Ajuda' icon='help-circle' solid onClick={ help.show } />

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

      <Aside title='Novidades' controller={ news }>

      </Aside>

      <Aside title='Mensagens' controller={ messages }>

      </Aside>

      <Aside title='Ajuda' controller={ help }>

      </Aside>
    </>
  )
}

export default UserHeader
