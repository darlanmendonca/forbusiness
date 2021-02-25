import { Container, Content, Header, Title, Text } from './page.style.js'
import SegmentHeader from '../segment-header/segment-header.component'
import CopywriterFooter from '../copywriter-footer/copywriter-footer.component.js'

const Page = ({ children }) => (
  <Container>
    <SegmentHeader current='forbusiness' />
    { children }
    <CopywriterFooter />
  </Container>
)

Page.Header = Header
Page.Content = Content

export default Page
