import { string, number, bool, oneOfType } from 'prop-types'
import * as Regular from '@styled-icons/boxicons-regular'
import * as Solid from '@styled-icons/boxicons-solid'

/**
  * O componente `Icon` exibe ícones baseado na lib boxicons.
  * Para uma referência completa acesse [boxicons docs](https://boxicons.com/usage/).
  */
const Icon = ({ name, solid, color='currentColor', size = '1em', ...props}) => {
  const toCamelCase = string => '-'.concat(string)
    .replace(/-([a-z0-9])/g, (_, letter) => letter.toUpperCase())

  const icon = toCamelCase(name)

  const IconComponent = solid && icon in Solid
    ? Solid[icon]
    : icon in Regular
      ? Regular[icon]
      : Regular.Square

  return (
    <>
      <IconComponent
        color={ color }
        size={ size }
        { ...props }
      />
    </>
  )
}

export default Icon

Icon.propTypes = {
  // Define o nome do ícone, lista completa em [boxicons.com](https://boxicons.com)
  name: string,

  // Define o estilo do ícone como sólido
  solid: bool,

  // Define a cor do ícone
  color: string,

  // Define o tamanho do ícone
  size: oneOfType([ string, number ]),
}


