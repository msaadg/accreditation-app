import { useEffect, useRef, useState } from "react";
import { Heading } from "../components/heading"
import { InfoBox } from "../components/infoBox";

const InfoBoxSection = ({ title, children, isOpen, onClick } : {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="mt-4 mb-2">
      <button
        className="w-full flex justify-between bg-gray-100 hover:bg-gray-200 mb-2"
        onClick={onClick}
      >
        <div className="p-4 text-lg text-gray-800">{title}</div>
        <div className="text-xl w-24 h-16 flex flex-col justify-center bg-customOrange">{isOpen ? '▲' : '▼'}</div>
      </button>
      
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`overflow-hidden transition-max-height duration-700 ease-in-out`}
      >
        <div className="text-lg text-gray-600 p-6 bg-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export const AccreditationPerksEdSec = ({ funds, faculty, value, businesses, allocation, edge, study, markets } : {
  funds: string;
  faculty: string;
  value: string;
  businesses: string;
  allocation: string;
  edge: string;
  study: string;
  markets: string;
}) => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const sections = [
    {
      id: 1,
      title: 'To the Institute',
      content: (
        <>
          <InfoBox title="Increased Opportunities to Obtain Funds" desc={funds} />
          <InfoBox title="Qualified Faculty" desc={faculty} />
          <InfoBox title="Increase in Brand Value" desc={value} />
          <InfoBox title="Quality of New Teachers and Attracts More Resourceful Businesses" desc={businesses} />
          <InfoBox title="Refines the Methods of Strategic Planning and Resource Allocation" desc={allocation} />
        </>
      )
    },
    {
      id: 2,
      title: 'To the Students',
      content: (
        <>
          <InfoBox title="Competitive edge" desc={edge} />
          <InfoBox title="Academic Opportunities for Advanced Study" desc={study} />
          <InfoBox title="Improves access to worldwide job markets" desc={markets} />
        </>
      )
    }
  ];

  return (
    <div className="p-16">
      <Heading title="Perks of Accreditation" />
      <div className="transition-all duration-300">
        {sections.map(section => (
          <InfoBoxSection
            key={section.id}
            title={section.title}
            isOpen={openSection === section.id}
            onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
          >
            {section.content}
          </InfoBoxSection>
        ))}
      </div>
    </div>
  );
}