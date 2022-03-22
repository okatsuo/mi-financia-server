export type ICryptography = {
  encrypt: (value: string) => Promise<string>
}
