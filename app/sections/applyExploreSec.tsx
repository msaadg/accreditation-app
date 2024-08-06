import Link from 'next/link';

export const ApplyExploreSec = ({bgImg} : {
  bgImg: string
}) => {
  return (
    <div
      className="relative bg-cover bg-center p-16"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 text-white">
        <h2 className="text-5xl font-bold mb-4">
          Want to be a part of GSA Council? Become a Chapter Member and start earning.
        </h2>
        <p className="text-lg my-12">
          Become our designated chapter member in your country and help us throughout the accreditation process. If you are eligible and can do this, apply now. Click on the explore link to learn more about chapter membership.
        </p>
        <div className="flex justify-start space-x-4">
          <button className='bg-customOrange rounded-md text-white text-lg w-64 h-16 transition-all duration-300 hover:bg-blue-gray-900 px-6' onClick={() => console.log('Button clicked')}>
            Apply For Membership
          </button>
          <button className='bg-customOrange rounded-md text-white text-lg w-max-full h-16 transition-all duration-300 hover:bg-blue-gray-900 px-6' onClick={() => console.log('Button clicked')}>
            Explore Chapter Membership
          </button>
        </div>
      </div>
    </div>
  )
}