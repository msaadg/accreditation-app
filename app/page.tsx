"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Image {
  imageUrl: string;
  alt: string;
}

interface Accreditation {
  title: string;
  description: string;
}

interface Slider {
  title: string;
  description: string;
  imageUrl: string;
}

interface Event {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

interface News {
  title: string;
  preview: string;
  description: string;
  imageUrl: string;
}

interface LandingPage {
  Slider: Array<Slider>;
  aboutUs: {
    accreditations: Array<Accreditation>;
    title: string;
    description: string;
  };
  chapterMembers: {
    mainImage: Image;
    description: string,
    title: string
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

const Home = () => {
  const [landingPageData, setLandingPageData] = useState<LandingPage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://7lhl2r8p.api.sanity.io/v2024-07-28/data/query/production?query=*%5B_type+%3D%3D+%22landingPage%22+%26%26+_id+%3D%3D+%222c362ba8-1eeb-4f11-82fa-b16d80d94e84%22%5D+%7B%0A++...%2C%0A++Slider%5B%5D-%3E%7B%0A++++title%2C%0A++++description%2C%0A++++%22imageUrl%22%3A+image.asset-%3Eurl%0A++%7D%2C%0A++aboutUs+%7B%0A++++title%2C%0A++++description%2C%0A++++accreditations%5B%5D-%3E%7B%0A++++++title%2C%0A++++++description%2C%0A++++%7D%2C%0A++%7D%2C%0A++chapterMembers+%7B%0A++++title%2C%0A++++description%2C%0A++++mainImage+%7B%0A++++++%22imageUrl%22%3A+asset-%3Eurl%2C%0A++++++alt%0A++++%7D%2C%0A++%7D%2C%0A++events%5B%5D-%3E%7B%0A++++title%2C%0A++++startDate%2C%0A++++endDate%2C%0A++++description%2C%0A++++location%2C%0A++%7D%2C%0A++howAccreditationHelps%2C%0A++news%5B%5D-%3E%7B%0A++++title%2C%0A++++preview%2C%0A++++description%2C%0A++++%22imageUrl%22%3A+mainImage.asset-%3Eurl%0A++%7D%2C%0A++stats%0A%7D%0A');
        setLandingPageData(response.data.result[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="bg-slate-800 w-full p-10">
        Star building the frontend with Tailwind and prettify
      </div>

      <div>
        <h1>{landingPageData?.title}</h1>
        <div>
          {landingPageData?.Slider.map((slide, index) => (
            <div key={index}>
              <img src={slide.imageUrl} alt={slide.title} />
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>
        <section>
          <h2>{landingPageData?.aboutUs.title}</h2>
          <p>{landingPageData?.aboutUs.description}</p>
          {landingPageData?.aboutUs.accreditations.map((accreditation, index) => (
            <div key={index}>
              <h3>{accreditation.title}</h3>
              <p>{accreditation.description}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>{landingPageData?.chapterMembers.title}</h2>
          <p>{landingPageData?.chapterMembers.description}</p>
          <img src={landingPageData?.chapterMembers.mainImage.imageUrl} alt={landingPageData?.chapterMembers.mainImage.alt} />
        </section>
        <section>
          <h2>{landingPageData?.howAccreditationHelps.title}</h2>
          <h3>{landingPageData?.howAccreditationHelps.Q1}</h3>
          <h3>{landingPageData?.howAccreditationHelps.Q2}</h3>
          <p>{landingPageData?.howAccreditationHelps.text}</p>
        </section>
        <section>
          <h2>Stats</h2>
          <p>Countries: {landingPageData?.stats.countries}</p>
          <p>Institutes: {landingPageData?.stats.institutes}</p>
          <p>Members: {landingPageData?.stats.members}</p>
          <p>Professionals: {landingPageData?.stats.professionals}</p>
        </section>
        <section>
          <h2>Events</h2>
          {landingPageData?.events.map((event, index) => (
            <div key={index}>
              <h3>{event.title}</h3>
              <p>{new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}</p>
              <p>{event.location}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>News</h2>
          {landingPageData?.news.map((newsItem, index) => (
            <div key={index}>
              <h3>{newsItem.title}</h3>
              <img src={newsItem.imageUrl} alt={newsItem.title} />
              <p>{newsItem.preview}</p>
              <p>{newsItem.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
