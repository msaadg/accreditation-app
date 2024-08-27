import React from 'react';
import { Partner } from '../lib/types';
import PartnerCard from '../components/partnerCard';

const PartnersSec = ({ partners } : {
  partners: Partner[];
}) => {
  return (
    <div className="m-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {partners.map((partner) => (
        <PartnerCard key={partner.title} partner={partner} />
      ))}
    </div>
  );
};

export default PartnersSec;
