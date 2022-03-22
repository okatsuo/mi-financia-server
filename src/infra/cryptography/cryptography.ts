import bcrypt from 'bcrypt'
import { ICryptography } from '../../data/contracts'

export class Cryptography implements ICryptography {
  private readonly salt = 15

  encrypt = async (value: string): Promise<string> => {
    return await bcrypt.hash(value, this.salt)
  }
}
