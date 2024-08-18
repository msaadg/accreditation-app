import { useEffect, useRef, useState } from 'react';
import { Heading } from '../components/heading';

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

const TypesAccreditationsSec = ({education, professional} : {
  education: string;
  professional: string;
}) => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const sections = [
    {
      id: 1,
      title: 'Education Accreditation',
      content: education
    },
    {
      id: 2,
      title: 'Professional Accreditation',
      content: professional
    }
  ];

  return (
    <div className="p-16">
      <Heading title="Types of Accreditations" />
      <div className="transition-all duration-300">
        {sections.map(section => (
          <AccreditationSection
            key={section.id}
            title={section.title}
            content={section.content}
            isOpen={openSection === section.id}
            onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TypesAccreditationsSec;
