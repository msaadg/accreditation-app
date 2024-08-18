import { Heading } from "../components/heading";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const AccreditedInsSec = ({ bgColor, logos } : {
  bgColor: boolean;
  logos: Array<{ imageUrl: string, alt: string }>;
}) => {
  const settings = {
    dots: false, // No dots
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    cssEase: 'linear',
  };

  return (
    <div className={`pt-16 pb-4 px-16 ${bgColor ? 'bg-gray-100' : 'bg-white'}`}>
      <Heading title="Among Accredited Institutes" />
      <div>
        <Slider {...settings} className="max-h-full">
          {logos.map((logo, index) => (
            <div key={index} className="">
              <img
                src={logo.imageUrl}
                alt={logo.alt || `Institute logo ${index + 1}`}
                className="h-44 w-44"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
