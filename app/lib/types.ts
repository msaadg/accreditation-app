export interface Image {
  imageUrl: string;
  alt: string;
}

export interface Accreditation {
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
}

export interface NewsPreview {
  title: string;
  preview: string;
  publishedAt: string;
  imageUrl: string;
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

export interface PageData {
  bgImgUrl: string;
  bioData: BioData;
  StatsInfo: StatsInfo;
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