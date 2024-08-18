export const TitleImage = ({ bgImg, title, stampUrl, darken } : {
  bgImg: string;
  title: string;
  stampUrl?: string;
  darken?: boolean;
}) => {
  return (
    <div className="relative h-full mt-24">
      <img
        src={bgImg}
        alt={title}
        className="h-full w-full object-cover"
      />
      {darken && (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      )}
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
