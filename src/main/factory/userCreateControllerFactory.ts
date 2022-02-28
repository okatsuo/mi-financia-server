import { CreateUserController } from '../../controller/user'
import { UserRepository } from '../../repository/user'

export const userCreateController = new CreateUserController(new UserRepository())
