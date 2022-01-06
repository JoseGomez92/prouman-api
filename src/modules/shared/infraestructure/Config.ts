import * as dotenv from 'dotenv'

export default class Config {
  readonly server: { port: number }

  constructor() {
    this.loadEnviroment()
    this.server = this.readServer()
  }

  private loadEnviroment() {
    dotenv.config({ path: `${process.cwd()}/etc/${process.env.ENV_FILE}` })
  }

  private readServer() {
    if (!process.env.SERVER_PORT) throw new Error('Server environment variable is not defined')

    return { port: Number(process.env.SERVER_PORT) }
  }
}
