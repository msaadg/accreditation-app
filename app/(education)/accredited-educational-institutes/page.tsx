"use client"
import { ContactBar } from "@/app/components/contactBar";
import { NavBar } from "@/app/components/navBar";
import { educationalInstitutesPageQuery, pageDataQuery } from "@/app/lib/queries";
import { educationalInstitutesPage, PageData } from "@/app/lib/types";
import { AccInstitutesPreviewSec } from "@/app/sections/accInstitutesPreviewSec";
import { ApplyAccreditationSec } from "@/app/sections/applyAccreditationSec";
import { Footer } from "@/app/sections/footerSec";
import { TitleSec } from "@/app/sections/titleSec";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const AccreditedEducationalInstitutes = () => {
  const [institutesPageData, setInstitutesPageData] = useState<educationalInstitutesPage | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [institutesResponse, pageResponse] = await Promise.all([
          client.fetch(educationalInstitutesPageQuery),
          client.fetch(pageDataQuery)
        ]);
        setInstitutesPageData(institutesResponse);
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

  if (!institutesPageData) return <div>No chapter data found</div>;

  if (!pageData) return <div>No page data found</div>;

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={institutesPageData?.title || ""} subTitle={institutesPageData?.subtitle || ""} /> 

      <div className="text-lg text-gray-600 m-16">
        {institutesPageData?.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      <AccInstitutesPreviewSec educationalInstitutes={institutesPageData.educationalInstitutes} />

      <ApplyAccreditationSec bgImg={pageData?.bgImgUrl || ""} />

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  )
}

export default AccreditedEducationalInstitutes