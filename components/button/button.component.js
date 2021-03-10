import { FlatButton } from './button.style.js'
import React from 'react'

const Button = React.forwardRef(({ children, ...props }, ref) => (
  <FlatButton
    children={ children }
    { ...props }
  />
))

export default Button
