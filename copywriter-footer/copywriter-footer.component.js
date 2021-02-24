import { Footer } from './copywriter-footer.style.js'

const CopywriterFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Footer>
      <img
        aria-label='Logotipo VAGAS'
        src='vagas.svg'
        width={ 86 }
        height={ 24 }
      />
      © { currentYear } VAGAS Tecnologia. Todos os direitos reservados.
    </Footer>
  )
}

export default CopywriterFooter
