import { AboutUs } from "../components/aboutUs"
import { AccreditationCard } from "../components/accreditationCard"

export const AboutUsSec = ({title1, desc1, title2, desc2, title3, desc3} : {
  title1: string,
  desc1: string,
  title2: string,
  desc2: string,
  title3: string,
  desc3: string
}) => {
  return <div className='grid grid-cols-9 p-12 bg-gray-100'>
    <div className='col-span-4'>
      <AboutUs title={title1} description={desc1} />
    </div>
    <div className='flex col-span-5'>
      <div className='grid grid-cols-2'>
        <div className='col-span-1 px-2'>
          <AccreditationCard title={title2} description={desc2} svgContent={true} />
        </div>
        <div className='col-span-1 px-2'>
          <AccreditationCard title={title3} description={desc3} svgContent={false} />
        </div>
      </div>
    </div>  
  </div>
}