import useSWR from 'swr'

const fetcher = ( ...args ) => fetch(...args).then(res => res.json())

const useFetch = (url, options = {}) => {
  const method = options.headers?.method || 'GET'
  const queryString = Object.keys(options?.params || {}).length && method === 'GET'
    ? '?'.concat(new URLSearchParams(options.params))
    : ''

  return useSWR(
    url + queryString,
    fetcher,
    { revalidateOnMount: Boolean(options.revalidateOnMount) },
  )
}

export default useFetch
