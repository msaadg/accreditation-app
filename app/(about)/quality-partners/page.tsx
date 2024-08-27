"use client"
import { ContactBar } from "@/app/components/contactBar";
import { Heading } from "@/app/components/heading";
import { Logo } from "@/app/components/logo";
import { NavBar } from "@/app/components/navBar";
import { pageDataQuery, qualityPartnersPageQuery } from "@/app/lib/queries";
import { PageData, QualityPartnersPage } from "@/app/lib/types";
import { Footer } from "@/app/sections/footerSec";
import PartnersSec from "@/app/sections/partnersSec";
import { TitleSec } from "@/app/sections/titleSec";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const QualityPartners = () => {
  const [partnerPageData, setPartnerPageData] = useState<QualityPartnersPage | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [partnerResponse, pageResponse] = await Promise.all([
          client.fetch(qualityPartnersPageQuery),
          client.fetch(pageDataQuery),
        ]);
        setPartnerPageData(partnerResponse);
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

  if (!partnerPageData) return <div>No partner data found</div>;

  if (!pageData) return <div>No page data found</div>;

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} />

      <Logo logoUrl={pageData?.logoUrl || ""} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={partnerPageData.title || ""} subTitle={partnerPageData.subtitle || ""} /> 

      <div className="mt-16 mx-16">
        <Heading title={"Our Quality Alliances Maintaining the Highest Quality"} />
      </div>

      <div className="text-lg text-gray-600 mb-16 mx-16">
        {partnerPageData?.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      {/* partners sec */}
      <PartnersSec partners={partnerPageData.partners} />

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  );
}

export default QualityPartners;