export const TitleImage = ({ bgImg, title, stampUrl } : {
  bgImg: string;
  title: string;
  stampUrl?: string;
}) => {
  return (
    <div className="relative h-full mt-24">
      <img
        src={bgImg}
        alt={title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 m-16 text-5xl font-bold text-white flex justify-between items-end">
        <div>{title}</div>
        {stampUrl && (
          <img
            src={stampUrl}
            alt={title}
            className="h-52 w-52 object-cover"
          />
        )}
      </div>
    </div>
  )
}
