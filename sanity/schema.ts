import { type SchemaTypeDefinition } from 'sanity'
import {postType} from './schemaTypes/postType'
import {authorType} from './schemaTypes/authorType'
import { accreditationType } from './schemaTypes/Components/accreditationType'
import { eventType } from './schemaTypes/Components/eventType'
import { imgContainerType } from './schemaTypes/Components/imgContainerType'
import { newsType } from './schemaTypes/Components/newsType'
import { landingPageType } from './schemaTypes/Pages/landingPageType'
import { bioDataType } from './schemaTypes/Components/bioDataType'
import { aboutPageType } from './schemaTypes/Pages/aboutPageType'
import { bgImgType } from './schemaTypes/Components/bgImgType'
import { statsType } from './schemaTypes/Components/statsType'
import { chapterMemberType } from './schemaTypes/Pages/chapterMemberType'
import { chapterMemberPageType } from './schemaTypes/Pages/chapterMemberPageType'
import { pageDataType } from './schemaTypes/Components/pageDataType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    accreditationType, eventType, imgContainerType, newsType, bioDataType, bgImgType, statsType, pageDataType,
    landingPageType, aboutPageType, chapterMemberPageType, chapterMemberType
  ]
}
