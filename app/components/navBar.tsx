import { useState } from "react";
import { PreviewTopCard } from "./previewTopCard";

export const NavBar = ({ members, professionals, institutes, logoUrl }: {
  members: number,
  professionals: number,
  institutes: number,
  logoUrl: string,
}) => {
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownProfessional, setDropdownProfessional] = useState(false);
  const [dropdownEducation, setDropdownEducation] = useState(false);
  const [dropdownPublications, setDropdownPublications] = useState(false);

  return (
    <div className="fixed top-12 w-full z-50 bg-white shadow-sm px-4">
      <div className="flex justify-between items-center relative">
        {/* Logo Section */}
        <div className="absolute left-16 transform translate-y-1/2 bg-white p-2 rounded-md  border-b-8 border-customOrange">
          <img src={logoUrl} alt="Logo" className="w-32 h-32 object-contain" />
        </div>

        {/* Navigation Section */}
        <div className="flex text-black text-lg justify-end font-bold ml-auto w-full pl-32"> {/* Adjusted padding to ensure logo visibility */}
          <div
            className="flex px-8 py-5 hover:cursor-pointer hover:bg-gray-300 hover:text-customOrange"
            onMouseEnter={() => setDropdownAbout(true)}
            onMouseLeave={() => setDropdownAbout(false)}
          >
            ABOUT
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <rect x="0" fill="none" width="24" height="24" />
              <g>
                <path d="M7 10l5 5 5-5" />
              </g>
            </svg>
            {dropdownAbout && (
              <PreviewTopCard
                title={members}
                text="Chapters members associated from around the world"
                btnText="Apply For Membership"
                secTitle="About"
                links={[
                  {
                    text: "About WSA Council",
                    url: "/about",
                  },
                  {
                    text: "Chapter Members Directory",
                    url: "/chapter-member",
                  },
                  {
                    text: "Become a Chapter Member",
                    url: "/become-a-chapter-member",
                  },
                ]}
              />
            )}
          </div>
          <div
            className="flex px-8 py-5 hover:cursor-pointer hover:bg-gray-300 hover:text-customOrange"
            onMouseEnter={() => setDropdownProfessional(true)}
            onMouseLeave={() => setDropdownProfessional(false)}
          >
            PROFESSIONAL
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <rect x="0" fill="none" width="24" height="24" />
              <g>
                <path d="M7 10l5 5 5-5" />
              </g>
            </svg>
            {dropdownProfessional && (
              <PreviewTopCard
                title={professionals}
                text="Professional accredited"
                btnText="Apply For Accreditation"
                secTitle="Professional Accreditation"
                links={[
                  {
                    text: "Professional Accreditation",
                    url: "/professional-accreditation",
                  },
                  {
                    text: "Search Professionals",
                    url: "/accredited-professionals",
                  },
                  {
                    text: "Accreditation Process",
                    url: "/process-for-professional-accreditation",
                  },
                ]}
              />
            )}
          </div>
          <div
            className="flex px-8 py-5 hover:cursor-pointer hover:bg-gray-300 hover:text-customOrange"
            onMouseEnter={() => setDropdownEducation(true)}
            onMouseLeave={() => setDropdownEducation(false)}
          >
            EDUCATION
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <rect x="0" fill="none" width="24" height="24" />
              <g>
                <path d="M7 10l5 5 5-5" />
              </g>
            </svg>
            {dropdownEducation && (
              <PreviewTopCard
                title={institutes}
                text="Educational Institutes accredited"
                btnText="Apply For Accreditation"
                secTitle="Educational Accreditation"
                links={[
                  {
                    text: "Educational Accreditation",
                    url: "/educational-accreditation",
                  },
                  {
                    text: "Accredited Institutes",
                    url: "/accredited-educational-institutes",
                  },
                  {
                    text: "Accreditation Criteria",
                    url: "/criteria-for-educational-accreditation",
                  },
                  {
                    text: "Accreditation Process",
                    url: "/process-for-educational-accreditation",
                  },
                ]}
              />
            )}
          </div>
          <div
            className="flex px-8 py-5 hover:cursor-pointer hover:bg-gray-300 hover:text-customOrange"
            onMouseEnter={() => setDropdownPublications(true)}
            onMouseLeave={() => setDropdownPublications(false)}
          >
            PUBLICATIONS
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <rect x="0" fill="none" width="24" height="24" />
              <g>
                <path d="M7 10l5 5 5-5" />
              </g>
            </svg>
            {dropdownPublications && (
              <PreviewTopCard
                title="Monthly"
                text="Magazine by WSA Council"
                btnText="Subscribe Newsletter"
                secTitle="Publications"
                links={[
                  {
                    text: "WSA Periodicals",
                    url: "/periodicals",
                  },
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
