import Card from '../../components/card/card.component.js'
import Tags from '../../components/tags/tags.component.js'
import Button from '../../components/button/button.component.js'
import Icon from '../../components/icon/icon.component.js'
import Link from 'next/link'
import Avatar from '../../components/avatar/avatar.component.js'
import { useUser } from '../../hooks/user/user.hook.js'

const VacancyList = ({ title = 'Vagas', vacancies }) => {
  const user = useUser()
  const day = 'numeric'
  const month = 'long'

  const toItems = ({ name, location, level, id, owner, status, date }, index) => (
    <Card.Item key={ index }>
      <Card.Subtitle>
        <Avatar
          label={ owner.firstname }
          image={ owner.image }
          size='11px'
          style={{ marginRight: 10 }}
          tooltip
        />

        { name } { level }
      </Card.Subtitle>

      <Tags label='Informações da vaga'>
        <Tags.Item
          label='Código da vaga'
          color='var(--accent)'
          icon='note'
        >
          v{ id }
        </Tags.Item>

        <Tags.Item
          label='Local de trabalho'
          color='var(--blue)'
          icon='map'
        >
          { location }
        </Tags.Item>

        <Tags.Item
          label='Período de inscrições'
          icon='time-five'
          color={ status === 'Encerrada' ? 'var(--yellow)' : 'var(--green)' }
        >
          { date.open.toLocaleDateString('pt-BR', { day }) }
          { ' a ' }
          { date.expiration.toLocaleDateString('pt-BR', { day, month }) }
        </Tags.Item>

        <Tags.Item
          label='Status'
          color='var(--light-blue)'
          icon='info-circle'
        >
          { status }
        </Tags.Item>
      </Tags>
    </Card.Item>
  )

  return (
    <Card.List title={ title }>
      <Card.Options>
        <Button aria-label='Filtros'>
          <Icon
            name='slider'
            color='var(--primary)'
          />
        </Button>

        <Link href='/vagas/publicacao' passHref>
          <Button as='a' aria-label='Publicar vaga'>
            <Icon
              name='plus'
              color='var(--primary)'
            />
          </Button>
        </Link>
      </Card.Options>

      { vacancies.map(toItems) }
    </Card.List>
  )
}

export default VacancyList
