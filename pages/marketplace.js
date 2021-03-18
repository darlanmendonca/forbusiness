import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import Section from 'components/section/section.component.js'
import Card from 'components/card/card.component.js'
import useMarketplace from 'hooks/marketplace/marketplace.hook.js'

/**
  * Exibe produtos de parceiros que podem ser adquiridos e
  * aplicados em diferentes fases do processo seletivo.
  */
const Marketplace = () => {
  const { services } = useMarketplace()

  const toSections = (section, index) => (
    <Section.List title={ section[0].type } key={ index }>
      { section.map(toItems) }
    </Section.List>
  )

  const toItems = (service, index) => (
    <Section.Item key={ index } style={{ minWidth: 200, height: 200, scrollSnapAlign: 'start' }}>
      {/* <Card.Image src='https://pbs.twimg.com/profile_images/489148657459933184/x7SVp67J_400x400.png' /> */}
      {/* <Card.Title style={{ justifyContent: 'center' }}> */}
      {/*   <Card.Link href='#'>{ service.name }</Card.Link> */}
      {/* </Card.Title> */}
    </Section.Item>
  )

  return (
    <Page>
      <Head>
        <title>Marketplace - { process.env.NEXT_PUBLIC_APP_NAME }</title>
      </Head>

      <UserHeader />

      <Page.Header>
        <h2>Marketplace</h2>
        <p>Essa é sua central de serviços contratados, onde você pode ver quais estão disponíveis e aplicá-los em seu processo seletivo.</p>
      </Page.Header>

      <Page.Content>
        { services.map(toSections) }
      </Page.Content>
    </Page>
  )
}

export default Marketplace
