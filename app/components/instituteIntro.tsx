import { Heading } from "@/app/components/heading";

export const InstituteIntro = ({ insLogo, bio } : {
  insLogo: string;
  bio: string;
}) => {
  return (
    <div className="m-16">
      <Heading title="Introduction" />
      <div className="grid grid-cols-6 gap-10">
        <div className="w-full">
          <img
            src={insLogo}
            alt="Professional"
            className="h-48 w-48 col-span-1"
          />
        </div>

        <div className="flex flex-col justify-center col-span-5">
          <div className="text-lg text-gray-600 mt-4 mb-2">
            {bio.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
