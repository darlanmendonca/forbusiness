import useAvatar from './avatar.hook'
import { Image } from './avatar.style'

/**
  * O componente `Avatar` representa um usuário da aplicação.
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
