"use client"
import { ContactBar } from "@/app/components/contactBar"
import { NavBar } from "@/app/components/navBar";
import { aboutPageQuery, pageDataQuery } from "@/app/lib/queries";
import { AboutPage, PageData } from "@/app/lib/types";
import { AccreditedInsSec } from "@/app/sections/accreditedInsSec";
import { ChaptersSec } from "@/app/sections/chaptersSec";
import { Footer } from "@/app/sections/footerSec";
import { MisVisSec } from "@/app/sections/misVisSec";
import { TitleSec } from "@/app/sections/titleSec";
import TypesAccreditationsSec from "@/app/sections/typesAccreditationsSec";
import { client } from "@/sanity/lib/client";
import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [aboutPageData, setAboutPageData] = useState<AboutPage | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutResponse, pageResponse] = await Promise.all([
          client.fetch(aboutPageQuery),
          client.fetch(pageDataQuery)
        ]);
        setAboutPageData(aboutResponse);
        setPageData(pageResponse);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!aboutPageData) return <div>No about data found</div>;

  if (!pageData) return <div>No page data found</div>;

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={aboutPageData?.title || ""} subTitle={aboutPageData?.subtitle || ""} /> 

      <div className="text-lg text-gray-600 m-16">
        {aboutPageData?.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
      
      <MisVisSec mission={aboutPageData?.mission || ""} vision={aboutPageData?.vision || ""} />
      
      <TypesAccreditationsSec education={aboutPageData?.educationAccreditation || ""} professional={aboutPageData?.professionalAccreditation || ""} />

      <AccreditedInsSec bgColor={false} />

      <ChaptersSec title={aboutPageData?.chapterMembers.title || ""} desc={aboutPageData?.chapterMembers.description || ""} imageUrl={aboutPageData?.chapterMembers.chapterImageUrl || ""} />

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} />
    </div>
  )
}

export default About