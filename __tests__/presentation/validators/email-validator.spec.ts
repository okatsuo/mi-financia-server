import { EmailValidator } from '../../../src/presentation/validators/validate-email'

describe('Email validator', () => {
  it('should return true if email is valid', () => {
    const sut = new EmailValidator()
    expect(sut.validate('valid_email@mail.com')).toBe(true)
    expect(sut.validate('valid-email@mail.group.com')).toBe(true)
    expect(sut.validate('valid.email@uo.go')).toBe(true)
    expect(sut.validate('valid#email@go.op')).toBe(true)
  })

  it('should return false if email is invalid', () => {
    const sut = new EmailValidator()
    expect(sut.validate('invalid_email@com')).toBe(false)
    expect(sut.validate('invalid-emailmail.group.com')).toBe(false)
    expect(sut.validate('invalid.email-uo.go')).toBe(false)
    expect(sut.validate('invalid#email/go.op')).toBe(false)
  })
})
