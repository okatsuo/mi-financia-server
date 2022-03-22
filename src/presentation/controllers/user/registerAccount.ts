import { User, UserInput } from '../../../domain/entities'
import { RegisterAccount } from '../../../domain/use-cases'
import { errors } from '../../../main/resources'
import { Controller, IEmailValidator } from '../../contracts'
import { Response } from '../../contracts/http'

export class RegisterAccountController implements Controller {
  constructor (
    private readonly registerAccount: RegisterAccount,
    private readonly emailValidator: IEmailValidator
  ) { }

  async exec (data: UserInput): Promise<Response<User>> {
    const isValidEmail = this.emailValidator.validate(data.email)
    if (!isValidEmail) return errors.invalidEmail

    return await this.registerAccount.register(data)
  }
}
