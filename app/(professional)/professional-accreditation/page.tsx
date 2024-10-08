"use client"
import { ContactBar } from "@/app/components/contactBar";
import { Logo } from "@/app/components/logo";
import { NavBar } from "@/app/components/navBar";
import { pageDataQuery, professionalAccreditationPageQuery } from "@/app/lib/queries";
import { PageData, ProfessionalAccreditationPage } from "@/app/lib/types";
import { AccreditationPerksSec } from "@/app/sections/accreditationPerksSec";
import { ApplyExplore2ndSec } from "@/app/sections/applyExplore2ndSec";
import { Footer } from "@/app/sections/footerSec";
import { MembershipTypes } from "@/app/sections/membershipTypes";
import { ProofSec } from "@/app/sections/proofSec";
import { TitleSec } from "@/app/sections/titleSec";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const ProfessionalAccreditation = () => {
  const [professionalAccreditationPageData, setProfessionalAccreditationPageData] = useState<ProfessionalAccreditationPage | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [professionalAccreditationResponse, pageResponse] = await Promise.all([
          client.fetch(professionalAccreditationPageQuery),
          client.fetch(pageDataQuery)
        ]);
        setProfessionalAccreditationPageData(professionalAccreditationResponse);
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

  if (!professionalAccreditationPageData) return <div>No chapter data found</div>;

  if (!pageData) return <div>No page data found</div>;

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} />

      <Logo logoUrl={pageData?.logoUrl || ""} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={professionalAccreditationPageData?.title || ""} subTitle={professionalAccreditationPageData?.subtitle || ""} /> 

      <div className="text-lg text-gray-600 m-16">
        {professionalAccreditationPageData?.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      <ProofSec title="Accreditation Proof" bgImg={professionalAccreditationPageData?.bgProfessionalAccreditationImgUrl || ""} proof1={professionalAccreditationPageData?.proof1 || ""} proof2={professionalAccreditationPageData?.proof2 || ""} />

      <AccreditationPerksSec credibility={professionalAccreditationPageData?.credibility || ""} prospects={professionalAccreditationPageData?.prospects || ""} recognition={professionalAccreditationPageData?.recognition || ""} opportunities={professionalAccreditationPageData?.opportunities || ""} reputation={professionalAccreditationPageData?.reputation || ""} resources={professionalAccreditationPageData?.resources || ""} />
      
      <MembershipTypes silver={professionalAccreditationPageData?.silver} gold={professionalAccreditationPageData?.gold} platinum={professionalAccreditationPageData?.platinum} diamond={professionalAccreditationPageData?.diamond} />
      
      <ApplyExplore2ndSec bgImgUrl={pageData?.bgImgUrl || ""} redirectUrl="process-for-professional-accreditation" />

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  )
}

export default ProfessionalAccreditation