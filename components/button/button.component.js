import { FlatButton } from './button.style.js'
import { forwardRef } from 'react'
import Icon from 'components/icon/icon.component.js'

const Button = forwardRef(({ children, label, icon, solid, size, ...props }, ref) => (
  <FlatButton
    aria-label={ label }
    ref={ ref }
    size={ size }
    { ...props }
  >
    { icon &&
      <Icon
        name={ icon }
        solid={ solid }
        color='var(--primary)'
        size={ size }
        aria-hidden='true'
      />
    }

    { !icon && (label || children) }
  </FlatButton>
))

export default Button
