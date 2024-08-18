"use client"
import { ContactBar } from "@/app/components/contactBar";
import { NavBar } from "@/app/components/navBar";
import { criteriaEducationalPageQuery, pageDataQuery } from "@/app/lib/queries";
import { CriteriaEducationalPage, PageData } from "@/app/lib/types";
import { AccreditationCriteriaSec } from "@/app/sections/accreditationCriteriaSec";
import { Footer } from "@/app/sections/footerSec";
import { KeyAttributesSec } from "@/app/sections/keyAttributesSec";
import { TitleSec } from "@/app/sections/titleSec";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const CriteriaEducational = () => {
  const [criteriaEducationalPageData, setCriteriaEducationalPageData] = useState<CriteriaEducationalPage | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [criteriaEducationalResponse, pageResponse] = await Promise.all([
          client.fetch(criteriaEducationalPageQuery),
          client.fetch(pageDataQuery)
        ]);
        setCriteriaEducationalPageData(criteriaEducationalResponse);
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

  if (!criteriaEducationalPageData) return <div>No chapter data found</div>;

  if (!pageData) return <div>No page data found</div>;

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={criteriaEducationalPageData?.title || ""} subTitle={criteriaEducationalPageData?.subtitle || ""} /> 

      <div className="text-lg text-gray-600 m-16">
        {criteriaEducationalPageData?.description1.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      <KeyAttributesSec bgImg={criteriaEducationalPageData?.bgCriteriaEducationalImgUrl || ""} attributes={criteriaEducationalPageData?.attributes || []} />

      <AccreditationCriteriaSec standard1={criteriaEducationalPageData?.standard1} standard2={criteriaEducationalPageData?.standard2} standard3={criteriaEducationalPageData?.standard3} standard4={criteriaEducationalPageData?.standard4} standard5={criteriaEducationalPageData?.standard5} standard6={criteriaEducationalPageData?.standard6} standard7={criteriaEducationalPageData?.standard7} standard8={criteriaEducationalPageData?.standard8} standard9={criteriaEducationalPageData?.standard9} desc={criteriaEducationalPageData?.description2} management={criteriaEducationalPageData?.management} progress={criteriaEducationalPageData?.progress} implications={criteriaEducationalPageData?.implications} />
        
      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  );
}

export default CriteriaEducational;