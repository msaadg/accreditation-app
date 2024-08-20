"use client"
import { useEffect, useState } from "react";
import { PageData } from "../lib/types";
import { client } from "@/sanity/lib/client";
import { pageDataQuery } from "../lib/queries";
import { ContactBar } from "../components/contactBar";
import { NavBar } from "../components/navBar";
import { TitleSec } from "../sections/titleSec";
import { Footer } from "../sections/footerSec";
import { GetInTouch } from "../components/getInTouch";

const Schedule = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageResponse = await client.fetch(pageDataQuery)
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

  if (!pageData) return <div>No page data found</div>;


  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title="Contact Global Accreditation & Standardization Council" subTitle="Seeking competitive edge? Get accredited today!" />

      <div className="mt-16 mb-64 flex justify-center text-6xl w-full h-96 font-bold">
        Schedule
      </div>

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  )
}

export default Schedule;