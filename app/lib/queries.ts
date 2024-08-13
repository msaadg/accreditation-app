import { groq } from "next-sanity";

export const pageDataQuery = groq`
  *[_type == "pageData"][0]{
    "bgImgUrl": bgImg->mainImage.asset->url,
    bioData-> {
      title,
      email,
      phone,
      address
    },
    StatsInfo-> {
      members,
      professionals,
      countries,
      institutes
    },
  }
`;

export const chapterPageQuery = groq`
  *[_type == "chapterMemberPage" && slug.current == "chapter-members"][0]{
    title,
    subtitle,
    "bgChapterMemberImgUrl": bgChapterMemberImg->mainImage.asset->url,
    description,
    chapterMembers[]-> {
      title,
      "slug": slug.current,
      "imageUrl": memberImage.asset->url,
      since,
      education,
    }
  }
`;

export const memberQuery = groq`
  *[_type == "chapterMember" && slug.current == $slug][0]{
    bio,
    education,
    experience[]{
      _key,
      designation,
      employer,
      industry,
      resp
    },
    "memberImage": memberImage.asset->url,
    profession,
    since,
    "slug": slug.current,
    title
  }
`;

export const aboutPageQuery = groq`
  *[_type == "aboutPage" && slug.current == "about"][0]{
    title,
    subtitle,
    mission,
    vision,
    description,
    educationAccreditation,
    professionalAccreditation,
    chapterMembers {
      title,
      description,
      "chapterImageUrl": chapterImage.asset->url,
    }
  }
`;

export const landingPageQuery = groq`
  *[_type == "landingPage" && slug.current == "home"][0]{
    Slider[]->{
      title,
      description,
      "imageUrl": image900X1920.asset->url
    },
    aboutUs {
      title,
      description,
      accreditations[]->{
        title,
        description,
      },
    },
    chapterMembers {
      title,
      description,
      mainImage {
        "imageUrl": asset->url,
        alt
      },
    },
    events[]->{
      title,
      startDate,
    },
    howAccreditationHelps,
    news[]->{
      publishedAt,
      title,
      preview,
      "imageUrl": mainImage.asset->url
    },
  }
`;

export const becomeChapterPageQuery = groq`
  *[_type == "becomeChapterMemberPage" && slug.current == "become-a-chapter-member"][0]{
    description,
    endingDescription,
    endingTitle,
    events,
    opportunity,
    proof1,
    proof2,
    prospects,
    publications,
    subtitle,
    title,
    "bgBecomeChapterMemberImgUrl": bgBecomeChapterMemberImg->mainImage.asset->url,
  }
`;

export const signupPageQuery = groq`
  *[_type == "signupPage" && slug.current == "signup-chapter-member"][0]{
    subtitle,
    title,
  }
`;

export const professionalAccreditationPageQuery = groq`
  *[_type == "professionalAccreditationPage" && slug.current == "professional-accreditation"][0]{
    title,
    subtitle,
    description,
    credibility,
    proof1,
    proof2,
    prospects,
    recognition,
    opportunities,
    reputation,
    resources,
    "bgProfessionalAccreditationImgUrl": bgProfessionalAccreditationImg->mainImage.asset->url,
    "silver": silver->{
      title,
      "stamp": stamp->mainImage.asset->url,
      "slug": slug.current,
      "benefits": cardBenefits
    },
    "gold": gold->{
      title,
      "stamp": stamp->mainImage.asset->url,
      "slug": slug.current,
      "benefits": cardBenefits
    },
    "platinum": platinum->{
      title,
      "stamp": stamp->mainImage.asset->url,
      "slug": slug.current,
      "benefits": cardBenefits
    },
    "diamond": diamond->{
      title,
      "stamp": stamp->mainImage.asset->url,
      "slug": slug.current,
      "benefits": cardBenefits
    }
  }
`;

export const processProfessionalPageQuery = groq`
  *[_type == "processProfessionalPage" && slug.current == "process-for-professional-accreditation"][0]{
    title,
    subtitle,
    description,
    "bgProcessProfessionalImgUrl": bgProcessProfessionalImg->mainImage.asset->url,
  }
`;

export const accreditedProfessionalsPageQuery = groq`
  *[_type == "accreditedProfessionalsPage" && slug.current == "accredited-professionals"][0]{
    title,
    subtitle,
    "bgAccreditedProfessionalsImgUrl": bgAccreditedProfessionalsImg->mainImage.asset->url,
    description,
    accreditedProfessionals[]-> {
      title,
      "slug": slug.current,
      "imageUrl": professionalImage.asset->url,
      since,
      education,
    }
  }
`;

export const professionalQuery = groq`
  *[_type == "accreditedProfessional" && slug.current == $slug][0] {
    bio,
    "businessCardUrl": businessCard.asset->url,
    "certificateUrl": certificate.asset->url,
    city,
    education,
    format,
    method,
    "professionalImageUrl": professionalImage.asset->url,
    registration,
    since,
    "slug": slug.current,
    "stampUrl": stamp->mainImage.asset->url,
    status,
    title,
    university
  }
`;