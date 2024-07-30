"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LandingPage } from '@/app/lib/types';
import { ContactBar } from '@/app/components/contactBar';
import { NavBar } from './components/navBar';
import { CarouselTransition } from './components/carouselTransition';
import { AboutUs } from './components/aboutUs';
import { AccreditationCard } from './components/accreditationCard';
import { StatBar } from './components/statBar';

const Home = () => {
  const [landingPageData, setLandingPageData] = useState<LandingPage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://7lhl2r8p.api.sanity.io/v2024-07-28/data/query/production?query=*%5B_type+%3D%3D+%22landingPage%22+%26%26+_id+%3D%3D+%222c362ba8-1eeb-4f11-82fa-b16d80d94e84%22%5D+%7B%0A++...%2C%0A++Slider%5B%5D-%3E%7B%0A++++title%2C%0A++++description%2C%0A++++%22imageUrl%22%3A+image900X1920.asset-%3Eurl%0A++%7D%2C%0A++aboutUs+%7B%0A++++title%2C%0A++++description%2C%0A++++accreditations%5B%5D-%3E%7B%0A++++++title%2C%0A++++++description%2C%0A++++%7D%2C%0A++%7D%2C%0A++chapterMembers+%7B%0A++++title%2C%0A++++description%2C%0A++++mainImage+%7B%0A++++++%22imageUrl%22%3A+asset-%3Eurl%2C%0A++++++alt%0A++++%7D%2C%0A++%7D%2C%0A++events%5B%5D-%3E%7B%0A++++title%2C%0A++++startDate%2C%0A++++endDate%2C%0A++++description%2C%0A++++location%2C%0A++%7D%2C%0A++howAccreditationHelps%2C%0A++news%5B%5D-%3E%7B%0A++++title%2C%0A++++preview%2C%0A++++description%2C%0A++++%22imageUrl%22%3A+mainImage.asset-%3Eurl%0A++%7D%2C%0A++stats%0A%7D%0A');
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

  const educationSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-16">
    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
    <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
  </svg>`

  const professionSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-16">
    <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
    <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
  </svg>
  `

  return (
    <div>
      <div>
        <ContactBar email={landingPageData?.bioData.email || ""} phone={landingPageData?.bioData.phone || ""} />
        <NavBar />
        <CarouselTransition slides={landingPageData?.Slider || []} />
        
        <div className='bg-blue-gray-900 flex justify-around'>
          <div className='text-3xl font-bold text-white py-5'>
            Get started on your journey
          </div>
          <div className='flex text-xl font-semibold text-red-600 py-6'>
            About GSA Council
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 24 24" fill="currentColor" className="ml-2 size-6">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div className='flex text-xl font-semibold text-blue-400 py-6'>
            Educational Accreditation
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 24 24" fill="currentColor" className="ml-2 size-6">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        
        <div className='grid grid-cols-9 p-12 bg-gray-100'>
          <div className='col-span-4'>
            <AboutUs title={landingPageData?.aboutUs.title || ""} description={landingPageData?.aboutUs.description || ""} />
          </div>
          <div className='flex col-span-5'>
            <div className='grid grid-cols-2'>
              <div className='col-span-1 px-2'>
                <AccreditationCard title={landingPageData?.aboutUs.accreditations[0].title || ""} description={landingPageData?.aboutUs.accreditations[0].description || ""} svgContent={educationSVG} />
              </div>
              <div className='col-span-1 px-2'>
                <AccreditationCard title={landingPageData?.aboutUs.accreditations[1].title || ""} description={landingPageData?.aboutUs.accreditations[1].description || ""} svgContent={professionSVG} />
              </div>
            </div>
          </div>  
        </div>

        <StatBar members={landingPageData?.stats.members || 0} countries={landingPageData?.stats.countries || 0} institutes={landingPageData?.stats.institutes || 0} professionals={landingPageData?.stats.professionals || 0} />

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
