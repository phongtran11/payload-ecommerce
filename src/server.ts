import next from 'next'
import express from 'express'
import payload from 'payload'

import { env } from './config/enviroment'

const app = express()
const PORT = env.PORT || 3000

const start = async (): Promise<void> => {
  await payload.init({
    secret: env.PAYLOAD_SECRET || '',
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
  })

  const nextHandler = nextApp.getRequestHandler()

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info('Starting Next.js...')

    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL: ${env.PAYLOAD_PUBLIC_SERVER_URL}`)
    })
  })
}

start()
