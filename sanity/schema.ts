import { type SchemaTypeDefinition } from 'sanity'

import experience from './schemas/experience'
import pageInfo from './schemas/pageInfo'
import project from './schemas/project'
import skill from './schemas/skill'
import social from './schemas/social'

export const schemaTypes: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, experience, project, skill, social],
}