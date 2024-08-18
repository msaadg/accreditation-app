import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RegisterCardTop } from "../components/registerCardTop";

export const ApplyAccreditationSec = ({ bgImg }: { bgImg: string }) => {
  const [showRegisterCard, setShowRegisterCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleRegisterCard = () => {
    if (showRegisterCard) {
      setIsVisible(false);
      setTimeout(() => setShowRegisterCard(false), 300); // Match duration with the transition
    } else {
      setShowRegisterCard(true);
      setTimeout(() => setIsVisible(true), 10); // Slight delay to trigger transition
    }
  };

  return (
    <div className="m-16">
      <div
        className="relative bg-cover bg-right-bottom p-16 hover:scale-105 transition-all duration-700"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 text-white">
          <div className="text-5xl font-bold mb-4">
            Want to get Accredited?
          </div>
          <div className="text-lg my-12">
            GSA Council is committed to providing world-class accreditation services to educational institutes worldwide. Apply for accreditation, become a part of the GSA Council education network, and enjoy global recognition.
          </div>
          <div className="flex justify-start space-x-4">
            <button
              className="bg-customOrange rounded-md text-white text-lg w-64 h-16 transition-all duration-300 hover:bg-customBlue px-6"
              onClick={toggleRegisterCard}
            >
              Apply For Accreditation
            </button>
          </div>
        </div>
      </div>
      {showRegisterCard && (
        <div className="fixed top-28 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className={`transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <RegisterCardTop onClose={toggleRegisterCard} />
          </div>
        </div>
      )}
    </div>
    
  );
};
