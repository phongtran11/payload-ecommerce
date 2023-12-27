import type { Access, AccessArgs } from 'payload/config'
import { checkRole } from './checkRole'

export const adminsOrLoggedIn: Access = ({ req }: AccessArgs<any>) => {
  if (checkRole(['admin'], req.user)) {
    return true
  }

  return !!req.user
}
