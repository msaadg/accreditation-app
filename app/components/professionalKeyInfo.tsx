import { Heading } from "@/app/components/heading";

interface KeyInformationProps {
  name: string;
  university: string;
  registration: string;
  city: string;
  status: string;
  education: string;
  since: string;
  format: string;
  method: string;
}

const ProfessionalKeyInfo: React.FC<KeyInformationProps> = ({
  name,
  university,
  registration,
  city,
  status,
  education,
  since,
  format,
  method,
}) => {
  return (
    <div className="m-16">
      <Heading title="Key Information" />
      
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Name</div>
          <div className="mt-1 text-gray-600">{name}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">University</div>
          <div className="mt-1 text-gray-600">{university}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Registration #</div>
          <div className="mt-1 text-gray-600">{registration}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Campus City</div>
          <div className="mt-1 text-gray-600">{city}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Accreditation Status</div>
          <div className="mt-1 text-gray-600">{status}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Highest Education Level</div>
          <div className="mt-1 text-gray-600">{education}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Membership Granted in</div>
          <div className="mt-1 text-gray-600">{since}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500">
          <div className="font-bold text-gray-800">Program Format</div>
          <div className="mt-1 text-gray-600">{format}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded hover:scale-105 transition-all duration-500 col-div-2">
          <div className="font-bold text-gray-800">Program Delivery Method</div>
          <div className="mt-1 text-gray-600">{method}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalKeyInfo;
