"use client"
import { AccreditationCert } from "@/app/components/accreditationCert";
import { ContactBar } from "@/app/components/contactBar";
import { EnquiryForm } from "@/app/components/enquiryForm";
import { InstituteContactInfo } from "@/app/components/instituteContactInfo";
import { InstituteIntro } from "@/app/components/instituteIntro";
import InstituteKeyInfo from "@/app/components/instituteKeyInfo";
import { NavBar } from "@/app/components/navBar";
import { educationalInstituteQuery, pageDataQuery } from "@/app/lib/queries";
import { EducationalInstituteData, PageData } from "@/app/lib/types";
import { AuditReportSection } from "@/app/sections/auditReportSec";
import { Footer } from "@/app/sections/footerSec";
import { TitleSec } from "@/app/sections/titleSec";
import { client } from "@/sanity/lib/client";
import { useEffect, useRef, useState } from "react";

const InstitutePage = ({ params } : { params : { slug : string } }) => {
  const { slug } = params;
  const [instituteData, setInstituteData] = useState<EducationalInstituteData | null>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  const enquiryFormRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [instituteResponse, pageResponse] = await Promise.all([
          client.fetch(educationalInstituteQuery, { slug }),
          client.fetch(pageDataQuery)
        ]);
        setInstituteData(instituteResponse);
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

  if (!instituteData) return <div>No institute data found</div>;

  const scrollToEnquiryForm = () => {
    enquiryFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <ContactBar email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} />

      <NavBar members={pageData?.StatsInfo.members || 0} professionals={pageData?.StatsInfo.professionals || 0} institutes={pageData?.StatsInfo.institutes || 0} logoUrl={pageData?.logoUrl || ""} />

      <TitleSec bgImg={instituteData?.insImageUrl || ""} title={instituteData?.title || ""} subTitle="Seeking competitive edge? Get accredited today!" stampUrl={instituteData?.stampUrl} darken={true} />

      <InstituteIntro insLogo={instituteData?.insLogoUrl || ""} bio={instituteData?.bio} />

      <InstituteKeyInfo language={instituteData?.language} city={instituteData?.city} status={instituteData?.status} studentsCount={instituteData?.studentsCount} format={instituteData?.format} facultyCount={instituteData?.facultyCount} grantedYear={instituteData?.grantedYear} programsOffered={instituteData?.programsOffered} validationPeriod={instituteData?.validationPeriod} educationLevel={instituteData?.educationLevel} program={instituteData?.program} deliveryMethod={instituteData?.deliveryMethod} membershipType={instituteData?.membershipType} deliveryOption={instituteData?.deliveryOption} membershipNumber={instituteData?.membershipNumber} programFormat={instituteData?.programFormat} />

      <InstituteContactInfo schoolWeb={instituteData.schoolWeb} schoolContact={instituteData.schoolContact}
        socialMedia={{
          facebook: instituteData.schoolFacebook,
          instagram: instituteData.schooInsta,
          twitter: instituteData.schoolTwitter,
          linkedin: instituteData.schoolLinkedIn,
          youtube: instituteData.schoolYoutube,
        }}
        scrollToEnquiryForm={scrollToEnquiryForm}
      />

      <AuditReportSection standardMetrics={instituteData?.standardMetrics} />

      <AccreditationCert certUrl={instituteData?.insCertUrl} />

      <div ref={enquiryFormRef}>
        <EnquiryForm schoolTitle={instituteData?.title} />
      </div>

      <Footer email={pageData?.bioData.email || ""} phone={pageData?.bioData.phone || ""} address={pageData?.bioData.address || ""} social={{ facebook: pageData?.facebook || "", insta: pageData?.insta || "", twitter: pageData?.twitter || "", linkedIn: pageData?.linkedIn || "", youtube: pageData?.youtube || "" }} />
    </div>
  )
}

export default InstitutePage;