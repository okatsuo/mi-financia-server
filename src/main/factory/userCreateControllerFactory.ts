import { UserRepository } from '../../infra/repository/user'
import { RegisterAccountController } from '../../presentation/controllers/user'

export const userCreateController = new RegisterAccountController(new UserRepository())
