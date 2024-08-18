import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const ApplyExploreSec = ({bgImg, displayExplore = true} : {
  bgImg: string
  displayExplore?: boolean
}) => {
  const router = useRouter();

  return (
    <div
      className="relative bg-cover bg-right-bottom p-16"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 text-white">
        <div className="text-5xl font-bold mb-4">
          Want to be a part of GSA Council? Become a Chapter Member and start earning.
        </div>
        <div className="text-lg my-12">
          Become our designated chapter member in your country and help us throughout the accreditation process. If you are eligible and can do this, apply now.
          {
            displayExplore &&
            <>Click on the explore link to learn more about chapter membership.</>
          }
        </div>
        <div className="flex justify-start space-x-4">
          <button className='bg-customOrange rounded-md text-white text-lg w-64 h-16 transition-all duration-300 hover:bg-customBlue px-6' onClick={() => { router.push('signup-chapter-member') }}>
            Apply For Membership
          </button>
          {displayExplore && (
            <button className='bg-customOrange rounded-md text-white text-lg w-max-full h-16 transition-all duration-300 hover:bg-customBlue px-6' onClick={() => { router.push('become-a-chapter-member') }}>
            Explore Chapter Membership
          </button>
          )}
        </div>
      </div>
    </div>
  )
}