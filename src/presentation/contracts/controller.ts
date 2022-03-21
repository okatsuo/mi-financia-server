import { Response } from './http'

export type Controller<I = any> = {
  exec: (data: I) => Promise<Response>
}
