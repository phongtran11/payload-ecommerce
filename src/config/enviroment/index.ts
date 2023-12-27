import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const envSchema = z.object({
  DATABASE_URI: z.string({
    required_error: 'DATABASE_URI is required',
  }),
  PAYLOAD_PUBLIC_SERVER_URL: z.string({
    required_error: 'PAYLOAD_PUBLIC_SERVER_URL is required',
  }),
  PAYLOAD_SECRET: z.string({
    required_error: 'PAYLOAD_SECRET is required',
  }),
  PORT: z.string({
    required_error: 'PORT is required',
  }),
})

export const env = envSchema.parse(process.env)
