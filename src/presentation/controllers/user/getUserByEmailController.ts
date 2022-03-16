import { User } from '../../../domain/entities'
import { GetUserByEmailRepository } from '../../../infra/repository/contracts'
import { Controller } from '../../contracts'

export class GetUserByEmailController implements Controller {
  constructor (
    private readonly userRepository: GetUserByEmailRepository
  ) { }

  exec = (email: string): User | undefined => {
    return this.userRepository.getUserByEmail(email)
  }
}
