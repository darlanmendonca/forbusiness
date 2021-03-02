import { Footer } from './copywriter-footer.style.js'
import Link from 'next/link'

/**
  * O componente `CopywriterFooter` exibe informativos
  * sobre os direitos autorais da marca, bem  como termos de uso.
  */
const CopywriterFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Footer>
      <img
        aria-label={ `Logotipo ${ process.env.NEXT_PUBLIC_APP_NAME }` }
        src='vagas.svg'
        width={ 86 }
        height={ 24 }
      />
      © { currentYear } VAGAS Tecnologia. Todos os direitos reservados.
      {' '}
      <Link href='/termos-de-uso'>
        <a>Termos de uso</a>
      </Link>
    </Footer>
  )
}

export default CopywriterFooter
