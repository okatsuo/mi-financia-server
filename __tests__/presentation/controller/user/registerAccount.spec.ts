import { User, UserInput } from '../../../../src/domain/entities'
import { UserStatus } from '../../../../src/domain/enums/userStatus'
import { RegisterAccount } from '../../../../src/domain/use-cases/register-account'
import { DateHelper } from '../../../../src/helpers'
import { RequestError } from '../../../../src/main/resources'
import { IEmailValidator } from '../../../../src/presentation/contracts'
import { RegisterAccountController } from '../../../../src/presentation/controllers/user'

const now = DateHelper.now()

const makeRegisterAccountStub = (): RegisterAccount => {
  class RegisterAccountStub implements RegisterAccount {
    async register (data: UserInput): Promise<User> {
      return {
        id: 'valid_id',
        ...data,
        status: data.status ?? UserStatus.verified,
        createdAt: now
      }
    }
  }

  return new RegisterAccountStub()
}

const makeEmailValidatorStub = (): IEmailValidator => {
  class EmailValidatorStub implements IEmailValidator {
    validate = (email: string): boolean => true
  }

  return new EmailValidatorStub()
}

type Sut = {
  registerAccountStub: RegisterAccount
  emailValidatorStub: IEmailValidator
  sut: RegisterAccountController
}
const makeSut = (): Sut => {
  const registerAccountStub = makeRegisterAccountStub()
  const emailValidatorStub = makeEmailValidatorStub()
  const sut = new RegisterAccountController(registerAccountStub, emailValidatorStub)

  return {
    registerAccountStub,
    emailValidatorStub,
    sut
  }
}

describe('Register Account Controller', () => {
  it('should call emailValidator with correct value', async () => {
    const { sut, emailValidatorStub } = makeSut()
    const fakeUser: UserInput = { email: 'valid_mail', password: 'valid_password', username: 'valid_username' }
    const emailValidatorSpy = jest.spyOn(emailValidatorStub, 'validate').mockImplementationOnce(() => false)
    await sut.exec(fakeUser)
    expect(emailValidatorSpy).toBeCalledWith(fakeUser.email)
  })

  it('should return invalid email error if invalid email is provided', async () => {
    const { sut, emailValidatorStub } = makeSut()
    const fakeUser: UserInput = { email: 'valid_mail', password: 'valid_password', username: 'valid_username' }
    jest.spyOn(emailValidatorStub, 'validate').mockImplementationOnce(() => false)
    const error = await sut.exec(fakeUser) as RequestError
    expect(error.code).toBe(1)
  })

  it('should call registerAccount with correct values', async () => {
    const { sut, registerAccountStub } = makeSut()
    const fakeUser: UserInput = { email: 'valid_mail@mail.com', password: 'valid_password', username: 'valid_username' }
    const registerAccountSpy = jest.spyOn(registerAccountStub, 'register')
    await sut.exec(fakeUser)
    expect(registerAccountSpy).toBeCalledWith(fakeUser)
  })

  it('should return with correct values from registerAccount', async () => {
    const { sut } = makeSut()
    const fakeUser: UserInput = { email: 'valid_mail@mail.com', password: 'valid_password', username: 'valid_username' }
    const user = await sut.exec(fakeUser)

    expect(user).toEqual({
      id: 'valid_id',
      ...fakeUser,
      status: fakeUser.status ?? UserStatus.verified,
      createdAt: now
    })
  })
})
