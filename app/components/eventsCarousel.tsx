import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { EventPreview } from '../lib/types';
import { formatDateEvents } from '../utils/formatDateEvents';

export const EventsCarousel = ({ events } : {
  events: Array<EventPreview>
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const colors = [
    'text-customOrange',
    'text-red-600',
    'text-blue-400',
  ];

  return (
    <Slider {...settings}>
      {events.map((event, index) => (
        <div key={index} className="p-4 transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
          <div className="bg-blue-gray-900 text-white p-6 rounded-lg shadow-lg w-full h-56">
            <div className={`text-lg mb-2 ${colors[Math.round(Math.random() * 100) % colors.length]}`}>{event.title}</div>
            <div className="text-lg">{formatDateEvents(event.startDate)}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};