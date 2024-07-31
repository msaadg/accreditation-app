export const AccreditationHelpsSec = ({title, q1, q2, text} : {
  title: string,
  q1: string,
  q2: string,
  text: string
}) => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 px-14 pt-20">
          <div className="font-bold text-5xl text-gray-800 pb-6">
            {title}
          </div>
          <div className="pb-6">
            <div className="w-28 h-1 bg-customOrange"></div>
          </div>
          <div className="pr-12">
            <div className="pt-6 font-semibold text-xl text-gray-800">
              {q1}
            </div>
            <div className="pb-6">
              <div className="max-w-full h-0.5 bg-customOrange"></div>
            </div>
            <div className="pt-6 font-semibold text-xl text-gray-800">
              {q2}
            </div>
            <div className="pb-6">
              <div className="max-w-full h-0.5 bg-customOrange"></div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center my-64 text-5xl text-gray-600 font-semibold">
          {text}
        </div>
      </div>
    </div>
  )
}