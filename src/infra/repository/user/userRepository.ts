import { UserInput } from '../../../main/graphql/inputs'
import { UserSchema } from '../../../main/graphql/schemas'
import { CreateUserRepository, GetUserByEmailRepository, GetUsersRepository } from '../contracts'
import { users } from '../fake-db'

export class UserRepository implements CreateUserRepository, GetUsersRepository, GetUserByEmailRepository {
  create = (data: UserInput): UserSchema => {
    const newUser: UserSchema = { id: (users.length).toString(), ...data }
    users.push(newUser)
    return newUser
  }

  getUsers = (): UserSchema[] => {
    return users
  }

  getUserByEmail = (email: string): UserSchema | undefined => {
    return users.find((user) => user.email === email)
  }
}
