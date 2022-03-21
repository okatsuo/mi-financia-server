import { RequestError } from '../../main/resources'

export type Response<T = any> = T | RequestError
