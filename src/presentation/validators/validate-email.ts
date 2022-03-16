import { isEmail } from 'class-validator'
import { IEmailValidator } from '../controller/contracts'

export class EmailValidator implements IEmailValidator {
  validate = (email: string): boolean => isEmail(email)
}
