import { useState, useRef, useEffect } from "react";
import { Heading } from "../components/heading";

export const AuditReportSection = ({ standardMetrics }: { standardMetrics: number[] }) => {
  const [openStandard, setOpenStandard] = useState<number | null>(null);

  const sections = [
    {
      sectionTitle: "Creative Leadership and Strategic Management",
      standards: [
        {
          id: 1,
          title: "Standard 1: Strategic Planning",
          categories: [
            "Maintenance of the Strategic Plan",
            "Monitoring of the Strategic Plan",
            "Innovation",
            "Societal Impact"
          ],
        },
        {
          id: 2,
          title: "Standard 2: Physical, Virtual, and Financial Resources",
          categories: ["Physical Resources", "Virtual Resources", "Financial Resources"]
        },
        {
          id: 3,
          title: "Standard 3: Faculty and Professional Staff Resources",
          categories: ["Faculty Sufficiency", "Faculty Qualifications", "Professional Staff Sufficiency", "Faculty and Professional Staff Development"]
        },
      ]
    },
    {
      sectionTitle: "Academic Progress",
      standards: [
        {
          id: 4,
          title: "Standard 4: Curriculum",
          categories: ["Curriculum Content", "Curriculum Management", "Innovation, Experiential Learning, Lifelong Learning, and Societal Impact", "Engagement"]
        },
        {
          id: 5,
          title: "Standard 5: Assurance Of Learning Standard",
          categories: ["Assurance of Learning Processes", "Degree Equivalency", "Stackable Microlearning Credentials", "Non-Degree Executive Education"]
        },
        {
          id: 6,
          title: "Standard 6: Learner Progression",
          categories: ["Admissions, Progression, Degree Completion, and Career Development Support", "Academic Program Quality and Post-Graduation Success"]
        },
        {
          id: 7,
          title: "Standard 7: Teaching Effectiveness And Impact",
          categories: ["Teaching Effectiveness", "Support for Teaching Effectiveness", "Teaching Impact"]
        },
      ]
    },
    {
      sectionTitle: "Intellectual Influence, Participation, and Societal Implications",
      standards: [
        {
          id: 8,
          title: "Standard 8: Impact Of Scholarship",
          categories: ["The Production of High Quality, Impactful Intellectual Contributions", "Collaboration with Stakeholders"]
        },
        {
          id: 9,
          title: "Standard 9: Engagement And Societal Impact",
          categories: ["Positive Societal Impact"]
        },
      ]
    }
  ];

  return (
    <div className="mx-16 mb-16">
      <Heading title="Audit Report" />

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-12">
          <div className="font-bold text-3xl pb-4 text-gray-800">{section.sectionTitle}</div>
          {section.standards.map((standard, index) => (
            <AuditStandardSection
              key={standard.id}
              title={standard.title}
              categories={standard.categories}
              isOpen={openStandard === standard.id}
              onClick={() => setOpenStandard(openStandard === standard.id ? null : standard.id)}
              rating={standardMetrics[standard.id - 1]}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const AuditStandardSection = ({
  title,
  categories,
  isOpen,
  onClick,
  rating
}: {
  title: string;
  categories: string[];
  isOpen: boolean;
  onClick: () => void;
  rating: number;
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

  const renderStars = (rating: number) => {
    const filledStars = Math.floor(rating);
    const emptyStars = 5 - filledStars;

    return (
      <>
        {Array.from({ length: filledStars }, (_, i) => (
          <svg key={`filled-${i}`} xmlns="http://www.w3.org/2000/svg" fill="#dd9b2b" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
        ))}
        {Array.from({ length: emptyStars }, (_, i) => (
          <svg key={`empty-${i}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#dd9b2b" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
        ))}
      </>
    );
  };

  return (
    <div className="mt-6 mb-2">
      <button
        className="w-full flex justify-between bg-gray-100 hover:bg-gray-200 mb-2"
        onClick={onClick}
      >
        <div className="p-4 text-lg text-gray-800">{title}</div>
        <div className="flex items-center">
          <div className="flex p-4">{renderStars(rating)}</div>
          <div className="text-xl w-24 h-16 flex flex-col justify-center bg-customOrange">{isOpen ? '▲' : '▼'}</div>
        </div>
      </button>
      
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`overflow-hidden transition-max-height duration-700 ease-in-out`}
      >
        <div className="grid grid-cols-2 gap-6 p-6 bg-gray-200">
          {categories.map((category, index) => (
            <div key={index} className="flex justify-between items-center bg-white p-4 rounded shadow-sm gap-16">
              <div className="text-gray-800">{category}</div>
              <div className="flex">{renderStars(rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
