import { useRouter } from "next/navigation";
import { useState } from "react";
import { RegisterCardTop } from "../components/registerCardTop";

export const ApplyExplore2ndSec = ({ bgImgUrl } : {
  bgImgUrl: string;
}) => {
  const [showRegisterCard, setShowRegisterCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const toggleRegisterCard = () => {
    if (showRegisterCard) {
      setIsVisible(false);
      setTimeout(() => setShowRegisterCard(false), 300); // duration should match the transition duration
    } else {
      setShowRegisterCard(true);
      setTimeout(() => setIsVisible(true), 10);  // slight delay to trigger transition
    }
  };

  return (
    <div className="flex gap-6 mx-16 mb-16">
      <div className="relative w-full h-96 overflow-hidden hover:scale-105 transition-all duration-300">
        <img
          src={bgImgUrl}
          alt="Explore the benefits of chapter membership"
          className="w-full h-full object-cover object-[right_bottom]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-32">
          <div className="bg-customOrange p-4 rounded-full mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>

          <h3 className="text-xl font-bold mb-10">
            Apply for Accreditation now and improve your industry ranking
          </h3>
          <button className="flex bg-customOrange hover:bg-customBlue transition-all duration-300 text-white text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]" onClick={() => {toggleRegisterCard()}}>
            Apply Now
          </button>
        </div>
      </div>

      {showRegisterCard && (
        <div className="fixed top-28 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className={`transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <RegisterCardTop onClose={toggleRegisterCard} />
          </div>
        </div>
      )}

      <div className="relative w-full h-96 shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
        <img
          src={bgImgUrl}
          alt="Explore the benefits of chapter membership"
          className="w-full h-full object-cover object-[right_bottom]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-32">
          <div className="bg-customOrange p-4 rounded-full mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>

          <h3 className="text-xl font-bold mb-10">
            Explore the process of accreditation to better understand accreditation requirements
          </h3>
          <button className="flex bg-customOrange hover:bg-customBlue transition-all duration-300 text-white text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]" onClick={() => {router.push('process-for-professional-accreditation')}}>
            Explore Now
          </button>
        </div>
      </div>
    </div>
  )
}