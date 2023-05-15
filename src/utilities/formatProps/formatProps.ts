export const formatProps = <T>(input?: T | T[]): string | undefined => {
  if (typeof input === 'string') {
    return input
  }
  if (Array.isArray(input)) {
    return input.join(',')
  }

  return undefined
}
