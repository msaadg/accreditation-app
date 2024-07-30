import React from "react"

export const AccreditationCard = ({title, description, svgContent} : {
  title: string,
  description: string,
  svgContent: string,
}) => {
  return (
    <div className="flex flex-col justify-between p-10 h-full border-4 border-customOrange bg-white">
      <div className="flex justify-center pb-8">
        <div dangerouslySetInnerHTML={{__html: svgContent}} />
      </div>
      <div className="text-center text-gray-800 pb-8 text-3xl font-medium">
        {title}
      </div>
      <div className="text-center text-lg text-gray-600 pb-8">
        {description}
      </div>
      <div className="flex justify-center">
        <button className="bg-customOrange rounded-md text-white text-lg w-full h-16 transition-all duration-300 hover:bg-black" onClick={() => console.log('Button clicked')}>
          Find Out More
        </button>
      </div>
    </div>
  )
}