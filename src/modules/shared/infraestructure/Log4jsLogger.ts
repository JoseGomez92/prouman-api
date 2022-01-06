import log4js from 'log4js'
import Logger from '../domain/Logger'

export default class Log4jsLogger implements Logger {
  private logger: log4js.Log4js

  constructor() {
    this.logger = log4js.configure({
      appenders: {
        console: { type: 'console' },
        app: { type: 'file', filename: `${process.cwd()}/logs/app.log` },
        error: { type: 'file', filename: `${process.cwd()}/logs/error.log` }
      },
      categories: {
        default: { appenders: ['console', 'app'], level: 'info' },
        error: { appenders: ['console', 'error'], level: 'error' }
      }
    })
  }

  info(message: string): void {
    this.logger.getLogger('app').info(message)
  }

  error(message: string): void {
    this.logger.getLogger('error').error(message)
  }
}
