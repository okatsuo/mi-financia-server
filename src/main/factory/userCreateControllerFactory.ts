import { UserRepository } from '../../infra/repository/user'
import { RegisterAccountController } from '../../presentation/controller/user'

export const userCreateController = new RegisterAccountController(new UserRepository())
