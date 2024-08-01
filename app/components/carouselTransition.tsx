import { Carousel } from "@material-tailwind/react";
import { Slider } from "../lib/types";

export function CarouselTransition({ slides }: { slides: Slider[] }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Carousel
      {...settings}
      transition={{ duration: 2 }}
      className="h-4/5 relative mt-28"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative">
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-between w-full px-20">
            <div className="text-white p-8 border-4 border-customOrange mr-20">
              <div className="text-6xl font-bold mb-4">{slide.title}</div>
              <div className="text-3xl">{slide.description}</div>
            </div>
            <div className="border-customOrange text-6xl bg-blue-gray-900 w-full h-96 p-4">
              signup/signin box
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
