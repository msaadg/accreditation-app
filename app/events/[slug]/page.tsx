"use client"
import { ContactBar } from "@/app/components/contactBar";
import { Logo } from "@/app/components/logo";
import { NavBar } from "@/app/components/navBar";
import { eventQuery, pageDataQuery } from "@/app/lib/queries";
import { EventData, PageData } from "@/app/lib/types";
import { Footer } from "@/app/sections/footerSec";
import { TitleSec } from "@/app/sections/titleSec";
import { formatDateEvents } from "@/app/utils/formatDateEvents";
import { formatEventTime } from "@/app/utils/formatEventTime";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const Events = ({ params } : { params : { slug : string } }) => {
  const { slug } = params;
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventResponse, pageResponse] = await Promise.all([
          client.fetch(eventQuery, { slug }),
          client.fetch(pageDataQuery)
        ]);
        setEventData(eventResponse);
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

  if (!eventData) return <div>No event data found</div>;

  const renderWithBold = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/);
    return parts.map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} />

      <Logo logoUrl={pageData?.logoUrl || ""} />

      <TitleSec bgImg={pageData?.bgImgUrl || ""} title={eventData?.title || ""} subTitle="Seeking competitive edge? Get accredited today!" />

      <div className="m-16 text-lg text-gray-600 grid grid-cols-3 gap-32">
        <div className="col-span-2">
          {eventData?.description.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {renderWithBold(paragraph)}
            </p>
          ))}
        </div>

        <div className="col-span-1 max-h-full max-w-full bg-gray-100 p-6 border-t-4 border-customBlue">
          <div className="text-2xl font-extrabold text-black mb-2">Event Details</div>
          <div className="flex gap-4 text-base mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#25629B" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            {formatDateEvents(eventData.startDate)}
          </div>
          <div className="flex gap-4 text-base mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#25629B" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {formatEventTime(eventData.startDate, eventData.endDate)}
          </div>
          <div className="flex gap-4 text-base mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#25629B" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

            {eventData.location}
          </div>
        </div>
      </div>
      
      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />

    </div>
  );
}

export default Events;