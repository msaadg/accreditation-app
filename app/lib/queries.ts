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
    "bgImgUrl": bgImg->mainImage.asset->url,
    "bgChapterMemberImgUrl": bgChapterMemberImg->mainImage.asset->url,
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
    description,
    chapterMembers[]-> {
      title,
      "slug": slug.current,
      "memberImageUrl": memberImage.asset->url,
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