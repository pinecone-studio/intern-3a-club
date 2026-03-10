'use client';
import React from 'react';
import { ClubsLayout } from './ClubsLayout';
import { useClubsContent } from './utils/use-clubs-content';
import { useClubsLogic } from './utils/use-clubs-logic';

type LogicType = ReturnType<typeof useClubsLogic>;

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

const renderClubsView = (
  logic: LogicType,
  resolvedId: string
): React.ReactElement => {
  if (logic.loading) return <LoadingState />;
  if (logic.error) return <ErrorState msg={logic.error.message} />;
  return <ClubsLayout userId={resolvedId} logic={logic} />;
};

interface ClubsContentProps {
  userId?: string;
}

export const ClubsContent = ({ userId }: ClubsContentProps) => {
  const { logic, resolvedId } = useClubsContent(userId);
  return renderClubsView(logic, resolvedId);
};
