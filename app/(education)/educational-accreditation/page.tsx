"use client"
import { ContactBar } from "@/app/components/contactBar";
import { NavBar } from "@/app/components/navBar";
import { educationalAccreditationPageQuery, pageDataQuery } from "@/app/lib/queries";
import { EducationalAccreditationPage, PageData } from "@/app/lib/types";
import { AccreditationPerksEdSec } from "@/app/sections/accreditationPerksEdSec";
import { AccreditationPerksSec } from "@/app/sections/accreditationPerksSec";
import { AccreditedInsSec } from "@/app/sections/accreditedInsSec";
import { ApplyExplore2ndSec } from "@/app/sections/applyExplore2ndSec";
import { Footer } from "@/app/sections/footerSec";
import { MembershipTypes } from "@/app/sections/membershipTypes";
import { ProofSec } from "@/app/sections/proofSec";
import { TitleSec } from "@/app/sections/titleSec";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const EducationalAccreditation = () => {
  const [educationalAccreditationPageData, setEducationalAccreditationPageData] = useState<EducationalAccreditationPage | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [educationalAccreditationResponse, pageResponse] = await Promise.all([
          client.fetch(educationalAccreditationPageQuery),
          client.fetch(pageDataQuery)
        ]);
        setEducationalAccreditationPageData(educationalAccreditationResponse);
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

  if (!educationalAccreditationPageData) return <div>No chapter data found</div>;

  if (!pageData) return <div>No page data found</div>;

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} logoUrl={pageData?.logoUrl || ""} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={educationalAccreditationPageData?.title || ""} subTitle={educationalAccreditationPageData?.subtitle || ""} /> 

      <div className="text-lg text-gray-600 m-16">
        {educationalAccreditationPageData?.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      <ProofSec title="Accreditation Proof" bgImg={educationalAccreditationPageData?.bgEducationalAccreditationImgUrl || ""} proof1={educationalAccreditationPageData?.proof1 || ""} proof2={educationalAccreditationPageData?.proof2 || ""} />

      <AccreditationPerksEdSec funds={educationalAccreditationPageData?.funds} faculty={educationalAccreditationPageData?.faculty} value={educationalAccreditationPageData?.value} businesses={educationalAccreditationPageData?.businesses} allocation={educationalAccreditationPageData?.allocation} edge={educationalAccreditationPageData?.edge} study={educationalAccreditationPageData?.study} markets={educationalAccreditationPageData?.markets} />

      <MembershipTypes silver={educationalAccreditationPageData?.silver} gold={educationalAccreditationPageData?.gold} platinum={educationalAccreditationPageData?.platinum} diamond={educationalAccreditationPageData?.diamond} />
      
      <AccreditedInsSec bgColor={false} logos={educationalAccreditationPageData?.logos || []} />

      <ApplyExplore2ndSec bgImgUrl={pageData?.bgImgUrl || ""} redirectUrl="process-for-educational-accreditation" />

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  )
};

export default EducationalAccreditation;