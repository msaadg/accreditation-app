import { useState } from "react";
import { ChapterMemberPreview } from "../lib/types";
import Link from 'next/link';

const MemberCard = ({ member } : { member: ChapterMemberPreview }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={member.memberImageUrl} alt={member.title} className="w-full h-full object-cover transition duration-500 ease-in-out transform group-hover:scale-105" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 group-hover:hidden transition duration-500 ease-in-out">
        <div className="text-xl font-bold text-center">{member.title}</div>
      </div>
      <div className={`absolute inset-0 bg-black bg-opacity-75 text-white p-4 flex flex-col justify-center items-center text-center transition duration-500 ease-in-out transform ${isHovered ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'scale-105' : 'scale-100'}`}>
        <div className="text-xl font-bold mb-2">{member.title}</div>
        <div className="text-sm mb-2">{member.education}</div>
        <div className="text-sm mb-2">Member Since: {member.since}</div>
        <Link href={`/members/${member.slug}`} className="text-customOrange mt-4">View Profile</Link>
      </div>
    </div>
  );
};

const ChapterMemberPreviewSec = ({ members } : { members: ChapterMemberPreview[] }) => {
  return (
    <div className="p-16">
      <div className="font-bold text-5xl text-gray-800 pb-6">
        Our Valued Chapter Members
      </div>

      <div className="flex justify-end">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow p-2 outline-none text-gray-900 w-64"
          />
          <button className="bg-customOrange p-2 flex items-center justify-center w-14">
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
        {members.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export { ChapterMemberPreviewSec };
