import { useState } from "react";
import { RegisterCardTop } from "../components/registerCardTop"

export const GetAccreditedSec = ({bgImg, displayExplore = true} : {
  bgImg: string
  displayExplore?: boolean
}) => {
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
    <div
      className="relative bg-cover bg-center p-16"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 text-white">
        <div className="text-5xl font-bold mb-4">
          Want to get accredited?
        </div>
        <div className="text-lg my-12">
          WSA Council is committed to providing the best accreditation services to professionals around the globe. Apply now and get the recognition you deserve.
        </div>
        <div className="flex justify-start space-x-4">
          <button className='bg-customOrange rounded-md text-white text-lg w-64 h-16 transition-all duration-300 hover:bg-customBlue px-6' onClick={() => {toggleRegisterCard()}}>
            Apply For Accreditation
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
    </div>
  )
}