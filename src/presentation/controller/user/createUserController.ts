import { CreateUserRepository } from '../../../infra/repository/contracts'
import { UserInput } from '../../../main/graphql/inputs'
import { UserSchema } from '../../../main/graphql/schemas'
import { Controller } from '../contracts'

export class CreateUserController implements Controller {
  private readonly userRepository: CreateUserRepository

  constructor (userRepository: CreateUserRepository) {
    this.userRepository = userRepository
  }

  exec (data: UserInput): UserSchema {
    return this.userRepository.create(data)
  }
}
