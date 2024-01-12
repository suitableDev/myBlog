import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schema/post'
import { tag } from './schema/tag'
import { footer } from './schema/footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, footer],
}
