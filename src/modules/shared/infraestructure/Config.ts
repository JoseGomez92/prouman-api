import * as dotenv from 'dotenv'
import InternalApplicationError from '../domain/error/InternalApplicationError'

export default class Config {
  readonly server: { port: number }

  constructor() {
    this.loadEnviroment()
    this.server = this.readServer()
  }

  private loadEnviroment() {
    dotenv.config({ path: `${process.cwd()}/etc/${process.env.NODE_ENV}.env` })
  }

  private readServer() {
    if (!process.env.SERVER_PORT) throw new InternalApplicationError('<SERVER_PORT> environment variable is not defined')

    return { port: Number(process.env.SERVER_PORT) }
  }
}
