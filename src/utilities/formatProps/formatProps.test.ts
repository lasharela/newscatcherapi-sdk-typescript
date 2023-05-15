import { formatProps } from './formatProps'

describe('formatProps', () => {
  it('returns undefined when input is undefined', () => {
    expect(formatProps(undefined)).toBeUndefined()
  })

  it('returns the single language code as a string', () => {
    expect(formatProps('fr')).toBe('fr')
  })

  it('returns comma-separated language codes as a string', () => {
    expect(formatProps(['fr', 'en', 'es'])).toBe('fr, en, es')
  })
})
