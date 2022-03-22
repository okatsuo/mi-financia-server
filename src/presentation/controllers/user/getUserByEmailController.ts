import { User } from '../../../domain/entities'
import { GetUserByEmailRepository } from '../../../infra/repository/contracts'
import { Controller } from '../../contracts'
import { Response } from '../../contracts/http'

export class GetUserByEmailController implements Controller {
  constructor (
    private readonly userRepository: GetUserByEmailRepository
  ) { }

  exec = async (email: string): Promise<Response<User>> => {
    return this.userRepository.getUserByEmail(email)
  }
}
