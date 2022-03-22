import { User, UserInput } from '../../../domain/entities'
import { IGetUserByEmail, RegisterAccount } from '../../../domain/use-cases'
import { Controller, IEmailValidator } from '../../contracts'
import { Response } from '../../contracts/http'
import { errors } from '../../errors'

export class RegisterAccountController implements Controller {
  constructor (
    private readonly registerAccount: RegisterAccount,
    private readonly userAccount: IGetUserByEmail,
    private readonly emailValidator: IEmailValidator
  ) { }

  async exec (data: UserInput): Promise<Response<User>> {
    const isValidEmail = this.emailValidator.validate(data.email)
    if (!isValidEmail) return errors.invalidEmail

    const emailExists = await this.userAccount.getUserByEmail(data.email)
    if (emailExists) return errors.emailExists

    return await this.registerAccount.register(data)
  }
}
