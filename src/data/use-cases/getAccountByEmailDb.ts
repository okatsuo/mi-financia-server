import { User } from '../../domain/entities'
import { IGetUserByEmail } from '../../domain/use-cases'
import { IGetUserByEmailRepository } from '../contracts'

export class GetUserByEmailDb implements IGetUserByEmail {
  constructor (
    private readonly userRepository: IGetUserByEmailRepository
  ) {}

  getUserByEmail = async (email: string): Promise<User | null> => {
    return await this.userRepository.getUserByEmail(email)
  }
}
