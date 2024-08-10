"use client"
import { ContactBar } from "@/app/components/contactBar";
import { NavBar } from "@/app/components/navBar";
import { becomeChapterPageQuery, pageDataQuery } from "@/app/lib/queries";
import { BecomeChapterMemberPage, PageData } from "@/app/lib/types";
import { ApplyExploreSec } from "@/app/sections/applyExploreSec";
import { Footer } from "@/app/sections/footerSec";
import { MemberBenefitsSec } from "@/app/sections/memberBenefitsSec";
import { MembershipProofSec } from "@/app/sections/membershipProofSec";
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

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={becomeChapterPageData?.title || ""} subTitle={becomeChapterPageData?.subtitle || ""} redirectUrl="signup-chapter-member"/> 

      <div className="text-lg text-gray-600 m-16">
        {becomeChapterPageData?.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      <MembershipProofSec bgImg={becomeChapterPageData?.bgBecomeChapterMemberImgUrl || ""} proof1={becomeChapterPageData?.proof1 || ""} proof2={becomeChapterPageData?.proof2 || ""} />
      
      <MemberBenefitsSec events={becomeChapterPageData?.events || ""} prospects={becomeChapterPageData?.prospects} opportunity={becomeChapterPageData?.opportunity || ""} publications={becomeChapterPageData?.publications || ""} />
      
      <div className="mx-16 mb-16 hover:scale-105 transition-all duration-300">
        <ApplyExploreSec bgImg={pageData?.bgImgUrl || ""} displayExplore={false} />
      </div>

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} />

    </div>
  )
}

export default BecomeAChapterMember