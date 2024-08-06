"use client"
import { ContactBar } from "@/app/components/contactBar";
import { NavBar } from "@/app/components/navBar";
import { ChapterMemberPage } from "@/app/lib/types";
import { ApplyExploreSec } from "@/app/sections/applyExploreSec";
import { ChapterMemberPreviewSec } from "@/app/sections/chapterMembersPreviewSec";
import { Footer } from "@/app/sections/footerSec";
import { TitleSec } from "@/app/sections/titleSec";
import axios from "axios";
import { useEffect, useState } from "react";

const ChapterMember = () => {
  const [chapterPageData, setChapterPageData] = useState<ChapterMemberPage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://7lhl2r8p.api.sanity.io/v2024-07-28/data/query/production?query=*%5B_type+%3D%3D+%22chapterMemberPage%22+%26%26+_id+%3D%3D+%228d1186e4-f0e4-4985-bd81-2be4fb506abb%22%5D+%7B%0A++title%2C%0A++subtitle%2C%0A++%22bgImgUrl%22%3A+bgImg-%3EmainImage.asset-%3Eurl%2C%0A++%22bgChapterMemberImgUrl%22%3A+bgChapterMemberImg-%3EmainImage.asset-%3Eurl%2C%0A++bioData-%3E+%7B%0A++++title%2C%0A++++email%2C%0A++++phone%2C%0A++++address%0A++%7D%2C%0A++StatsInfo-%3E+%7B%0A++++members%2C%0A++++professionals%2C%0A++++countries%2C%0A++++institutes%0A++%7D%2C%0A++description%2C%0A++chapterMembers%5B%5D-%3E+%7B%0A++++title%2C%0A++++%22slug%22%3A+slug.current%2C%0A++++%22memberImageUrl%22%3A+memberImage.asset-%3Eurl%2C%0A++++since%2C%0A++++education%2C%0A++%7D%0A%7D%0A');
        setChapterPageData(response.data.result[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <ContactBar email={chapterPageData?.bioData.email || ""} phone={chapterPageData?.bioData.phone || ""} />

      <NavBar members={chapterPageData?.StatsInfo.members || 0} professionals={chapterPageData?.StatsInfo.professionals || 0} institutes={chapterPageData?.StatsInfo.institutes || 0} />

      <TitleSec bgImg={chapterPageData?.bgImgUrl || ""} title={chapterPageData?.title || ""} subTitle={chapterPageData?.subtitle || ""} /> 

      <div className="text-lg text-gray-600 m-16">
        {chapterPageData?.description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      <ChapterMemberPreviewSec members={chapterPageData?.chapterMembers || []} />

      <ApplyExploreSec bgImg={chapterPageData?.bgChapterMemberImgUrl || ""} />

      <Footer email={chapterPageData?.bioData.email || ""} phone={chapterPageData?.bioData.phone || ""} address={chapterPageData?.bioData.address || ""} />

    </div>
  )
}

export default ChapterMember