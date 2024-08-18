import { AboutUs } from "../components/aboutUs"

export const ChaptersSec = ({title, desc, imageUrl} : {
  title: string,
  desc: string,
  imageUrl: string
}) => {
  return (
    <div className='grid grid-cols-2 gap-10 p-16'>
      <div className='col-span-1'>
        <AboutUs title={title} description={desc} chapter={true} />
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