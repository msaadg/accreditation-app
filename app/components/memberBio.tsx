export const MemberBio = ({ memberImg, title, bio, profession, since } : {
  memberImg: string;
  title: string;
  bio: string;
  profession: string;
  since: string;
}) => {
  return (
    <div className="grid grid-cols-6 p-16 gap-10">
      <div className="flex justify-center items-center w-full">
        <img
          src={memberImg}
          alt={title}
          className="h-48 w-48 rounded-full object-cover object-top col-span-1"
        />
      </div>

      <div className="flex flex-col justify-center col-span-5">
        <div className="font-bold text-5xl text-gray-800">
          {title}
        </div>
        
        <div className="text-lg text-gray-600 mt-4 mb-2">
          {bio.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>

        <div className="text-lg text-gray-600 mb-4">
          Profession: {profession}
        </div>

        <div className="text-lg text-gray-600">
          Member Since: {since}
        </div>
      </div>
    </div>
  )
}
