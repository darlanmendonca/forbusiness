import MainHeader from 'components/main-header/main-header.component'
import useUser  from 'hooks/user/user.hook.js'
import Menu, { useMenu } from 'components/menu/menu.component.js'
import Aside, { useAside } from 'components/aside/aside.component.js'
import Button from 'components/button/button.component.js'

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
        <MainHeader.Logotype
          label={ process.env.NEXT_PUBLIC_APP_NAME }
          href='/'
          src='forbusiness.svg'
          width={ 203 }
        />

        <MainHeader.Navigation>
          <MainHeader.Link label='Início' href='/'  />
          <MainHeader.Link label='Vagas' href='/vagas' />
          <MainHeader.Link label='Profissionais' href='/profissionais' />
          <MainHeader.Link label='Marketplace' href='/marketplace' />
          <MainHeader.Link label='Relatórios' href='/relatorios' />
          <MainHeader.Link label='Configurações' href='/configuracoes' />
        </MainHeader.Navigation>

        <MainHeader.Options aria-label='Outros recursos'>
          {/* <Button label='Buscar profissionais' icon='search' /> */}
          <Button label='Mensagens' icon='message-square-detail' solid onClick={ messages.show } />
          <Button label='Novidades' icon='megaphone' solid onClick={ news.show } />
          {/* <Button label='Entrevistas online' icon='videos' solid /> */}
          {/* <Button label='Marketplace' icon='store' solid /> */}
          <Button label='Ajuda' icon='help-circle' solid onClick={ help.show } />
          <MainHeader.AvatarButton
            label='Opções de usuário'
            user={ user.firstname }
            image={ user.image }
            onClick={ userOptions.toggle }
            { ...userOptions.buttonProps }
          >
            <Menu controller={ userOptions }>
              <Menu.Item
                label='Editar dados'
                href='/editar-dados'
              />
              <Menu.Item
                label='Sair'
                href='/login'
              />
            </Menu>
          </MainHeader.AvatarButton>
        </MainHeader.Options>
      </MainHeader>

      <Aside title='Novidades' controller={ news } />

      <Aside title='Mensagens' controller={ messages } />

      <Aside title='Ajuda' controller={ help } />
    </>
  )
}

export default UserHeader
