import React from 'react';
import { ScheduleCall } from '../components/scheduleCall';
import { QuickLinks } from '../components/quickLinks';
import { CopyRights } from '../components/copyRights';
import { Disclaimer } from '../components/disclaimer';

export const Footer = ({ email, phone, address } : {
  email: string;
  phone: string;
  address: string;
}) => {
  return (
    <div className=''>
      <ScheduleCall />

      <QuickLinks email={email} phone={phone} address={address} />

      <CopyRights />

      <Disclaimer />  
    </div>
  );
};
