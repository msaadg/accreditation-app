import { Heading } from "../components/heading"

export const AccreditationHelpsSec = ({title, q1, q2, text} : {
  title: string,
  q1: string,
  q2: string,
  text: string
}) => {
  return (
    <div>
      <div className="grid grid-cols-2 px-16">
        <div className="col-span-1 pt-20">
          <Heading title={title} />
          <div className="pr-12">
            <div className="pt-6 font-semibold text-xl text-gray-800 hover:cursor-pointer">
              {q1}
            </div>
            <div className="pb-6">
              <div className="max-w-xl h-0.5 bg-customOrange"></div>
            </div>
            <div className="pt-6 font-semibold text-xl text-gray-800 hover:cursor-pointer">
              {q2}
            </div>
            <div className="pb-6">
              <div className="max-w-xl h-0.5 bg-customOrange"></div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center my-52 text-5xl text-gray-600 font-semibold">
          {text}
        </div>
      </div>
    </div>
  )
}