import { useState } from "react";
import { RegisterCardTop } from "./registerCardTop";

export const SubTitleBtn = ({ subTitle } : { subTitle: string }) => {
  const [showRegisterCard, setShowRegisterCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    <div className='flex justify-between bg-customOrange px-16'>
      <div className='text-white text-2xl font-semibold flex flex-col justify-center'>
        {subTitle}
      </div>
      <div className='py-5'>
        <button className='bg-blue-gray-900 rounded-md text-white text-lg w-52 h-16 transition-all duration-300 hover:bg-white hover:text-black' onClick={toggleRegisterCard}>
          Apply Now
        </button>

        {showRegisterCard && (
          <div className="fixed top-32 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className={`transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <RegisterCardTop onClose={toggleRegisterCard} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
