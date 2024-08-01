import { Heading } from "./heading"

export const AboutUs = ({title, description} : {
  title: string,
  description: string,
}) => {
  return (
    <div className="h-full flex flex-col justify-center">
      <Heading title={title} />
      <div className="text-lg text-gray-600 pb-6">
        {description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
      <button className="bg-customOrange rounded-md text-white text-lg w-32 h-16 transition-all duration-300 hover:bg-black" onClick={() => console.log('Button clicked')}>
        Learn More
      </button>
    </div>
  )
}