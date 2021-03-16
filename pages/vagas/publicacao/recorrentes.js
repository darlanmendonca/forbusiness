import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import useVacancies from 'hooks/vacancies/vacancies.hook.js'
import VacancyList from 'components/vacancy-list/vacancy-list.component.js'

const Recorrentes = () => {
  const { recurrents } = useVacancies()

  return (
    <>
      <Head>
        <title>Vagas recorrentes - { process.env.NEXT_PUBLIC_APP_NAME }</title>
      </Head>

      <Page>
        <UserHeader />

        <Page.Header>
          <h2>Vagas recorrentes</h2>
        </Page.Header>

        <Page.Content>
          <VacancyList
            title='Vagas recorrentes'
            vacancies={ recurrents }
          />
        </Page.Content>
      </Page>
    </>
  )
}

export default Recorrentes
