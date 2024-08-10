import Image from 'next/image';
import { ChapterSignupBox } from "../components/chapterSignupBox"
import { useRouter } from 'next/navigation';

export const SignupSec = ({ bgImgUrl } : { bgImgUrl: string}) => {
  const router = useRouter();

  return (
    <div className="p-16 grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <ChapterSignupBox />
      </div>

      <div className="col-span-1">
        <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden">
          <img
            src={bgImgUrl}
            alt="Explore the benefits of chapter membership"
            className="w-full h-full object-cover object-[right_bottom]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
            <div className="bg-customOrange p-4 rounded-full mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-4">
              Explore the benefits of chapter membership
            </h3>
            <button className="flex bg-customOrange hover:bg-blue-gray-900 transition-all duration-300 text-white text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]" onClick={() => {router.push('become-a-chapter-member')}}>
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}