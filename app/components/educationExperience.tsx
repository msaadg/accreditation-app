import { Experience } from "../lib/types";

export const EducationExperience = ({ education, exp} : {
  education: string,
  exp: Experience
}) => {
  return (
    <div className="mb-16 p-16 mx-16 bg-gray-100 rounded-2xl">
      <div className="mb-12">
        <div className="text-3xl font-semibold text-gray-800">Education</div>
        <div className="text-lg text-gray-600 mt-4">{education}</div>
      </div>

      <div>
        <div className="text-3xl font-bold text-gray-800">Professional Experience</div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-xl font-semibold text-gray-800">Designation</div>
              <div className="text-lg text-gray-600">{exp.designation}</div>
            </div>
            <div>
              <div className="text-xl font-semibold text-gray-800">Employer</div>
              <div className="text-lg text-gray-600">{exp.employer}</div>
            </div>
            <div className="mt-16">
              <div className="text-xl font-semibold text-gray-800">Industry</div>
              <div className="text-lg text-gray-600">{exp.industry}</div>
            </div>
            <div className="mt-16">
              <div className="text-xl font-semibold text-gray-800">Core Responsibility</div>
              <div className="text-lg text-gray-600">{exp.resp}</div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}