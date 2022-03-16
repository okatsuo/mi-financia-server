import { User, UserInput } from '../../../../src/domain/entities'
import { UserStatus } from '../../../../src/domain/enums/userStatus'
import { RegisterAccount } from '../../../../src/domain/use-cases/register-account'
import { DateHelper } from '../../../../src/helpers'
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

type Sut = {
  registerAccountStub: RegisterAccount
  sut: RegisterAccountController
}
const makeSut = (): Sut => {
  const registerAccountStub = makeRegisterAccountStub()
  const sut = new RegisterAccountController(registerAccountStub)

  return {
    registerAccountStub,
    sut
  }
}

describe('Register Account Controller', () => {
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
