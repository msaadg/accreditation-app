import { AboutUs } from "../components/aboutUs"

export const ChaptersSec = ({title, desc, imageUrl} : {
  title: string,
  desc: string,
  imageUrl: string
}) => {
  return (
    <div className='grid grid-cols-2 p-12'>
      <div className='col-span-1'>
        <AboutUs title={title} description={desc} />
      </div>
      <div className='col-span-1 flex items-center justify-center'>
        <img
          src={imageUrl}
          className="max-h-full max-w-full object-cover"
        />
      </div>    
    </div>
  )
}