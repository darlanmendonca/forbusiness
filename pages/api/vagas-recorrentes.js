const moises = {
  id: '1',
  firstname: 'Moisés',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnbPwGl2V5JYyHx0FKy1daEeMN77cDCKPjQ&usqp=CAU',
}

const baby = {
  id: '2',
  firstname: 'Baby',
  image: 'https://www.ibahia.com/fileadmin/user_upload/menino_meme_3.jpg',
}

const juliana = {
  id: '3',
  firstname: 'Juliana',
  image: 'https://i.pinimg.com/originals/5d/ac/fc/5dacfc043a93698713fb4a1ae7f9eb3f.jpg',
}

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

export default function vagasRecorrentes(req,  res) {
  res.json(recurrents)
}
