import { GetUserByEmailRepository } from '../../repository/contracts'
import { UserSchema } from '../../schemas'
import { Controller } from '../contracts'

export class GetUserByEmailController implements Controller {
  constructor (
    private readonly userRepository: GetUserByEmailRepository
  ) { }

  exec = (email: string): UserSchema | undefined => {
    return this.userRepository.getUserByEmail(email)
  }
}
