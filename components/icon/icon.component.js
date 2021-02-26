import { string, number, oneOf } from 'prop-types'

/**
  * O componente `Icon` exibe ícones baseado na lib boxicons.
  * Para uma referência completa acesse [boxicons docs](https://boxicons.com/usage/).
  */
const Icon = props => (
  <box-icon { ...props } />
)

export default Icon

Icon.propTypes = {
  // Define o nome do ícone, lista completa em [boxicons.com](https://boxicons.com)
  name: string,

  // Define o tipo de preenchimento
  type: oneOf(['regular', 'solid']),

  // Define a cor do ícone
  color: string,

  // Define o tamanho do ícone
  size: oneOf([ string, number ]),
}


