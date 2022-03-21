export type RequestError = { code: number, msg: string }

const makeError = (code: RequestError['code'], msg: RequestError['msg']): RequestError => ({ code, msg })

export const errors = {
  invalidEmail: makeError(1, 'Email inválido.')
}
