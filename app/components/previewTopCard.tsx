import Link from 'next/link'
import { Links } from '../lib/types'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RegisterCardTop } from './registerCardTop';
export const PreviewTopCard = ({ title, text, btnText, secTitle, links}: {
  title: number | string,
  text: string,
  btnText: string,
  secTitle: string,
  links: Links[]
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

  const handleApplyClick = () => {
    if (secTitle === 'About') {
      router.push('signup-chapter-member');
    } else {
      toggleRegisterCard();
    }
  };

  return (
    <div className="absolute top-full right-8 w-max-full h-96 bg-white shadow-customOrange shadow-md p-12 flex gap-12 cursor-default">
      <div className="flex flex-col w-72">
        <div className="font-extrabold text-5xl text-gray-800 text-center">
          {typeof title === 'number' ? `${Math.floor(title/10) * 10}+` : title}
        </div>
        <div className="text-lg text-gray-600 font-normal text-center my-6">
          {text}
        </div>
        <button className="bg-customOrange rounded-md text-white text-lg w-72 h-16 transition-all duration-300 hover:bg-gray-400 hover:text-black font-normal mb-4" onClick={() => {handleApplyClick()}}>
          {btnText}
        </button>
        <button className='bg-customBlue rounded-md text-white text-lg w-72 h-16 transition-all duration-300 hover:bg-gray-400 hover:text-black font-normal' onClick={() => console.log('Button clicked')}>
          Contact Us
        </button>

        {showRegisterCard && (
          <div className="fixed top-28 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className={`transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <RegisterCardTop onClose={toggleRegisterCard} />
            </div>
          </div>
        )}
      </div>
      
      <div className="flex flex-col justify-center">
        <div className="w-0.5 h-48 bg-customOrange"></div>
      </div>

      <div>
        <div className="text-black font-medium">
          {secTitle}
        </div>
        <div className="mt-6 w-64">
          {links.map(link => (
            <div className="text-lg text-gray-600 font-normal my-2 hover:cursor-pointer hover:text-customOrange">
              <Link href={link.url}>{link.text}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}