import { type SchemaTypeDefinition } from 'sanity'
import {postType} from './schemaTypes/postType'
import {authorType} from './schemaTypes/authorType'
import { accreditationType } from './schemaTypes/Components/accreditationType'
import { eventType } from './schemaTypes/Components/eventType'
import { imgContainerType } from './schemaTypes/Components/imgContainerType'
import { newsType } from './schemaTypes/Components/newsType'
import { landingPageType } from './schemaTypes/Pages/landingPageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    accreditationType, eventType, imgContainerType, newsType, landingPageType
  ]
}
