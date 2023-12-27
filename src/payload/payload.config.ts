// Payload
import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import { viteBundler } from '@payloadcms/bundler-vite'

import path from 'path'
import { env } from '../config/enviroment'
import { Users } from './collections/users'

export default buildConfig({
  db: mongooseAdapter({
    url: env.DATABASE_URI,
    connectOptions: {
      dbName: 'shop_dev',
    },
  }),
  admin: {
    bundler: viteBundler(),
    user: 'users',
  },
  serverURL: env.PAYLOAD_PUBLIC_SERVER_URL,
  editor: slateEditor({}),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  collections: [Users],
})
