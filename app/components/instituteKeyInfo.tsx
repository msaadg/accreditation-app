import { Heading } from "@/app/components/heading";
import { EducationalInstituteData } from "../lib/types";

interface InstituteKeyInfoProps {
  language: string;
  city: string;
  status: string;
  studentsCount: string;
  format: string;
  facultyCount: string;
  grantedYear: number;
  programsOffered: string;
  validationPeriod: string;
  educationLevel: string;
  program: string;
  deliveryMethod: string;
  membershipType: string;
  deliveryOption: string;
  membershipNumber: string;
  programFormat: string;
}

const InstituteKeyInfo: React.FC<InstituteKeyInfoProps> = ({
  language,
  city,
  status,
  studentsCount,
  format,
  facultyCount,
  grantedYear,
  programsOffered,
  validationPeriod,
  educationLevel,
  program,
  deliveryMethod,
  membershipType,
  deliveryOption,
  membershipNumber,
  programFormat,
}) => {
  return (
    <div className="m-16">
      <Heading title="Key Information" />
      
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Language of Instructions</div>
          <div className="mt-1 text-gray-600">{language}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">City</div>
          <div className="mt-1 text-gray-600">{city}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Accreditation Status</div>
          <div className="mt-1 text-gray-600">{status}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Number of Students</div>
          <div className="mt-1 text-gray-600">{studentsCount}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Format</div>
          <div className="mt-1 text-gray-600">{format}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Number of Faculty Members</div>
          <div className="mt-1 text-gray-600">{facultyCount}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Membership Granted in</div>
          <div className="mt-1 text-gray-600">{grantedYear}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Total Program(s) Offered</div>
          <div className="mt-1 text-gray-600">{programsOffered}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Membership Validation Period</div>
          <div className="mt-1 text-gray-600">{validationPeriod}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Education Level(s) Offered</div>
          <div className="mt-1 text-gray-600">{educationLevel}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Program</div>
          <div className="mt-1 text-gray-600">{program}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Program Delivery Method</div>
          <div className="mt-1 text-gray-600">{deliveryMethod}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Membership Type</div>
          <div className="mt-1 text-gray-600">{membershipType}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Program Delivery Option(s)</div>
          <div className="mt-1 text-gray-600">{deliveryOption}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Membership #</div>
          <div className="mt-1 text-gray-600">{membershipNumber}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Program Format(s)</div>
          <div className="mt-1 text-gray-600">{programFormat}</div>
        </div>
      </div>
    </div>
  );
};

export default InstituteKeyInfo;
