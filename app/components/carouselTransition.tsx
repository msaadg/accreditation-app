import { Carousel } from "@material-tailwind/react";
import { Slider } from "../lib/types";
 
export function CarouselTransition({slides} : {
  slides: Slider[]
}) {
  return (
    <Carousel
      transition={{ duration: 2 }}
      className="h-4/5"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      
      {
        slides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="flex absolute inset-0 items-center justify-between w-full px-20">
              <div className="text-white p-4 border-4 border-customOrange mr-20">
                <div className="text-6xl font-bold mb-2">{slide.title}</div>
                <div className="text-3xl">{slide.description}</div>
              </div>
              <div className="border-customOrange text-6xl bg-blue-gray-600 w-full h-96 p-4">
                signup/signin box
              </div>
            </div>
          </div>
        ))
      }
    </Carousel>
  );
}