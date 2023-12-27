import type { AccessArgs } from 'payload/config'
import { checkRole } from './checkRole'
import { User } from '../payload-types'

type isAdmin = (args: AccessArgs<unknown, User>) => boolean

export const admins: isAdmin = ({ req: { user } }) => {
  return checkRole(['admin'], user)
}
