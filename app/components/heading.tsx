export const Heading = ({ title } : {
  title: string
}) => {
  return (
    <>
      <div className="font-bold text-5xl text-gray-800 pb-6">
        {title}
      </div>
      <div className="pb-6">
        <div className="w-28 h-1 bg-customOrange"></div>
      </div>
    </>
  )
}