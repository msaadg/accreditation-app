import Link from "next/link";
import { useState } from "react";
import { ProfilePreview } from "../lib/types";

export const ProfileCard = ({ profile, orig } : {
  profile: ProfilePreview,
  orig: string
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={profile.imageUrl} alt={profile.title} className="w-full h-full object-cover transition duration-500 ease-in-out transform group-hover:scale-105" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 group-hover:hidden transition duration-500 ease-in-out">
        <div className="text-xl font-bold text-center">{profile.title}</div>
      </div>
      <div className={`absolute inset-0 bg-black bg-opacity-75 text-white p-4 flex flex-col justify-center items-center text-center transition duration-500 ease-in-out transform ${isHovered ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'scale-105' : 'scale-100'}`}>
        <div className="text-xl font-bold mb-2">{profile.title}</div>
        <div className="text-sm mb-2">{profile.education}</div>
        <div className="text-sm mb-2">Member Since: {profile.since}</div>
        <Link href={`/${orig}/${profile.slug}`} className="text-customOrange mt-4">View Profile</Link>
      </div>
    </div>
  );
};
