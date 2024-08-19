export const CertificationCard = ({ stamp, title, benefits } : {
  stamp: string,
  title: string
  benefits: string[]
}) => {
  return (
    <div className="h-max-full bg-white border-4 border-customOrange hover:scale-105 transition-all duration-300">
      <div className="flex justify-center mt-8">
        <img
          src={stamp}
          alt="Silver Badge"
          className="w-44 h-44"
        />
      </div>
      <div className="text-center text-3xl font-semibold text-gray-800 mt-8">{title}</div>
      <div className="p-4 bg-gray-100 mt-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex gap-2 text-gray-600 text-lg p-1">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="#25629B" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <div>
              {benefit}
            </div> 
          </div>
        ))}
      </div>
    </div>
  )
};