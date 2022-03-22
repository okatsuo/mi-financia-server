import { User } from '../../domain/entities'

export type IRegisterAccountRepository = {
  register: (data: User) => Promise<User>
}

export type IGetUserByEmailRepository = {
  getUserByEmail: (email: string) => Promise<User | null>
}
