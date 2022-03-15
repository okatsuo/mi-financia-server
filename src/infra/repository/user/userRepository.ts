import { User, UserInput } from '../../../domain/entities'
import { CreateUserRepository, GetUserByEmailRepository, GetUsersRepository } from '../contracts'
import { users } from '../fake-db'

export class UserRepository implements CreateUserRepository, GetUsersRepository, GetUserByEmailRepository {
  create = (data: UserInput): User => {
    const newUser: User = new User(data)
    users.push(newUser)
    return newUser
  }

  getUsers = (): User[] => {
    return users
  }

  getUserByEmail = (email: string): User | undefined => {
    return users.find((user) => user.email === email)
  }
}
