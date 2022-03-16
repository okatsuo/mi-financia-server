import { User, UserInput } from '../../../domain/entities'
import { RegisterAccount } from '../../../domain/use-cases/register-account'
import { Controller } from '../contracts'

export class RegisterAccountController implements Controller {
  constructor (
    private readonly registerAccount: RegisterAccount
  ) { }

  async exec (data: UserInput): Promise<User> {
    return await this.registerAccount.register(data)
  }
}
