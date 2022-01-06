import express from 'express'
import container from './dependency-injection'
import Logger from './modules/shared/domain/Logger'
import Config from './modules/shared/infraestructure/Config'

const app: express.Express = express()

const config = container.get<Config>('Shared.Config')
const logger = container.get<Logger>('Shared.Logger')

app.listen(config.server.port, () => {
  logger.info(`Server is running on port ${config.server.port}`)
})
