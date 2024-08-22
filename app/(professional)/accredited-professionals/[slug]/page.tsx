"use client"
import { CertAndCard } from "@/app/components/certAndCard";
import { ContactBar } from "@/app/components/contactBar";
import { Logo } from "@/app/components/logo";
import { NavBar } from "@/app/components/navBar";
import { ProfessionalIntro } from "@/app/components/professionalIntro";
import ProfessionalKeyInfo from "@/app/components/professionalKeyInfo";
import { pageDataQuery, professionalQuery } from "@/app/lib/queries";
import { PageData, ProfessionalData } from "@/app/lib/types";
import { Footer } from "@/app/sections/footerSec";
import { TitleSec } from "@/app/sections/titleSec";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const ProfessionalPage = ({ params } : { params : { slug : string } }) => {
  const { slug } = params;
  const [professionalData, setProfessionalData] = useState<ProfessionalData | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [professionalResponse, pageResponse] = await Promise.all([
          client.fetch(professionalQuery, { slug }),
          client.fetch(pageDataQuery)
        ]);
        setProfessionalData(professionalResponse);
        setPageData(pageResponse);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (loading) return (
  <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
    <span className='sr-only'>Loading...</span>
    <div className='h-8 w-8 bg-customOrange rounded-full animate-bounce [animation-delay:-0.3s]'></div>
    <div className='h-8 w-8 bg-customOrange rounded-full animate-bounce [animation-delay:-0.15s]'></div>
    <div className='h-8 w-8 bg-customOrange rounded-full animate-bounce'></div>
  </div>
  );

  if (!professionalData) return <div>No professional data found</div>;

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} />

      <Logo logoUrl={pageData?.logoUrl || ""} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={professionalData?.title || ""} subTitle="Seeking competitive edge? Get accredited today!" stampUrl={professionalData?.stampUrl} />

      <ProfessionalIntro professionalImgUrl={professionalData?.professionalImageUrl} bio={professionalData?.bio} />

      <ProfessionalKeyInfo name={professionalData?.title} university={professionalData?.university} registration={professionalData?.registration} city={professionalData?.city} status={professionalData?.status} education={professionalData?.education} since={professionalData?.since} format={professionalData?.format} method={professionalData?.method} />
      
      <CertAndCard certUrl={professionalData?.certificateUrl || ""} cardUrl={professionalData?.businessCardUrl || ""} />

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  );
}

export default ProfessionalPage