import Link from 'next/link'
import { Links } from '../lib/types'
export const PreviewTopCard = ({ title, text, btnText, secTitle, links}: {
  title: number | string,
  text: string,
  btnText: string,
  secTitle: string,
  links: Links[]
}) => {
  return (
    <div className="absolute top-full right-8 w-max-full h-96 bg-white shadow-customOrange shadow-md p-12 flex gap-12 cursor-default">
      <div className="flex flex-col w-72">
        <div className="font-extrabold text-5xl text-gray-800 text-center">
          {typeof title === 'number' ? `${Math.floor(title/10) * 10}+` : title}
        </div>
        <div className="text-lg text-gray-600 font-normal text-center my-6">
          {text}
        </div>
        <button className="bg-customOrange rounded-md text-white text-lg w-72 h-16 transition-all duration-300 hover:bg-gray-400 hover:text-black font-normal mb-4" onClick={() => console.log('Button clicked')}>
          {btnText}
        </button>
        <button className='bg-blue-gray-900 rounded-md text-white text-lg w-72 h-16 transition-all duration-300 hover:bg-gray-400 hover:text-black font-normal' onClick={() => console.log('Button clicked')}>
          Contact Us
        </button>
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