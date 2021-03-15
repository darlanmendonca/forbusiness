import { Container, Title, CloseButton } from './modal.style.js'
import hook from './modal.hook.js'

const slugify = (string = '') => string
  .trim()
  .split(' ')
  .join('-')
  .toLowerCase()

const Aside = ({ children, title, controller }) => (
  <Container
    hidden={ !controller.isVisible }
    aria-modal='true'
    aria-describedby={ slugify(title).concat('-title') }
  >
    <Title id={ slugify(title).concat('-title') }>{ title }</Title>

    <CloseButton
      label='Fechar'
      icon='x-circle'
      size='34px'
      solid
      onClick={ controller.hide }
      ref={ controller.closeButtonRef }
    />

    { children }
  </Container>
)

export default Aside

export const useModal = hook
