import { UserRepository } from '../../infra/repository/user'
import { GetUserListController } from '../../presentation/controller/user'

export const getUserListController = new GetUserListController(new UserRepository())
