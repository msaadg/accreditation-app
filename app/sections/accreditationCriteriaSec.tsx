import { useEffect, useRef, useState } from 'react';
import { Standard } from "../lib/types";
import { Heading } from '../components/heading';

export const AccreditationCriteriaSec = ({
  standard1, standard2, standard3, standard4, standard5,
  standard6, standard7, standard8, standard9, desc, management, progress, implications
} : {
  standard1: Standard, standard2: Standard, standard3: Standard, standard4: Standard, 
  standard5: Standard, standard6: Standard, standard7: Standard, standard8: Standard, standard9: Standard
  desc: string, management: string, progress: string, implications: string
}) => {
  const [openStandard, setOpenStandard] = useState<number | null>(null);

  const standards = [
    { id: 1, title: standard1.title, content: standard1.description },
    { id: 2, title: standard2.title, content: standard2.description },
    { id: 3, title: standard3.title, content: standard3.description },
    { id: 4, title: standard4.title, content: standard4.description },
    { id: 5, title: standard5.title, content: standard5.description },
    { id: 6, title: standard6.title, content: standard6.description },
    { id: 7, title: standard7.title, content: standard7.description },
    { id: 8, title: standard8.title, content: standard8.description },
  ];

  return (
    <div className="mx-16 mb-16">
      <Heading title="Accreditation Criteria" />
      <p className="text-lg text-gray-600 mt-2 mb-12">{desc}</p>

      <SectionWithStandards
        title="Creative Leadership and Strategic Management"
        content={management}
        standards={standards.slice(0, 3)}
        openStandard={openStandard}
        setOpenStandard={setOpenStandard}
      />

      <SectionWithStandards
        title="Academic Progress"
        content={progress}
        standards={standards.slice(3, 6)}
        openStandard={openStandard}
        setOpenStandard={setOpenStandard}
      />

      <SectionWithStandards
        title="Intellectual Influence, Participation, and Societal Implications"
        content={implications}
        standards={standards.slice(6, 8)}
        openStandard={openStandard}
        setOpenStandard={setOpenStandard}
      />
    </div>
  );
};

const SectionWithStandards = ({
  title, content, standards, openStandard, setOpenStandard
}: {
  title: string;
  content: string;
  standards: { id: number, title: string, content: string }[];
  openStandard: number | null;
  setOpenStandard: (id: number | null) => void;
}) => {
  return (
    <div className="mb-12">
      <div className="font-bold text-3xl pb-6 text-gray-800">
        {title}
      </div>
      <p className="text-lg text-gray-600 mt-2 mb-8">{content}</p>
      {standards.map((standard) => (
        <AccreditationSection
          key={standard.id}
          title={standard.title}
          content={standard.content}
          isOpen={openStandard === standard.id}
          onClick={() => setOpenStandard(openStandard === standard.id ? null : standard.id)}
        />
      ))}
    </div>
  );
};

const AccreditationSection = ({ title, content, isOpen, onClick } : {
  title: string;
  content: string;
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
    <div className="mt-6 mb-2">
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
          {content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
