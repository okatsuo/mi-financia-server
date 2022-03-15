export class DateHelper {
  static now = (): number => new Date().valueOf()

  static isValid = (date: number | string): boolean => !isNaN(new Date(date).getTime())
}
