import express from 'express'
import Config from './modules/shared/infraestructure/Config'

const app: express.Express = express()
const config = new Config()

app.listen(config.server.port, () => {
  console.log(`Server running on port ${config.server.port}`)
})
