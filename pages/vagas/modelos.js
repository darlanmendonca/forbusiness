import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import useVacancies from 'hooks/vacancies/vacancies.hook.js'
import VacancyList from 'components/vacancy-list/vacancy-list.component.js'

const Modelos = () => {
  const { templates } = useVacancies()

  return (
    <>
      <Head>
        <title>Modelos de Vaga - { process.env.NEXT_PUBLIC_APP_NAME }</title>
      </Head>

      <Page>
        <UserHeader />

        <Page.Header>
          <h2>Modelos de vaga</h2>
        </Page.Header>

        <Page.Content>
          <VacancyList
            title='Modelos de vaga'
            type='templates'
            vacancies={ templates.data }
            loading={ templates.isValidating }
          />
        </Page.Content>
      </Page>
    </>
  )
}

export default Modelos
