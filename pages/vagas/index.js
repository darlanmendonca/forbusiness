import Page from '../../components/page/page.component.js'
import Head from 'next/head'
import UserHeader from '../../components/user-header/user-header.component.js'
import Card from '../../components/card/card.component.js'
import Icon from '../../components/icon/icon.component.js'
// import Link from 'next/link'
import { useVacancies } from '../../hooks/vacancies/vacancies.hook.js'
import Tags from '../../components/tags/tags.component.js'
import Avatar from '../../components/avatar/avatar.component.js'

/**
  * Exibe a lista de vagas, com filtros de pesquisa,
  * e permite publicar e editar vagas (baseado nas permissões do usuário).
  */
const Vagas = () => {
  const vacancies = useVacancies()
  const day = 'numeric'
  const month = 'long'

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
  {/*       <Card title='Vagas em andamento' style={{ height: 3 * 100 }}> */}
  {/*         <Card.Options> */}
  {/*           <Icon */}
  {/*             name='menu-alt-left' */}
  {/*             color='var(--primary)' */}
  {/*             size='32px' */}
  {/*           /> */}
  {/*  */}
  {/*           <Link href='/vagas/publicacao'> */}
  {/*             <a> */}
  {/*               <Icon */}
  {/*                 name='plus' */}
  {/*                 color='var(--primary)' */}
  {/*                 size='32px' */}
  {/*               /> */}
  {/*             </a> */}
  {/*           </Link> */}
  {/*         </Card.Options> */}
  {/*       </Card> */}

        <Card title='Vagas em andamento' as='ul'>
          { vacancies
            .filter(vaga => vaga.status === 'Em andamento')
            .map(({ name, location, level, id, owner, status, date }) =>
              <Card.Item>
                <Card.Subtitle>
                  <Avatar
                    label={ owner.firstname }
                    image={ owner.image }
                    size='11px'
                    style={{ marginRight: 10 }}
                    tooltip
                  />

                  { name } { level } <small>v{ id }</small>
                </Card.Subtitle>

                <Tags label='Informações da vaga'>
                  <Tags.Item
                    label='Local de trabalho'
                    color='deepSkyBlue'
                    icon='map'
                  >
                    { location }
                  </Tags.Item>

                  <Tags.Item
                    label='Período de inscrições'
                    color={ status === 'Encerrada' ? 'gold' : 'greenyellow' }
                    icon='time-five'
                  >
                    { date.open.toLocaleDateString('pt-BR', { day }) }
                    { ' a ' }
                    { date.expiration.toLocaleDateString('pt-BR', { day, month }) }
                  </Tags.Item>

                  {/* <Tags.Item label='Status' color='lightsteelblue' icon='info-circle'> */}
                  {/*   { status } */}
                  {/* </Tags.Item> */}
                </Tags>
              </Card.Item>
            )
          }
        </Card>
      </Page.Content>
    </Page>
  )
}

export default Vagas
