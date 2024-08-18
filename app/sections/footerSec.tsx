import React from 'react';
import { ScheduleCall } from '../components/scheduleCall';
import { QuickLinks } from '../components/quickLinks';
import { CopyRights } from '../components/copyRights';
import { Disclaimer } from '../components/disclaimer';
import { SocialData } from '../lib/types';

export const Footer = ({ email, phone, address, social } : {
  email: string;
  phone: string;
  address: string;
  social: SocialData
}) => {
  return (
    <div className=''>
      <ScheduleCall />

      <QuickLinks email={email} phone={phone} address={address} social={social} />

      <CopyRights />

      <Disclaimer />  
    </div>
  );
};
