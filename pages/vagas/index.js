import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import useVacancies  from 'hooks/vacancies/vacancies.hook.js'
import VacancyList from 'components/vacancy-list/vacancy-list.component.js'

/**
  * Exibe a lista de vagas, com filtros de pesquisa,
  * e permite publicar e editar vagas (baseado nas permissões do usuário).
  */
const Vagas = () => {
  const vacancies = useVacancies()

  return (
    <Page>
      <Head>
        <title>Vagas - { process.env.NEXT_PUBLIC_APP_NAME }</title>
      </Head>

      <UserHeader />

      <Page.Header>
        <h2>Vagas</h2>
        <p>Gerencie as vagas da sua empresa</p>
      </Page.Header>

      <Page.Content>
        <VacancyList
          vacancies={ vacancies }
        />
      </Page.Content>
    </Page>
  )
}

export default Vagas
