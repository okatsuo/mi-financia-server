import { User } from '../../../domain/entities'
import { GetUsersRepository } from '../../../infra/repository/contracts'
import { Controller } from '../../contracts'
import { Response } from '../../contracts/http'

export class GetUserListController implements Controller {
  constructor (
    private readonly userRepository: GetUsersRepository
  ) { }

  exec = async (): Promise<Response<User[]>> => {
    return this.userRepository.getUsers()
  }
}
