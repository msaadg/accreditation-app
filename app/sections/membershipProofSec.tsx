import React from 'react';
import { Heading } from '../components/heading';

export const MembershipProofSec = ({ bgImg, proof1, proof2 }: { 
  bgImg: string,
  proof1: string,
  proof2: string
}) => {
  return (
    <div
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative z-10 text-white container mx-auto px-4">
        <Heading title="Membership Proof" color="white"/>
        <div className="flex flex-col md:flex-row justify-between gap-48">
          <div className="md:w-1/2">
            <div className="text-lg mb-4">
              {proof1}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="text-lg mb-4">
              {proof2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
