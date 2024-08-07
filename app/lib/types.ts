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

export interface ChapterMemberPreview {
  title: string;
  slug: string;
  memberImageUrl: string;
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
  chapterMembers: ChapterMemberPreview[];
}