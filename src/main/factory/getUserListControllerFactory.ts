import { GetUserListController } from '../../controller/user'
import { UserRepository } from '../../repository/user'

export const getUserListController = new GetUserListController(new UserRepository())
