import useAvatar from './avatar.hook'
import { Image } from './avatar.style'
import { string, oneOf } from 'prop-types'

/**
  * O componente `Avatar` representa um usuário.
  * O componente pode renderizar um `button`, ou `link`, ou mesmo um `title`.
  */
const Avatar = ({ as = 'div', size = '1rem', ...props }) => {
  const { initials } = useAvatar(props)

  return (
    <Image
      as={ as }
      aria-label={ props.label }
      children={ initials }
      image={ props.image }
      size={ size }
      { ...props }
    />
  )
}

export default Avatar

Avatar.propTypes = {
  // Define uma descrição para o avatar, sendo este o nome do usuário
  label: string.isRequired,

  // Define o tipo de elemento a ser renderizado
  as: oneOf('div a button h1 h2 h3 h4 h5 h6'.split(' ')),

  // Define a foto a exibir, sendo esta do usuário
  image: string,

  // Define o tamanho de exibição do avatar
  size: string,
}
