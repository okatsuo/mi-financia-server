import { UserRepository } from '../../infra/repository/user'
import { GetUserByEmailController } from '../../presentation/controller/user'

export const getUserByEmailController = new GetUserByEmailController(new UserRepository())
