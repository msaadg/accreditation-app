"use client"
import { ContactBar } from "@/app/components/contactBar";
import { Heading } from "@/app/components/heading";
import { NavBar } from "@/app/components/navBar";
import { pageDataQuery, processProfessionalPageQuery } from "@/app/lib/queries";
import { PageData, ProcessProfessionalPage } from "@/app/lib/types";
import { Footer } from "@/app/sections/footerSec";
import { TitleSec } from "@/app/sections/titleSec";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const ProcessForProfessionalAccreditation = () => {
  const [processProfessionalPageData, setProcessProfessionalPageData] = useState<ProcessProfessionalPage | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [processProfessionalResponse, pageResponse] = await Promise.all([
          client.fetch(processProfessionalPageQuery),
          client.fetch(pageDataQuery)
        ]);
        setProcessProfessionalPageData(processProfessionalResponse);
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

  if (!processProfessionalPageData) return <div>No chapter data found</div>;

  if (!pageData) return <div>No page data found</div>;

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} logoUrl={pageData?.logoUrl || ""} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={processProfessionalPageData?.title || ""} subTitle={processProfessionalPageData?.subtitle || ""} /> 

      <div className="mx-16 mt-16">
        <Heading title="Steps of Accreditation Process for Professionals" />
      </div>

      <div className="text-lg text-gray-600 mx-16 my-8">
        {processProfessionalPageData?.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
        
      <div className="mx-24 my-16">
        <img
          src={processProfessionalPageData?.bgProcessProfessionalImgUrl || ""}
          alt="Explore the benefits of chapter membership"
          className="w-full h-full"
        />
      </div>

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  )
}

export default ProcessForProfessionalAccreditation