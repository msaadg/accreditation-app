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
import { becomeChapterMemberPageType } from './schemaTypes/Pages/becomeChapterMemberPageType'
import { signupPageType } from './schemaTypes/Pages/signupPageType'
import { certificationCardType } from './schemaTypes/Components/certificationCardType'
import { professionalAccreditationPageType } from './schemaTypes/Pages/professionalAccreditationPageType'
import { stampsType } from './schemaTypes/Components/stampsType'
import { processProfessionalPageType } from './schemaTypes/Pages/processProfessionalPageType'
import { accreditedProfessionalsPageType } from './schemaTypes/Pages/accreditedProfessionalsPageType'
import { accreditedProfessionalType } from './schemaTypes/Pages/accreditedProfessionalType'
import { educationalAccreditationPageType } from './schemaTypes/Pages/educationalAccreditationPageType'
import { criteriaEducationalPageType } from './schemaTypes/Pages/criteriaEducationalPageType'
import { processEducationalPageType } from './schemaTypes/Pages/processEducationalPageType'
import { educationalInstituteType } from './schemaTypes/Pages/educationalInstituteType'
import { educationalInstitutePageType } from './schemaTypes/Pages/educationalInstitutePageType'
import { insLogosType } from './schemaTypes/Components/insLogosType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    accreditationType, eventType, imgContainerType, newsType, bioDataType, bgImgType, statsType, pageDataType,
    certificationCardType, stampsType,

    landingPageType, aboutPageType, chapterMemberPageType, chapterMemberType, becomeChapterMemberPageType,
    signupPageType, professionalAccreditationPageType, processProfessionalPageType, 
    accreditedProfessionalType, accreditedProfessionalsPageType,
    educationalAccreditationPageType, criteriaEducationalPageType, processEducationalPageType,
    insLogosType, educationalInstituteType, educationalInstitutePageType,
  ]
}
