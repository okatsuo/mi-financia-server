export type Controller<I = any, O = any> = {
  exec: (data: I) => O
}
