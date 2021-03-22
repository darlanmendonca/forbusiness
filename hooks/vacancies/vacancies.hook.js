import useFetch from 'hooks/fetch/fetch.hook.js'
import { useState, useEffect } from 'react'

/**
  * Lista as vagas da empresa, sendo possível carregar por 3 tipos
  * - vagas publicadas e/ou agendadas
  * - vagas modelo
  * - vagas recorrentes
  */
const useVacancies = (params = {}) => {
  const [ loads, setLoads ] = useState({})

  const vacancies = useFetch('/api/vagas', {
    params,
    revalidateOnMount: loads.vacancies,
  })

  const templates = useFetch('/api/vagas-modelo', {
    revalidateOnMount: loads.templates,
  })

  const recurrents = useFetch('/api/vagas-recorrentes', {
    revalidateOnMount: loads.recurrents,
  })

  const vacancyTypes = {
    vacancies,
    templates,
    recurrents,
  }

  return new Proxy(vacancyTypes, {
    get: function(target, name) {
      if (!loads[name]) {
        setLoads(data => ({ ...data, [name]: true }))
      }
      return target[name]
    }
  })
}

export default useVacancies
