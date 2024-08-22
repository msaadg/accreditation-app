"use client"
import { ContactBar } from "@/app/components/contactBar";
import { Heading } from "@/app/components/heading";
import { Logo } from "@/app/components/logo";
import { NavBar } from "@/app/components/navBar";
import { pageDataQuery, processEducationalPageQuery } from "@/app/lib/queries";
import { PageData, ProcessEducationalPage } from "@/app/lib/types";
import { Footer } from "@/app/sections/footerSec";
import { TitleSec } from "@/app/sections/titleSec";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const ProcessForEducationalAccreditation = () => {
  const [processEducationalPageData, setProcessEducationalPageData] = useState<ProcessEducationalPage | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [processEducationalResponse, pageResponse] = await Promise.all([
          client.fetch(processEducationalPageQuery),
          client.fetch(pageDataQuery)
        ]);
        setProcessEducationalPageData(processEducationalResponse);
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

  if (!processEducationalPageData) return <div>No chapter data found</div>;

  if (!pageData) return <div>No page data found</div>;

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} />

      <Logo logoUrl={pageData?.logoUrl || ""} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={processEducationalPageData?.title || ""} subTitle={processEducationalPageData?.subtitle || ""} /> 

      <div className="mx-16 mt-16">
        <Heading title="Steps of Accreditation Process for Professionals" />
      </div>

      <div className="text-lg text-gray-600 mx-16 my-8">
        {processEducationalPageData?.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
        
      <div className="mx-24 my-16">
        <img
          src={processEducationalPageData?.bgProcessEducationalImgUrl || ""}
          alt="Explore the benefits of chapter membership"
          className="w-full h-full"
        />
      </div>

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  )
}

export default ProcessForEducationalAccreditation