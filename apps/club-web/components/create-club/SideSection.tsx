//apps/club-web/components/create-club/SideSection.tsx
import React from 'react';
import { MyClubsList } from '../club-add/PersonalClubs';
import { RequestHistory } from '../club-add/RequestHistory';
// import { SystemTip } from '../club-add/SystemTip';

export const SideSection = () => (
  <div className="lg:col-span-5 space-y-8">
    <MyClubsList />
    <RequestHistory />
    {/* <SystemTip /> */}
  </div>
);
