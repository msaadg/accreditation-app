"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LandingPage, PageData } from '@/app/lib/types';
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
import { client } from '@/sanity/lib/client';
import { landingPageQuery, pageDataQuery } from './lib/queries';
import { Logo } from './components/logo';

const Home = () => {
  const [landingPageData, setLandingPageData] = useState<LandingPage | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [landingResponse, pageResponse] = await Promise.all([
          client.fetch(landingPageQuery),
          client.fetch(pageDataQuery)
        ]);
        setLandingPageData(landingResponse);
        setPageData(pageResponse);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
  <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
    <span className='sr-only'>Loading...</span>
    <div className='h-8 w-8 bg-customOrange rounded-full animate-bounce [animation-delay:-0.3s]'></div>
    <div className='h-8 w-8 bg-customOrange rounded-full animate-bounce [animation-delay:-0.15s]'></div>
    <div className='h-8 w-8 bg-customOrange rounded-full animate-bounce'></div>
  </div>
  );

  if (!landingPageData) return <div>No landing page data found</div>;

  if (!pageData) return <div>No page data found</div>;

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />
      
      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} />
      
      <Logo logoUrl={pageData?.logoUrl || ""} />

      <CarouselTransition slides={landingPageData?.Slider || []} />
      
      <GetStartedSec />
      
      <AboutUsSec title1={landingPageData?.aboutUs.title || ""} desc1={landingPageData?.aboutUs.description || ""} title2={landingPageData?.aboutUs.accreditations[0].title || ""} desc2={landingPageData?.aboutUs.accreditations[0].description || ""} title3={landingPageData?.aboutUs.accreditations[1].title || ""} desc3={landingPageData?.aboutUs.accreditations[1].description || ""} />

      <StatBar members={pageData?.StatsInfo.members || 0} countries={pageData?.StatsInfo.countries || 0} institutes={pageData?.StatsInfo.institutes || 0} professionals={pageData?.StatsInfo.professionals || 0} />

      <AccreditationHelpsSec title={landingPageData?.howAccreditationHelps.title || ""} q1={landingPageData?.howAccreditationHelps.Q1 || ""} q2={landingPageData?.howAccreditationHelps.Q2 || ""} text={landingPageData?.howAccreditationHelps.text || ""} />

      <AccreditedInsSec bgColor={true} logos={landingPageData?.logos || []} />

      <ChaptersSec title={landingPageData?.chapterMembers.title || ""} desc={landingPageData?.chapterMembers.description || ""} imageUrl={landingPageData?.chapterMembers.mainImage.imageUrl || ""} />

      <NewsSec news={landingPageData?.news || []} />

      <EventsSec events={landingPageData?.events || []} />

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  );
};

export default Home;
