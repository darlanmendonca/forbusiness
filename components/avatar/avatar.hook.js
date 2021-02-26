const useAvatar = props => {
  const firstAndLast = (_, index, array) => index === 0 || index === array.length - 1
  const toInitial = string => string.charAt(0)

  const getInitials = (string = '') => string
    .trim()
    .split(' ')
    .filter(firstAndLast)
    .map(toInitial)
    .join('')
    .toUpperCase()

  const initials = getInitials(props.label)

  return {
    initials,
  }
}

export default useAvatar
