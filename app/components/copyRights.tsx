export const CopyRights = () => {
  return (
    <div className="bg-blue-gray-900 text-white">
      <div>
        <div className="w-full h-0.5 bg-white"></div>
      </div>

      <div className="px-16 py-6 flex justify-between">
        <div className="">
          Copyright © 2007-2023 Global Standardization & Accreditation Council. All rights reserved.
        </div>
        
        <div className="flex justify-between gap-10">
          <div className="hover:cursor-pointer">
            Privacy Policy
          </div>
          <div className="cursor-pointer">
            Terms of Use
          </div>
        </div>
      </div>
    </div>
  )
}