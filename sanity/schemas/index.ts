import { type SchemaTypeDefinition } from 'sanity'

import experience from './experience'
import pageInfo from './pageInfo'
import project from './project'
import skill from './skill'
import social from './social'

// export const schemaTypes: { types: SchemaTypeDefinition[] } = {
//   types: [post, author, category, blockContent],
// }
export const schemaTypes = [pageInfo, experience, project, skill, social]