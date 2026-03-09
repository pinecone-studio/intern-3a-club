'use client';

import React from 'react';
import { useAuth } from '@clerk/nextjs';
import { ClubDetail } from './ClubDetail';
import { ClubList } from './ClubList';
import { useClubsLogic } from './utils/use-clubs-logic';

const LoadingState = () => (
  <div className="p-12 text-center text-white/50 animate-pulse uppercase text-[10px] font-bold tracking-widest">
    Уншиж байна...
  </div>
);

const ErrorState = ({ msg }: { msg: string }) => (
  <div className="text-red-500 p-12 text-center font-bold italic text-sm">
    Алдаа: {msg}
  </div>
);

type LogicType = ReturnType<typeof useClubsLogic>;

interface ClubsLayoutProps {
  userId: string;
  logic: LogicType;
}

const ClubsLayout = ({ userId, logic }: ClubsLayoutProps) => (
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

const pickUserId = (
  prop: string | undefined,
  clerk: string | null | undefined
): string => {
  if (prop) return prop;
  return clerk || '';
};

interface ClubsContentProps {
  userId?: string;
}

const useClubsContent = (userId?: string) => {
  const { userId: clerkUserId } = useAuth();
  const logic = useClubsLogic(clerkUserId ?? undefined);
  const resolvedId = pickUserId(userId, clerkUserId);
  return { logic, resolvedId };
};

const renderClubsView = (
  logic: LogicType,
  resolvedId: string
): React.ReactElement => {
  if (logic.loading) return <LoadingState />;
  if (logic.error) return <ErrorState msg={logic.error.message} />;
  return <ClubsLayout userId={resolvedId} logic={logic} />;
};

export const ClubsContent = ({ userId }: ClubsContentProps) => {
  const { logic, resolvedId } = useClubsContent(userId);
  return renderClubsView(logic, resolvedId);
};
