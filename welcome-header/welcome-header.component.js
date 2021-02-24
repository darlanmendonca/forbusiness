import Avatar from '../avatar/avatar.component.js'
import { Header, Title, Text } from  '../welcome-header/welcome-header.style.js'
import Link from 'next/link'

const WelcomeHeader = () => (
  <Header>
    <Avatar
      label='Moisés'
      as='button'
      image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnbPwGl2V5JYyHx0FKy1daEeMN77cDCKPjQ&usqp=CAU'
    />
    <Title>Olá Moisés</Title>
    <Text>
      Você não tem vagas abertas na <strong>Teste 01 Ltda</strong>.
      <Link href='/vagas' passHref>
        <a>Acompanhar vagas</a>
      </Link>
    </Text>
  </Header>
)

export default WelcomeHeader
