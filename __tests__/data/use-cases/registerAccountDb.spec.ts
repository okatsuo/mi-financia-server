import { ICryptography, IRegisterAccountRepository } from '../../../src/data/contracts'
import { RegisterAccountDb } from '../../../src/data/use-cases'
import { User, UserInput } from '../../../src/domain/entities'
import { UserStatus } from '../../../src/domain/enums/userStatus'
import { DateHelper } from '../../../src/helpers'

const mockBaseEntity = { id: 'valid_id', createdAt: DateHelper.now(), status: UserStatus.notVerified }
jest.mock('../../../src/domain/entities', () => ({
  User: jest.fn((data: UserInput): User => ({ ...data, ...mockBaseEntity }))
}))

const makeCryptographyStub = (): ICryptography => {
  class CryptographyStub implements ICryptography {
    encrypt = async (value: string): Promise<string> => 'hashed_password'
  }
  return new CryptographyStub()
}

const makeUserRepositoryStub = (): IRegisterAccountRepository => {
  class UserRepositoryStub implements IRegisterAccountRepository {
    register = async (data: UserInput): Promise<User> => {
      return new User(data)
    }
  }

  return new UserRepositoryStub()
}

type SutType = {
  userRepositoryStub: IRegisterAccountRepository
  sut: RegisterAccountDb
  cryptographyStub: ICryptography
}
const makeSut = (): SutType => {
  const userRepositoryStub = makeUserRepositoryStub()
  const cryptographyStub = makeCryptographyStub()
  const sut = new RegisterAccountDb(cryptographyStub, userRepositoryStub)
  return {
    userRepositoryStub,
    cryptographyStub,
    sut
  }
}

describe('RegisterAccountDb', () => {
  it('should call cryptography with correct values', async () => {
    const { sut, cryptographyStub } = makeSut()
    const cryptographySpy = jest.spyOn(cryptographyStub, 'encrypt')
    await sut.register({ email: 'valid_email@mail.com', password: 'valid_password', username: 'valid_username' })
    expect(cryptographySpy).toBeCalledWith('valid_password')
  })

  it('should call userRepository with correct values', async () => {
    const { sut, userRepositoryStub } = makeSut()
    const fakeUser = { email: 'valid_email@mail.com', password: 'valid_password', username: 'valid_username' }
    const cryptographySpy = jest.spyOn(userRepositoryStub, 'register')
    await sut.register(fakeUser)
    expect(cryptographySpy).toBeCalledWith({ ...fakeUser, ...mockBaseEntity, password: 'hashed_password' })
  })

  it('should return with correct values', async () => {
    const { sut } = makeSut()
    const user = await sut.register({ email: 'valid_email@mail.com', password: 'valid_password', username: 'valid_username' })
    expect(user).toMatchObject({ email: 'valid_email@mail.com', username: 'valid_username', status: UserStatus.notVerified })
    expect(user.createdAt).not.toBeUndefined()
    expect(user.password).toBe('hashed_password')
  })
})
