"use client"
import { MemberData, PageData } from "@/app/lib/types";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { ContactBar } from "@/app/components/contactBar";
import { NavBar } from "@/app/components/navBar";
import { TitleSec } from "@/app/sections/titleSec";
import { memberQuery, pageDataQuery } from "@/app/lib/queries";
import { Footer } from "@/app/sections/footerSec";
import { MemberBio } from "@/app/components/memberBio";
import { EducationExperience } from "@/app/components/educationExperience";
import { Exp } from "@/app/components/exp";
import { Logo } from "@/app/components/logo";

const MemberPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [memberData, setMemberData] = useState<MemberData | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [memberResponse, pageResponse] = await Promise.all([
          client.fetch(memberQuery, { slug }),
          client.fetch(pageDataQuery)
        ]);
        setMemberData(memberResponse);
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

  if (!memberData) return <div>No member data found</div>;

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} />

      <Logo logoUrl={pageData?.logoUrl || ""} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title="Chapter Members" subTitle="Become a Chapter Member and start earning now!" /> 
      
      <MemberBio memberImg={memberData?.memberImage || ""} title={memberData?.title} bio={memberData?.bio || ""} profession={memberData?.profession || ""} since={memberData?.since || ""} />

      <EducationExperience education={memberData?.education || ""} exp={memberData?.experience[0]} />

      <Exp experience={memberData?.experience.slice(1)} />

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  );
};

export default MemberPage;