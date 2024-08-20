"use client"

import { ContactBar } from "@/app/components/contactBar";
import { NavBar } from "@/app/components/navBar";
import { newsQuery, pageDataQuery } from "@/app/lib/queries";
import { NewsData, PageData } from "@/app/lib/types";
import { Footer } from "@/app/sections/footerSec";
import { TitleSec } from "@/app/sections/titleSec";
import { formatDateNews } from "@/app/utils/formatDateNews";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const News = ({ params } : { params : { slug : string } }) => {
  const { slug } = params;
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsResponse, pageResponse] = await Promise.all([
          client.fetch(newsQuery, { slug }),
          client.fetch(pageDataQuery)
        ]);
        setNewsData(newsResponse);
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

  if (loading) return <div>Loading...</div>;

  if (!newsData) return <div>No news data found</div>;


  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} logoUrl={pageData?.logoUrl || ""} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={newsData?.title || ""} subTitle="Seeking competitive edge? Get accredited today!" />

      <div className="mx-16 mt-16 mb-8 font-semibold">
        {formatDateNews(newsData.publishedAt)}
      </div>

      <div className="mx-16 mb-10 text-lg text-gray-600 pb-6">
        {newsData.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  );
}

export default News;