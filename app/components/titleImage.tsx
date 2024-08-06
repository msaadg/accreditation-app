import Image from "next/image"

export const TitleImage = ({ bgImg, title } : {
  bgImg: string;
  title: string;
}) => {
  return (
    <div className="relative h-full mt-32">
      <img
        src={bgImg}
        alt={title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 m-16 text-5xl font-bold text-white flex flex-col justify-end">
        {title}
      </div>
    </div>
  )
}