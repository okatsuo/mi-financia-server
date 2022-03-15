import { DateHelper } from '../../src/helpers'

describe('Date helper', () => {
  it('should return the current time in seconds', () => {
    expect(typeof DateHelper.now()).toBe('number')
  })

  it('should return a valid date', () => {
    const now = DateHelper.now()
    const isValid = !isNaN(new Date(now).getTime())
    expect(isValid).toBe(true)
  })

  it('should correctly validate the date', () => {
    expect(DateHelper.isValid(Date.now().valueOf())).toBe(true)
    expect(DateHelper.isValid(Date.now())).toBe(true)
    expect(DateHelper.isValid('invalid_date')).toBe(false)
  })
})
