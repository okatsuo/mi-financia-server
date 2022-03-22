import { RegisterAccountDb } from '../../data/use-cases'
import { Cryptography } from '../../infra/cryptography'
import { UserRepository } from '../../infra/repository/user'
import { RegisterAccountController } from '../../presentation/controllers/user'
import { EmailValidator } from '../../presentation/validators/validate-email'

export const makeRegisterAccountController = (): RegisterAccountController => {
  const cryptography = new Cryptography()
  const userRepository = new UserRepository()
  const emailValidator = new EmailValidator()
  const registerAccountDb = new RegisterAccountDb(cryptography, userRepository)
  return new RegisterAccountController(registerAccountDb, emailValidator)
}
