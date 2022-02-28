import { GetUsersRepository } from '../../repository/contracts'
import { UserSchema } from '../../schemas'
import { Controller } from '../contracts'

export class GetUserListController implements Controller {
  constructor (
    private readonly userRepository: GetUsersRepository
  ) { }

  exec = (): UserSchema[] => {
    return this.userRepository.getUsers()
  }
}
