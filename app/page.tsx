"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LandingPage } from '@/app/lib/types';
import { ContactBar } from '@/app/components/contactBar';
import { NavBar } from './components/navBar';
import { CarouselTransition } from './components/carouselTransition';
import { StatBar } from './components/statBar';
import { AccreditationHelpsSec } from './sections/accreditationHelpsSec';
import { GetStartedSec } from './sections/getStartedSec';
import { AboutUsSec } from './sections/aboutUsSec';
import { AccreditedInsSec } from './sections/accreditedInsSec';
import { ChaptersSec } from './sections/chaptersSec';
import { NewsSec } from './sections/newsSec';
import { EventsSec } from './sections/eventsSec';
import { Footer } from './sections/footerSec';

const Home = () => {
  const [landingPageData, setLandingPageData] = useState<LandingPage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://7lhl2r8p.api.sanity.io/v2024-07-28/data/query/production?query=*%5B_type+%3D%3D+%22landingPage%22+%26%26+_id+%3D%3D+%222c362ba8-1eeb-4f11-82fa-b16d80d94e84%22%5D+%7B%0A++Slider%5B%5D-%3E%7B%0A++++title%2C%0A++++description%2C%0A++++%22imageUrl%22%3A+image900X1920.asset-%3Eurl%0A++%7D%2C%0A++aboutUs+%7B%0A++++title%2C%0A++++description%2C%0A++++accreditations%5B%5D-%3E%7B%0A++++++title%2C%0A++++++description%2C%0A++++%7D%2C%0A++%7D%2C%0A++chapterMembers+%7B%0A++++title%2C%0A++++description%2C%0A++++mainImage+%7B%0A++++++%22imageUrl%22%3A+asset-%3Eurl%2C%0A++++++alt%0A++++%7D%2C%0A++%7D%2C%0A++events%5B%5D-%3E%7B%0A++++title%2C%0A++++startDate%2C%0A++%7D%2C%0A++howAccreditationHelps%2C%0A++news%5B%5D-%3E%7B%0A++++publishedAt%2C%0A++++title%2C%0A++++preview%2C%0A++++%22imageUrl%22%3A+mainImage.asset-%3Eurl%0A++%7D%2C%0A++stats%2C%0A++bioData-%3E+%7B%0A++++phone%2C%0A++++address%2C%0A++++email%0A++%7D%0A%7D%0A');
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
      <ContactBar email={landingPageData?.bioData.email || ""} phone={landingPageData?.bioData.phone || ""} />
      
      <NavBar members={landingPageData?.stats.members || 0} professionals={landingPageData?.stats.professionals || 0} institutes={landingPageData?.stats.institutes || 0} />
      
      <CarouselTransition slides={landingPageData?.Slider || []} />
      
      <GetStartedSec />
      
      <AboutUsSec title1={landingPageData?.aboutUs.title || ""} desc1={landingPageData?.aboutUs.description || ""} title2={landingPageData?.aboutUs.accreditations[0].title || ""} desc2={landingPageData?.aboutUs.accreditations[0].description || ""} title3={landingPageData?.aboutUs.accreditations[1].title || ""} desc3={landingPageData?.aboutUs.accreditations[1].description || ""} />

      <StatBar members={landingPageData?.stats.members || 0} countries={landingPageData?.stats.countries || 0} institutes={landingPageData?.stats.institutes || 0} professionals={landingPageData?.stats.professionals || 0} />

      <AccreditationHelpsSec title={landingPageData?.howAccreditationHelps.title || ""} q1={landingPageData?.howAccreditationHelps.Q1 || ""} q2={landingPageData?.howAccreditationHelps.Q2 || ""} text={landingPageData?.howAccreditationHelps.text || ""} />

      <AccreditedInsSec bgColor={true} />

      <ChaptersSec title={landingPageData?.chapterMembers.title || ""} desc={landingPageData?.chapterMembers.description || ""} imageUrl={landingPageData?.chapterMembers.mainImage.imageUrl || ""} />

      <NewsSec news={landingPageData?.news || []} />

      <EventsSec events={landingPageData?.events || []} />

      <Footer email={landingPageData?.bioData.email || ""} phone={landingPageData?.bioData.phone || ""} address={landingPageData?.bioData.address || ""} />
    </div>
  );
};

export default Home;
