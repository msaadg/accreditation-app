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
  stats: StatsInfo;
  bioData: BioData;
  title: string;
}


export interface AboutPage {
  bgImgUrl: string;
  bioData: BioData;
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
  StatsInfo: StatsInfo;
}


export interface ChapterMemberPage {
  title: string;
  subtitle: string;
  bgImgUrl: string;
  bgChapterMemberImgUrl: string;
  bioData: BioData;
  StatsInfo: StatsInfo;
  description: string;
  chapterMembers: ChapterMemberPreview[];
}