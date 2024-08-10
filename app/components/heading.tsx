export const Heading = ({ title, color } : {
  title: string;
  color?: string;
}) => {
  return (
    <>
      <div className={`font-bold text-5xl pb-6 ${color? `text-${color}` : 'text-gray-800'}`}>
        {title}
      </div>
      <div className="pb-6">
        <div className="w-28 h-1 bg-customOrange"></div>
      </div>
    </>
  )
}