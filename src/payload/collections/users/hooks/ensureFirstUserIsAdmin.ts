import type { FieldHook } from 'payload/types'

export const ensureFirstUserIsAdmin: FieldHook<any> = async ({ req, operation, value }) => {
  if (operation === 'create') {
    const users = await req.payload.find({ collection: 'users', limit: 0, depth: 0 })
    if (users.totalDocs === 0) {
      if (!(value || []).includes('admin')) {
        return [...(value || []), 'admin']
      }
    }
  }

  return value
}
