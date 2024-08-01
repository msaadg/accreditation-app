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
  stats: {
    countries: number;
    institutes: number;
    members: number;
    professionals: number;
  };
  bioData: {
    email: string;
    address: string;
    phone: string;
  }
  title: string;
}
