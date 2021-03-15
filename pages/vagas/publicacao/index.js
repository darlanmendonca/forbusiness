import Page from 'components/page/page.component.js'
import Head from 'next/head'
import UserHeader from 'components/user-header/user-header.component.js'
import Card from 'components/card/card.component.js'
import Icon from 'components/icon/icon.component.js'
import { useUser } from 'hooks/user/user.hook.js'
import Link from 'next/link'

/**
  * Exibe a publicação de vaga, permitindo publicar uma nova vaga do zero
  * ou a partir de uma vaga recorrente/modelo.
  */
const Publicacao = () => {
  const user = useUser()

  return (
    <Page>
      <Head>
        <title>Publicação de Vaga - { process.env.NEXT_PUBLIC_APP_NAME }</title>
      </Head>

      <UserHeader />

      <Page.Header>
        <h2>Publicação de Vaga</h2>
      </Page.Header>

      <Page.Content>
        <Card.Carousel>
          { user.permissions?.vaga.write &&
            <Card>
              <Icon name='file-blank'
                solid
                size='68px'
                style={{ display: 'block', margin: '0 auto 1rem' }}
              />

              <Card.Subtitle  style={{ justifyContent: 'center' }}>
                <Link href='/vagas/publicacao/nova-vaga'><a>Nova vaga</a></Link>
              </Card.Subtitle>

              <Card.Text>
                Crie uma vaga do zero, preenchendo cada uma das informações.
              </Card.Text>
            </Card>
          }

          { user.permissions?.vaga_modelo.write &&
            <Card>
              <Icon name='file-plus'
                solid
                size='68px'
                style={{ display: 'block', margin: '0 auto 1rem' }}
              />

              <Card.Subtitle style={{ justifyContent: 'center' }}>
                <Link href='/vagas/publicacao/modelos'><a>Usar um modelo</a></Link>
              </Card.Subtitle>

              <Card.Text>
                Crie uma vaga a partir de um modelo de vaga definido por um de seus colaboradores.
              </Card.Text>
            </Card>
          }

          { user.permissions?.vaga_recorrente.write &&
            <Card>
              <Icon name='file-find'
                solid
                size='68px'
                style={{ display: 'block', margin: '0 auto 1rem' }}
              />

              <Card.Subtitle style={{ justifyContent: 'center' }}>
                <Link href='/vagas/publicacao/recorrentes'><a>Usar uma vaga recorrente</a></Link>
              </Card.Subtitle>

              <Card.Text>
                Crie uma vaga a partir de uma vaga anteriormente publicada por você ou por um de seus colaboradores.
              </Card.Text>
            </Card>
          }
        </Card.Carousel>

{/*         <Card.List title='Qual tipo de vaga você gostaria de publicar?'> */}
{/*           { user.permissions?.vaga.write && */}
{/*             <Card.Item> */}
{/*               <Card.Subtitle> */}
{/*                 <Icon name='file-blank' solid size='48px' style={{ transform: 'translateX(-10px)' }} /> */}
{/*                 <Link href='/vagas/publicacao/nova-vaga'><a>Nova vaga</a></Link> */}
{/*               </Card.Subtitle> */}
{/*  */}
{/*               <Card.Text> */}
{/*                 Crie uma vaga do zero, preenchendo cada uma das informações. */}
{/*               </Card.Text> */}
{/*             </Card.Item> */}
{/*           } */}
{/*  */}
{/*           { user.permissions?.vaga_modelo.write && */}
{/*             <Card.Item> */}
{/*               <Card.Subtitle> */}
{/*                 <Icon name='file-plus' solid size='48px' style={{ transform: 'translateX(-10px)' }} /> */}
{/*                 <Link href='/vagas/publicacao/modelos'><a>A partir de um modelo</a></Link> */}
{/*               </Card.Subtitle> */}
{/*  */}
{/*               <Card.Text> */}
{/*                 Crie uma vaga a partir de um modelo de vaga definido por um de seus colaboradores. */}
{/*               </Card.Text> */}
{/*             </Card.Item> */}
{/*           } */}
{/*  */}
{/*           { user.permissions?.vaga_recorrente.write && */}
{/*             <Card.Item> */}
{/*               <Card.Subtitle> */}
{/*                 <Icon name='file-find' solid size='48px' style={{ transform: 'translateX(-10px)' }} /> */}
{/*                 <Link href='/vagas/publicacao/recorrentes'><a>A partir de uma vaga recorrente</a></Link> */}
{/*               </Card.Subtitle> */}
{/*  */}
{/*               <Card.Text> */}
{/*                 Crie uma vaga a partir de uma vaga anteriormente publicada por você ou por um de seus colaboradores. */}
{/*               </Card.Text> */}
{/*             </Card.Item> */}
{/*           } */}
{/*         </Card.List> */}
      </Page.Content>
    </Page>
  )
}

export default Publicacao
