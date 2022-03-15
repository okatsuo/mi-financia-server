import { GetUsersRepository } from '../../../infra/repository/contracts'
import { UserSchema } from '../../../main/graphql/schemas'
import { Controller } from '../contracts'

export class GetUserListController implements Controller {
  constructor (
    private readonly userRepository: GetUsersRepository
  ) { }

  exec = (): UserSchema[] => {
    return this.userRepository.getUsers()
  }
}
