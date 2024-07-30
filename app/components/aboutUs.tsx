export const AboutUs = ({title, description} : {
  title: string,
  description: string,
}) => {
  return (
    <div className="h-full flex flex-col justify-center p-4">
      <div className="font-bold text-5xl text-gray-800 pb-6">
        {title}
      </div>
      <div className="pb-6">
        <div className="w-28 h-1 bg-customOrange"></div>
      </div>
      <div className="text-lg text-gray-600 pb-6">
        {description}
      </div>
      <button className="bg-customOrange rounded-md text-white text-lg w-32 h-16 transition-all duration-300 hover:bg-black" onClick={() => console.log('Button clicked')}>
        Learn More
      </button>
    </div>
  )
}