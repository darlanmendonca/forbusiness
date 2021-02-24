import { Container, Content } from './page.style.js'
import CopywriterFooter from '../copywriter-footer/copywriter-footer.component.js'

const Page = ({ children }) => (
  <Container>
    { children }
    <CopywriterFooter />
  </Container>
)

Page.Content = Content

export default Page
