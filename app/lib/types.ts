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

export interface Event {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

export interface News {
  title: string;
  preview: string;
  description: string;
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
  events: Array<Event>;
  howAccreditationHelps: {
    Q1: string;
    Q2: string;
    text: string;
    title: string;
  };
  news: Array<News>;
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
