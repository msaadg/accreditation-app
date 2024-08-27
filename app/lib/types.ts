export interface Image {
  imageUrl: string;
  alt: string;
}

export interface Accreditation {
  title: string;
  description: string;
}

export interface Standard {
  title: string;
  description: string;
}

export interface Slider {
  title: string;
  description: string;
  imageUrl: string;
}

export interface EventPreview {
  title: string;
  startDate: string;
  slug: string;
}

export interface NewsPreview {
  title: string;
  preview: string;
  publishedAt: string;
  imageUrl: string;
  slug: string;
}

export interface Links {
  url: string;
  text: string;
}

export interface StatsInfo {
  members: number;
  professionals: number;
  countries: number;
  institutes: number;
}

export interface BioData {
  title: string;
  email: string;
  phone: string;
  address: string;
}

export interface ProfilePreview {
  title: string;
  slug: string;
  imageUrl: string;
  since: string;
  education: string;
}

export interface InstitutePreview {
  title: string;
  slug: string;
  insLogo: string;
  stamp: string;
  preview: string;
}

export interface Experience {
  designation: string;
  employer: string;
  industry: string;
  resp: string;
  _key: string;
}


export interface CertCard {
  title: string;
  stamp: string;
  slug: string;
  benefits: string[];
}

export interface Partner {
  title: string;
  description: string;
  logoUrl: string;
  certUrl: string;
}

export interface PageData {
  bgImgUrl: string;
  logoUrl: string;
  bioData: BioData;
  StatsInfo: StatsInfo;
  facebook: string;
  insta: string;
  twitter: string;
  linkedIn: string;
  youtube: string;
}


export interface MemberData {
  bio: string;
  education: string;
  experience: Experience[];
  memberImage: string;
  profession: string;
  since: string;
  slug: string;
  title: string;
};


export interface LandingPage {
  Slider: Array<Slider>;
  aboutUs: {
    accreditations: Array<Accreditation>;
    title: string;
    description: string;
  };
  chapterMembers: {
    mainImage: Image;
    description: string;
    title: string;
  };
  events: Array<EventPreview>;
  howAccreditationHelps: {
    Q1: string;
    Q2: string;
    text: string;
    title: string;
  };
  logos: Array<Image>;
  news: Array<NewsPreview>;
  title: string;
}


export interface AboutPage {
  description: string;
  educationAccreditation: string;
  mission: string;
  professionalAccreditation: string;
  subtitle: string;
  title: string;
  vision: string;
  chapterMembers: {
    chapterImageUrl: string;
    description: string;
    title: string;
  };
  logos: Array<Image>;
}


export interface ChapterMemberPage {
  title: string;
  subtitle: string;
  bgChapterMemberImgUrl: string;
  description: string;
  chapterMembers: ProfilePreview[];
}

export interface BecomeChapterMemberPage {
  title: string;
  subtitle: string;
  bgBecomeChapterMemberImgUrl: string;
  description: string;
  proof1: string;
  proof2: string;
  events: string;
  prospects: string;
  opportunity: string;
  publications: string;
  endingTile: string;
  endingDescription: string;
}

export interface SignupPage {
  title: string;
  subtitle: string;
}

export interface ProfessionalAccreditationPage {
  title: string;
  subtitle: string;
  bgProfessionalAccreditationImgUrl: string;
  description: string;
  proof1: string;
  proof2: string;
  credibility: string;
  prospects: string;
  recognition: string;
  opportunities: string;
  reputation: string;
  resources: string;
  silver: CertCard;
  gold: CertCard;
  platinum: CertCard;
  diamond: CertCard;
}

export interface ProcessProfessionalPage {
  title: string;
  subtitle: string;
  description: string;
  bgProcessProfessionalImgUrl: string;
}

export interface AccreditedProfessionalsPage {
  title: string;
  subtitle: string;
  bgAccreditedProfessionalsImgUrl: string;
  description: string;
  accreditedProfessionals: ProfilePreview[];
}

export interface ProfessionalData {
  bio: string;
  businessCardUrl: string;
  certificateUrl: string;
  city: string;
  education: string;
  format: string;
  method: string;
  professionalImageUrl: string;
  registration: string;
  since: string;
  slug: string;
  stampUrl: string;
  status: string;
  title: string;
  university: string;
}

export interface EducationalAccreditationPage {
  title: string;
  subtitle: string;
  description: string;
  proof1: string;
  proof2: string;
  funds: string;
  faculty: string;
  value: string;
  businesses: string;
  allocation: string;
  edge: string;
  study: string;
  markets: string;
  bgEducationalAccreditationImgUrl: string;
  silver: CertCard;
  gold: CertCard;
  platinum: CertCard;
  diamond: CertCard;
  logos: Array<Image>;
}

export interface CriteriaEducationalPage {
  title: string;
  slug: string;
  subtitle: string;
  description1: string;
  description2: string;
  attributes: string[];
  bgCriteriaEducationalImgUrl: string;
  management: string;
  progress: string;
  implications: string;
  standard1: Standard;
  standard2: Standard;
  standard3: Standard;
  standard4: Standard;
  standard5: Standard;
  standard6: Standard;
  standard7: Standard;
  standard8: Standard;
  standard9: Standard;
}

export interface ProcessEducationalPage {
  title: string;
  subtitle: string;
  description: string;
  bgProcessEducationalImgUrl: string;
}

export interface educationalInstitutesPage {
  title: string;
  subtitle: string;
  description: string;
  educationalInstitutes: InstitutePreview[];
}

export interface EducationalInstituteData {
  title: string;
  bio: string;
  city: string;
  deliveryMethod: string;
  deliveryOption: string;
  educationLevel: string;
  facultyCount: string;
  format: string;
  grantedYear: number;
  language: string;
  membershipNumber: string;
  membershipType: string;
  preview: string;
  program: string;
  programFormat: string;
  programsOffered: string;
  status: string;
  studentsCount: string;
  validationPeriod: string;
  schoolWeb: string;
  schoolContact: string;
  schoolFacebook: string;
  schoolTwitter: string;
  schooInsta: string;
  schoolLinkedIn: string;
  schoolYoutube: string;
  insCertUrl: string;
  insImageUrl: string;
  insLogoUrl: string;
  stampUrl: string;
  standardMetrics: number[];
  slug: string;
}

export interface NewsData {
  title: string;
  publishedAt: string;
  description: string;
  slug: string;
}

export interface EventData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  slug: string;
}

export interface SocialData {
  facebook: string;
  twitter: string;
  insta: string;
  linkedIn: string;
  youtube: string;
}

export interface QualityPartnersPage {
  title: string;
  subtitle: string;
  description: string;
  partners: Partner[];
};