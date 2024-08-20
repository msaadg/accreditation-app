"use client"
import { ContactBar } from "@/app/components/contactBar";
import { Logo } from "@/app/components/logo";
import { NavBar } from "@/app/components/navBar";
import { becomeChapterPageQuery, pageDataQuery } from "@/app/lib/queries";
import { BecomeChapterMemberPage, PageData } from "@/app/lib/types";
import { ApplyExploreSec } from "@/app/sections/applyExploreSec";
import { Footer } from "@/app/sections/footerSec";
import { MemberBenefitsSec } from "@/app/sections/memberBenefitsSec";
import { ProofSec } from "@/app/sections/proofSec";
import { TitleSec } from "@/app/sections/titleSec";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const BecomeAChapterMember = () => {
  const [becomeChapterPageData, setBecomeChapterPageData] = useState<BecomeChapterMemberPage | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [becomeChapterResponse, pageResponse] = await Promise.all([
          client.fetch(becomeChapterPageQuery),
          client.fetch(pageDataQuery)
        ]);
        setBecomeChapterPageData(becomeChapterResponse);
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

  if (!becomeChapterPageData) return <div>No chapter data found</div>;

  if (!pageData) return <div>No page data found</div>;

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} />

      <Logo logoUrl={pageData?.logoUrl || ""} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={becomeChapterPageData?.title || ""} subTitle={becomeChapterPageData?.subtitle || ""} redirectUrl="signup-chapter-member"/> 

      <div className="text-lg text-gray-600 m-16">
        {becomeChapterPageData?.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      <ProofSec title="Membership Proof" bgImg={becomeChapterPageData?.bgBecomeChapterMemberImgUrl || ""} proof1={becomeChapterPageData?.proof1 || ""} proof2={becomeChapterPageData?.proof2 || ""} />
      
      <MemberBenefitsSec events={becomeChapterPageData?.events || ""} prospects={becomeChapterPageData?.prospects} opportunity={becomeChapterPageData?.opportunity || ""} publications={becomeChapterPageData?.publications || ""} />
      
      <div className="mx-16 mb-16 hover:scale-105 transition-all duration-700">
        <ApplyExploreSec bgImg={pageData?.bgImgUrl || ""} displayExplore={false} />
      </div>

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />

    </div>
  )
}

export default BecomeAChapterMember