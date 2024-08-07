import exp from "constants"
import { Experience } from "../lib/types"

export const Exp = ({ experience } : {
  experience: Experience[]
}) => {
  return (
    <div>
      {experience.map((exp) => (
        <div key={exp._key} className="mb-16 mx-16 bg-gray-100 rounded-2xl p-16">
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
      ))}
    </div>
  )
}