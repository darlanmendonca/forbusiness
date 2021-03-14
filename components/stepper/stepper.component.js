import { List, Item } from './stepper.style.js'

const Stepper = ({ label, children }) => (
  <List aria-label={ label }>
    { children }
  </List>
)

export default Stepper

Stepper.Item = ({ label, current }) => (
  <Item aria-current={ current ? 'step' : null }>
    <button>{ label }</button>
  </Item>
)
