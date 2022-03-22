import { User } from '../entities'

export type IGetUserByEmail = {
  getUserByEmail: (email: string) => Promise<User | null>
}
