import { UserRepository } from '../../infra/repository/user'
import { CreateUserController } from '../../presentation/controller/user'

export const userCreateController = new CreateUserController(new UserRepository())
