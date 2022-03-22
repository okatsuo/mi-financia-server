import { IRequestError } from '../errors'

export type Response<T = any> = Promise<T | IRequestError>
