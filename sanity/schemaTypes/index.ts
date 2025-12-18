import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import testimonial from './testimonial'
import imageAsset from './imageAsset'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [imageAsset, project, testimonial],
}
