/**
  * Retorna informações do usuário, sendo
  * - firstname: Nome do usuário
  * - image: Foto do usuário
  * - company: Nome da empresa
  */
export const useUser = () => {
  return {
    firstname: 'Moisés',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnbPwGl2V5JYyHx0FKy1daEeMN77cDCKPjQ&usqp=CAU',
    company: 'Teste 01 Ltda',
    permissions: {
      vaga: {
        read: true,
        write: true,
      },
      vaga_modelo: {
        read: true,
        write: true,
      },
      vaga_recorrente: {
        read: true,
        write: true,
      },
    },
  }
}
