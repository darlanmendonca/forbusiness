import MainHeader from 'components/main-header/main-header.component'

/**
  * O componente `SiteHeader` exibe o links de navegação
  * do site, visíveis a usuários não logados.
  */
const SiteHeader = () => (
  <MainHeader>
    <MainHeader.Logotype
      label={ process.env.NEXT_PUBLIC_APP_NAME }
      href='/'
      src='forbusiness.svg'
      width={ 203 }
    />

    <MainHeader.Navigation>
      <MainHeader.Link
        label='Plataforma de Recrutamento e Seleção'
        href='/plataforma-de-recrutamento-e-selecao'
      />
      <MainHeader.Link label='Soluções' href='/solucoes' />
      <MainHeader.Link label='Conteúdo' href='/conteudo' />
      <MainHeader.Link label='Dúvidas' href='/duvidas' />
      <MainHeader.Link label='Login' href='/login' />
    </MainHeader.Navigation>
  </MainHeader>
)

export default SiteHeader
