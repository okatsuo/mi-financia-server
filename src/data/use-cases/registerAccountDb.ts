import { User, UserInput } from '../../domain/entities'
import { RegisterAccount } from '../../domain/use-cases/register-account'
import { ICryptography, IRegisterAccountRepository } from '../contracts'

export class RegisterAccountDb implements RegisterAccount {
  constructor (
    private readonly cryptography: ICryptography,
    private readonly userRepository: IRegisterAccountRepository
  ) { }

  async register (data: UserInput): Promise<User> {
    const hashedPassword = await this.cryptography.encrypt(data.password)
    const newUser = new User({ ...data, password: hashedPassword })
    await this.userRepository.register(newUser)
    return newUser
  }
}
