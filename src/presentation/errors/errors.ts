export type IRequestError = { code: number, msg: string }

const makeError = (code: IRequestError['code'], msg: IRequestError['msg']): IRequestError => ({ code, msg })

export const errors = {
  invalidEmail: makeError(1, 'Email inválido.'),
  emailExists: makeError(2, 'Esse email já está sendo usado.')
}
