import { Controller } from '../contracts'
import { UserInput } from '../../inputs'
import { UserSchema } from '../../schemas'
import { CreateUserRepository } from '../../repository/contracts'

export class CreateUserController implements Controller {
  private readonly userRepository: CreateUserRepository

  constructor (userRepository: CreateUserRepository) {
    this.userRepository = userRepository
  }

  exec (data: UserInput): UserSchema {
    return this.userRepository.create(data)
  }
}
