import { IRegisterAccountRepository } from '../../../data/contracts'
import { User, UserInput } from '../../../domain/entities'
import { CreateUserRepository, GetUserByEmailRepository, GetUsersRepository } from '../contracts'
import { users } from '../fake-db'

export class UserRepository implements CreateUserRepository, GetUsersRepository, GetUserByEmailRepository, IRegisterAccountRepository {
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

  register = async (data: User): Promise<User> => {
    const newUser = data
    users.push(data)
    return newUser
  }
}
