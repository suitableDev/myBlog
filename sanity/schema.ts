import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schema/post'
import { tag } from './schema/tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag],
}
