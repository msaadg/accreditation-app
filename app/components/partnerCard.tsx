import React, { useState } from 'react';
import { Partner } from '../lib/types';

const PartnerCard = ({ partner } : {
  partner: Partner;
}) => {
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  const handleViewCertificate = () => {
    setShowCertificate(true);
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
  };

  return (
    <div className="relative">
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center h-full">
        <img src={partner.logoUrl} alt={partner.title} className="mx-auto w-44 h-44 object-contain" />
        <div className="text-lg font-semibold mb-2">{partner.title}</div>
        <div className="text-sm mb-8">{partner.description}</div>
        <button
          onClick={handleViewCertificate}
          className="bg-customOrange rounded-md text-white text-lg w-48 h-16 transition-all duration-300 hover:bg-black"
        >
          View Certificate
        </button>
      </div>

      {showCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50">
          <div className="relative top-12 bg-white p-8 mt-20 rounded-lg shadow-lg max-w-lg w-full">
            <button
              className="text-xl absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              onClick={handleCloseCertificate}
            >
              &times;
            </button>
            <img src={partner.certUrl} alt={`${partner.title} Certificate`} className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerCard;
