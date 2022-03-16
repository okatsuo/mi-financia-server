import { User } from '../../../domain/entities'
import { GetUsersRepository } from '../../../infra/repository/contracts'
import { Controller } from '../../contracts'

export class GetUserListController implements Controller {
  constructor (
    private readonly userRepository: GetUsersRepository
  ) { }

  exec = (): User[] => {
    return this.userRepository.getUsers()
  }
}
