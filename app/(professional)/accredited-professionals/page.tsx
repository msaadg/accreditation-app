"use client"
import { ContactBar } from "@/app/components/contactBar";
import { Logo } from "@/app/components/logo";
import { NavBar } from "@/app/components/navBar";
import { accreditedProfessionalsPageQuery, pageDataQuery } from "@/app/lib/queries";
import { AccreditedProfessionalsPage, PageData } from "@/app/lib/types";
import { AccProfessionalsPreviewSec } from "@/app/sections/accProfessionalsPreviewSec";
import { Footer } from "@/app/sections/footerSec";
import { GetAccreditedSec } from "@/app/sections/getAccreditedSec";
import { TitleSec } from "@/app/sections/titleSec";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const AccreditedProfessionals = () => {
  const [professionalsPageData, setProfessionalsPageData] = useState<AccreditedProfessionalsPage | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [professionalsResponse, pageResponse] = await Promise.all([
          client.fetch(accreditedProfessionalsPageQuery),
          client.fetch(pageDataQuery)
        ]);
        setProfessionalsPageData(professionalsResponse);
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

  if (!professionalsPageData) return <div>No chapter data found</div>;

  if (!pageData) return <div>No page data found</div>;

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} />

      <Logo logoUrl={pageData?.logoUrl || ""} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={professionalsPageData?.title || ""} subTitle={professionalsPageData?.subtitle || ""} /> 

      <div className="text-lg text-gray-600 m-16">
        {professionalsPageData?.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      <AccProfessionalsPreviewSec professionals={professionalsPageData?.accreditedProfessionals || []} />
      
      <GetAccreditedSec bgImg={professionalsPageData?.bgAccreditedProfessionalsImgUrl || ""} />

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  )
}

export default AccreditedProfessionals