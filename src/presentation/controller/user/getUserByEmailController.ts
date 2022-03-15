import { GetUserByEmailRepository } from '../../../infra/repository/contracts'
import { UserSchema } from '../../../main/graphql/schemas'
import { Controller } from '../contracts'

export class GetUserByEmailController implements Controller {
  constructor (
    private readonly userRepository: GetUserByEmailRepository
  ) { }

  exec = (email: string): UserSchema | undefined => {
    return this.userRepository.getUserByEmail(email)
  }
}
