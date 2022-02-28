import { GetUserByEmailController } from '../../controller/user'
import { UserRepository } from '../../repository/user'

export const getUserByEmailController = new GetUserByEmailController(new UserRepository())
