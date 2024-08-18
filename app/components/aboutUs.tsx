import { useRouter } from "next/navigation"
import { Heading } from "./heading"

export const AboutUs = ({title, description, chapter=false} : {
  title: string,
  description: string,
  chapter?: boolean
}) => {
  const router = useRouter();

  return (
    <div className="h-full flex flex-col justify-center">
      <Heading title={title} />
      <div className="text-lg text-gray-600 pb-6">
        {description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
      <button className="bg-customOrange rounded-md text-white text-lg w-32 h-16 transition-all duration-300 hover:bg-black" onClick={() => chapter? router.push('chapter-member') : router.push('/about')}>
        Learn More
      </button>
    </div>
  )
}