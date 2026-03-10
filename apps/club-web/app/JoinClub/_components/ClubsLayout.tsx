'use client';
import React from 'react';
import { ClubDetail } from './ClubDetail';
import { ClubList } from './ClubList';
import { useClubsLogic } from './utils/use-clubs-logic';

type LogicType = ReturnType<typeof useClubsLogic>;

interface ClubsLayoutProps {
  userId: string;
  logic: LogicType;
}

export const ClubsLayout = ({ userId, logic }: ClubsLayoutProps) => (
  <div className="max-w-[1400px] mx-auto min-h-screen p-4 lg:p-12">
    <div className="flex flex-col lg:flex-row gap-3 items-start h-full">
      <div className="w-full lg:w-[350px] sticky shrink-0 order-2 lg:order-1">
        <ClubList
          selectedClubId={logic.selectedClubId}
          onSelect={logic.setSelectedClubId}
          clubs={logic.sortedClubs}
          isLiveSyncing={logic.isLiveSyncing}
          nowTs={logic.nowTs}
        />
      </div>
      <div className="w-full order-1 lg:order-2">
        <ClubDetail
          selectedClub={logic.selectedClub}
          userId={userId}
          allTeachers={logic.allTeachers}
          onEnrollSuccess={logic.onEnroll}
          onLeaveSuccess={logic.onLeave}
        />
      </div>
    </div>
  </div>
);
