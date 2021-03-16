/**
  * Lista as vagas da empresa, sendo possível filtrar por
  * - status
  */
const useVacancies = (params = {}) => {
  const moises = {
    id: 1,
    firstname: 'Moisés',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnbPwGl2V5JYyHx0FKy1daEeMN77cDCKPjQ&usqp=CAU',
  }

  const baby = {
    id: 2,
    firstname: 'Baby',
    image: 'https://www.ibahia.com/fileadmin/user_upload/menino_meme_3.jpg',
  }

  const juliana = {
    id: 3,
    firstname: 'Juliana',
    image: 'https://i.pinimg.com/originals/5d/ac/fc/5dacfc043a93698713fb4a1ae7f9eb3f.jpg',
  }

  const vacancies = [
    {
      id: 'v2167406',
      name: 'Auxiliar administrativo',
      status: 'Agendada',
      date: {
        open: new Date('2021-03-01T00:00:00'),
        expiration: new Date('2021-03-30T00:00:00'),
      },
      location: 'Salvador',
      owner: baby,
    },
    {
      id: 'v2167408',
      name: 'Recepcionista',
      status: 'Encerrada',
      date: {
        open: new Date('2021-03-01T00:00:00'),
        expiration: new Date('2021-03-30T00:00:00'),
      },
      location: 'Salvador',
      owner: juliana,
    },
    {
      id: 'v2167409',
      name: 'Analista de Testes',
      level: 'Júnior',
      status: 'Em andamento',
      date: {
        open: new Date('2021-03-01T00:00:00'),
        expiration: new Date('2021-03-30T00:00:00'),
      },
      location: 'São Paulo',
      owner: moises,
    },
    {
      id: 'v2167410',
      name: 'Analista de Testes',
      level: 'Pleno',
      status: 'Em andamento',
      date: {
        open: new Date('2021-03-01T00:00:00'),
        expiration: new Date('2021-03-30T00:00:00'),
      },
      location: 'Salvador, Home Office',
      owner: moises,
    },
    {
      id: 'v2167411',
      name: 'Analista de Testes',
      level: 'Sênior',
      status: 'Em andamento',
      date: {
        open: new Date('2021-03-01T00:00:00'),
        expiration: new Date('2021-03-30T00:00:00'),
      },
      location: 'Home Office',
      owner: moises,
    },
    {
      id: 'v2167411',
      name: 'Engenheiro(a) Frontend',
      level: 'Sênior',
      status: 'Em andamento',
      date: {
        open: new Date('2021-03-01T00:00:00'),
        expiration: new Date('2021-03-30T00:00:00'),
      },
      location: 'Home Office',
      owner: moises,
    },
  ]

  const templates = [
    {
      id: 'm2167406',
      name: 'Auxiliar administrativo',
      location: 'Salvador',
      owner: baby,
    },
    {
      id: 'm2167311',
      name: 'Engenheiro(a) Frontend',
      level: 'Sênior',
      location: 'São Paulo',
      owner: moises,
    },
    {
      id: 'm2167312',
      name: 'Engenheiro(a) Frontend',
      level: 'Sênior',
      location: 'Home Office',
      owner: moises,
    },
  ]

  const recurrents = [
    {
      id: 'v2167411',
      name: 'Analista de Testes',
      level: 'Sênior',
      location: 'Home Office',
      owner: moises,
    },
    {
      id: 'v2167411',
      name: 'Analista de Testes',
      level: 'Sênior',
      location: 'Home Office',
      owner: moises,
    },
    {
      id: 'v2167411',
      name: 'Engenheiro(a) Frontend',
      level: 'Sênior',
      location: 'Home Office',
      owner: moises,
    },
  ]

  return {
    vacancies,
    templates,
    recurrents,
  }
}

export default useVacancies
