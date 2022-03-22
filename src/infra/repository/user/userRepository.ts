import { IGetUserByEmailRepository, IRegisterAccountRepository } from '../../../data/contracts'
import { User, UserInput } from '../../../domain/entities'
import { CreateUserRepository, GetUsersRepository } from '../contracts'
import { users } from '../fake-db'

export class UserRepository implements CreateUserRepository, GetUsersRepository, IGetUserByEmailRepository, IRegisterAccountRepository {
  create = (data: UserInput): User => {
    const newUser: User = new User(data)
    users.push(newUser)
    return newUser
  }

  getUsers = (): User[] => {
    return users
  }

  getUserByEmail = async (email: string): Promise<User | null> => {
    const user = users.find((user) => user.email === email)
    return user ?? null
  }

  register = async (data: User): Promise<User> => {
    const newUser = data
    users.push(data)
    return newUser
  }
}
