"use client"
import { ContactBar } from "@/app/components/contactBar"
import { NavBar } from "@/app/components/navBar";
import { AboutPage } from "@/app/lib/types";
import { AccreditedInsSec } from "@/app/sections/accreditedInsSec";
import { ChaptersSec } from "@/app/sections/chaptersSec";
import { Footer } from "@/app/sections/footerSec";
import { MisVisSec } from "@/app/sections/misVisSec";
import { TitleSec } from "@/app/sections/titleSec";
import TypesAccreditationsSec from "@/app/sections/typesAccreditationsSec";
import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [aboutPageData, setAboutPageData] = useState<AboutPage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://7lhl2r8p.api.sanity.io/v2024-07-28/data/query/production?query=*%5B_type+%3D%3D+%22aboutPage%22+%26%26+_id+%3D%3D+%22e9c6bf01-417a-430d-8599-77ea54c4d5c4%22%5D+%7B%0A++StatsInfo+-%3E%7B%0A++++members%2C%0A++++professionals%2C%0A++++countries%2C%0A++++institutes%0A++%7D%2C%0A++title%2C%0A++subtitle%2C%0A++%22bgImgUrl%22%3A+bgImg-%3EmainImage.asset-%3Eurl%2C%0A++bioData-%3E+%7B%0A++++title%2C%0A++++email%2C%0A++++phone%2C%0A++++address%0A++%7D%2C%0A++mission%2C%0A++vision%2C%0A++description%2C%0A++educationAccreditation%2C%0A++professionalAccreditation%2C%0A++chapterMembers+%7B%0A++++title%2C%0A++++description%2C%0A++++%22chapterImageUrl%22%3A+chapterImage.asset-%3Eurl%2C%0A++%7D%0A%7D%0A');
        setAboutPageData(response.data.result[0]);
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
      <ContactBar email={aboutPageData?.bioData.email || ""} phone={aboutPageData?.bioData.phone || ""} />

      <NavBar members={aboutPageData?.StatsInfo.members || 0} professionals={aboutPageData?.StatsInfo.professionals || 0} institutes={aboutPageData?.StatsInfo.institutes || 0} />

      <TitleSec bgImg={aboutPageData?.bgImgUrl || ""} title={aboutPageData?.title || ""} subTitle={aboutPageData?.subtitle || ""} /> 

      <div className="text-lg text-gray-600 m-16">
        {aboutPageData?.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
      
      <MisVisSec mission={aboutPageData?.mission || ""} vision={aboutPageData?.vision || ""} />
      
      <TypesAccreditationsSec education={aboutPageData?.educationAccreditation || ""} professional={aboutPageData?.professionalAccreditation || ""} />

      <AccreditedInsSec bgColor={false} />

      <ChaptersSec title={aboutPageData?.chapterMembers.title || ""} desc={aboutPageData?.chapterMembers.description || ""} imageUrl={aboutPageData?.chapterMembers.chapterImageUrl || ""} />

      <Footer email={aboutPageData?.bioData.email || ""} phone={aboutPageData?.bioData.phone || ""} address={aboutPageData?.bioData.address || ""} />
    </div>
  )
}

export default About