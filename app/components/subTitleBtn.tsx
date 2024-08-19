import { useState } from "react";
import { useRouter } from "next/navigation";
import { RegisterCardTop } from "./registerCardTop";

export const SubTitleBtn = ({ subTitle, redirectUrl }: { subTitle: string, redirectUrl?: string }) => {
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

  const handleApplyClick = () => {
    if (redirectUrl) {
      router.push(redirectUrl);
    } else {
      // toggleRegisterCard();
      router.push('/');
    }
  };

  return (
    <div className='flex justify-between bg-customOrange px-16'>
      <div className='text-white text-2xl font-semibold flex flex-col justify-center'>
        {subTitle}
      </div>
      <div className='py-5'>
        <button 
          className='bg-customBlue rounded-md text-white text-lg w-52 h-16 transition-all duration-300 hover:bg-white hover:text-black' 
          onClick={handleApplyClick}
        >
          Apply Now
        </button>

        {showRegisterCard && !redirectUrl && (
          <div className="fixed top-28 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className={`transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <RegisterCardTop onClose={toggleRegisterCard} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
