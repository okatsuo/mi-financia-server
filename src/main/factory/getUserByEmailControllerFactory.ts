import { UserRepository } from '../../infra/repository/user'
import { GetUserByEmailController } from '../../presentation/controllers/user'

export const getUserByEmailController = new GetUserByEmailController(new UserRepository())
