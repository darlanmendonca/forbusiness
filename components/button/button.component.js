import { FlatButton } from './button.style.js'

const Button = ({ children, ...props }) => (
  <FlatButton
    children={ children }
    { ...props }
  />
)

export default Button
