import Link from "next/link";
import { InstitutePreview } from "../lib/types";

export const InstituteCard = ({ institute }: { institute: InstitutePreview }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg flex flex-col justify-between h-full hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-start mb-4 gap-8">
        <div className="flex items-center space-x-4">
          <img src={institute.insLogo} alt={institute.title} className="h-32 w-32 object-contain" />
          <div className="font-bold text-xl text-gray-800">{institute.title}</div>
        </div>
        <img src={institute.stamp} alt={`${institute.title} accreditation`} className="h-28 w-28 object-contain" />
      </div>
      <p className="text-gray-600 mb-6">{institute.preview}</p>
      <div className="flex justify-end">
        <Link href={`/accredited-educational-institutes/${institute.slug}`} className="text-customOrange font-bold text-lg">
          View More →
        </Link>
      </div>
    </div>
  );
};
