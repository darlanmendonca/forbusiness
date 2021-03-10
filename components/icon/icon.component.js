import { string, number, oneOf, oneOfType } from 'prop-types'
import * as Regular from '@styled-icons/boxicons-regular'
import * as Solid from '@styled-icons/boxicons-solid'

/**
  * O componente `Icon` exibe ícones baseado na lib boxicons.
  * Para uma referência completa acesse [boxicons docs](https://boxicons.com/usage/).
  */
const Icon = props => {
  const toCamelCase = string => '-'.concat(string)
    .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())

  const IconComponent = props.type === 'solid' && toCamelCase(props.name) in Solid
    ? Solid[toCamelCase(props.name)]
    : Regular[toCamelCase(props.name)]

  return (
    <>
      <IconComponent { ...props } />
    </>
  )
}

export default Icon

Icon.propTypes = {
  // Define o nome do ícone, lista completa em [boxicons.com](https://boxicons.com)
  name: string,

  // Define o tipo de preenchimento
  type: oneOf(['regular', 'solid']),

  // Define a cor do ícone
  color: string,

  // Define o tamanho do ícone
  size: oneOfType([ string, number ]),
}


