const useMarketplace = () => {
  const admissaoDigital = [
    {
      name: 'Lorem Ipsum',
      type: 'Admissão Digital',
    },
    {
      name: 'Dolor Sit Amet',
      type: 'Admissão Digital',
    },
    {
      name: 'Ligula Cras Risus',
      type: 'Admissão Digital',
    },
    {
      name: 'Purus Magna Ullamcorper',
      type: 'Admissão Digital',
    },
    {
      name: 'Lorem Ipsum',
      type: 'Admissão Digital',
    },
  ]

  const avaliacaoPerfil = [
    {
      name: 'Tristique Vestibulum Mattis Tortor',
      type: 'Avaliação de Perfil',
    },
    {
      name: 'Vulputate Risus',
      type: 'Avaliação de Perfil',
    },
    {
      name: 'Pharetra Sollicitudin Consectetur',
      type: 'Avaliação de Perfil',
    },
    {
      name: 'Tortor Tellus Cras',
      type: 'Avaliação de Perfil',
    },
    {
      name: 'Egestas Lorem',
      type: 'Avaliação de Perfil',
    },
  ]

  const competenciasTecnicas = [
    {
      name: 'Tristique Vestibulum Mattis Tortor',
      type: 'Competências Técnicas',
    },
    {
      name: 'Vulputate Risus',
      type: 'Competências Técnicas',
    },
    {
      name: 'Pharetra Sollicitudin Consectetur',
      type: 'Competências Técnicas',
    },
    {
      name: 'Tortor Tellus Cras',
      type: 'Competências Técnicas',
    },
    {
      name: 'Egestas Lorem',
      type: 'Competências Técnicas',
    },
  ]

  const formalizacaoEstagio = [
    {
      name: 'Consectetur Aenean Dolor',
      type: 'Formalização de Estágio',
    },
    {
      name: 'Tortor Dolor Amet',
      type: 'Formalização de Estágio',
    },
    {
      name: 'Risus Fusce Consectetur',
      type: 'Formalização de Estágio',
    },
    {
      name: 'Pellentesque Elit',
      type: 'Formalização de Estágio',
    },
    {
      name: 'Ultricies Pellentesque Nibh',
      type: 'Formalização de Estágio',
    },
  ]

  const gamificacao = [
    {
      name: 'Magna Fringilla',
      type: 'Gamificação',
    },
    {
      name: 'Amet Dapibus',
      type: 'Gamificação',
    },
    {
      name: 'Tortor Ornare',
      type: 'Gamificação',
    },
    {
      name: 'Lorem Malesuada Consectetur',
      type: 'Gamificação',
    },
    {
      name: 'Lorem Ipsum',
      type: 'Gamificação',
    },
  ]

  return {
    services: [
      admissaoDigital,
      avaliacaoPerfil,
      competenciasTecnicas,
      formalizacaoEstagio,
      gamificacao,
    ],
  }
}

export default useMarketplace
