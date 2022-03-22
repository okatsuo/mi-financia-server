import { UserRepository } from '../../infra/repository/user'
import { GetUserListController } from '../../presentation/controllers/user'

export const getUserListController = new GetUserListController(new UserRepository())
