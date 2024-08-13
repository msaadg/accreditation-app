import { useState } from "react";
import { ProfilePreview } from "../lib/types";
import { ProfileCard } from "../components/profileCard";

export const AccProfessionalsPreviewSec = ({ professionals } : { professionals: ProfilePreview[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProfessionals, setFilteredProfessionals] = useState(professionals);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredProfessionals(professionals);
    }
    else {
      const matchedProfessionals = professionals.filter(professional => 
        professional.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // const unmatchedMembers = members.filter(member => 
      //   !member.title.toLowerCase().includes(searchTerm.toLowerCase())
      // );
      setFilteredProfessionals(matchedProfessionals);
    }
  }

  return (
    <div className="mx-16 mb-16">
      <div className="font-bold text-5xl text-gray-800 pb-6">
        Featured Accredited Professionals
      </div>

      <div className="flex justify-end">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-2 outline-none text-gray-900 w-64"
          />
          <button 
            className="bg-customOrange p-2 flex items-center justify-center w-14" 
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.35-1.35l4.35 4.35z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        {filteredProfessionals.map((member, index) => (
          <ProfileCard key={index} profile={member} orig="accredited-professionals" />
        ))}
      </div>
    </div>
  );
};
