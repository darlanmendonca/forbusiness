import { List, Item } from './tags.style.js'
import Icon from 'components/icon/icon.component.js'

const Tags = ({ label, children, icon, color }) => (
  <List aria-label={ label }>
    { children }
  </List>
)

export default Tags

Tags.Item = ({ label, color, icon, children }) => (
  <Item
    aria-label={ label }
    color={ color }
  >
    <Icon
      name={ icon }
      color={ color }
      size='18px'
      solid
    />
    { children }
  </Item>
)
