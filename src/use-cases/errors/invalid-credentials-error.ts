export class InvalidCredentialsError extends Error {
  constructor() {
    super('Username or Password invalid')
  }
}
