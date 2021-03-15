/**
  * Lista as vagas da empresa, sendo possível filtrar por
  * - status
  */
const useVacancies = () => {
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

  return [
    {
      id: 2167406,
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
      id: 2167408,
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
      id: 2167409,
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
      id: 2167410,
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
      id: 2167411,
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
      id: 2167411,
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
}

export default useVacancies
