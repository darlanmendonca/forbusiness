import { Button as ButtonElement } from './button.style.js'
import { forwardRef } from 'react'
import Icon from 'components/icon/icon.component.js'

const Button = forwardRef(({ children, label, icon, solid, size, primary, ...props }, ref) => (
  <ButtonElement
    aria-label={ icon && label }
    ref={ ref }
    size={ size }
    icon={ icon }
    primary={ primary }
    { ...props }
  >
    { icon &&
      <Icon
        name={ icon }
        solid={ solid }
        size={ size }
        aria-hidden='true'
      />
    }

    { !icon && (label || children) }
  </ButtonElement>
))

export default Button
