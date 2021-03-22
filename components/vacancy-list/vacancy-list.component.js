import Section from 'components/section/section.component.js'
import Card from 'components/card/card.component.js'
import Tags from 'components/tags/tags.component.js'
import Button from 'components/button/button.component.js'
import Icon from 'components/icon/icon.component.js'
import Link from 'next/link'
import Avatar from 'components/avatar/avatar.component.js'
import useUser  from 'hooks/user/user.hook.js'
import Modal, { useModal } from 'components/modal/modal.component.js'

const VacancyList = ({ title = 'Vagas', vacancies = [], type='vacancies' }) => {
  const user = useUser()
  const search = useModal()
  const day = 'numeric'
  const month = 'long'

  const toItems = ({ name, location, level, id, owner, status, date }, index) => {
    let link
    switch(type) {
      case 'templates':
        link = `/vagas/publicacao?modelo=${ id }`
        break
      case 'recurrents':
        link = `/vagas/publicacao?recorrente=${ id }`
        break
      default:
        link = `/vagas/publicacao/${ id }`
    }
    return (
      <Card.Item key={ index }>
        <Card.Title>
          <Avatar
            label={ owner.firstname }
            image={ owner.image }
            size='11px'
            style={{ marginRight: 10 }}
            tooltip
          />

          <Link href={ link }><a>{ name } { level }</a></Link>
        </Card.Title>

        <Tags label='Informações da vaga'>
          { id?.startsWith('v') &&
            <Tags.Item
              label='Código da vaga'
              color='var(--accent)'
              icon='note'
            >
              { id }
            </Tags.Item>
          }

          { id?.startsWith('m') &&
            <Tags.Item
              label='Código do modelo'
              color='var(--light-blue)'
              icon='note'
            >
              { id }
            </Tags.Item>
          }

          { location &&
            <Tags.Item
              label='Local de trabalho'
              color='var(--blue)'
              icon='map'
            >
              { location }
            </Tags.Item>
          }

          { date?.open && date?.expiration &&
            <Tags.Item
              label='Período de inscrições'
              icon='time-five'
              color={ status === 'Encerrada' ? 'var(--yellow)' : 'var(--green)' }
            >
              { new Date(date.open).toLocaleDateString('pt-BR', { day }) }
              { ' a ' }
              { new Date(date.expiration).toLocaleDateString('pt-BR', { day, month }) }
            </Tags.Item>
          }

          { status &&
            <Tags.Item
              label='Status'
              color='var(--light-blue)'
              icon='info-circle'
            >
              { status }
            </Tags.Item>
          }
        </Tags>
      </Card.Item>
    )
  }

  return (
    <>
      <Section title={ title }>
        { type === 'vacancies' &&
          <Section.Options>
            <Button label='Buscar vagas' icon='search' onClick={ search.show } />
            { user.permissions.vaga.write &&
              <Link href='/vagas/publicacao' passHref>
                <Button label='Publicar vaga' icon='plus' as='a' />
              </Link>
            }
          </Section.Options>
        }

        { type === 'templates' &&
          <Section.Options>
            <Button label='Buscar modelos' icon='search' onClick={ search.show } />
            { user.permissions.vaga_modelo.write &&
              <Link href='/vagas/modelo' passHref>
                <Button label='Criar modelo' icon='plus' as='a' />
              </Link>
            }
          </Section.Options>
        }

        { type === 'recurrents' &&
          <Section.Options>
            <Button label='Buscar vagas recorrentes' icon='search' onClick={ search.show } />
          </Section.Options>
        }

        { vacancies.map(toItems) }
      </Section>

      { type === 'vacancies' &&
        <Modal title='Buscar vagas' controller={ search } />
      }

      { type === 'templates' &&
        <Modal title='Buscar modelos' controller={ search } />
      }

      { type === 'recurrents' &&
        <Modal title='Buscar vagas recorrentes' controller={ search } />
      }
    </>
  )
}

export default VacancyList
