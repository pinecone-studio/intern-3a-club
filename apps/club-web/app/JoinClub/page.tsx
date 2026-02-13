'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { clubs as initialClubs } from '../../lib/mockdata';
import { ClubCard } from './_components/ClubCard';
import { ClubsHeader } from './_components/ClubsHeader';
import { ClubDetail } from './_components/ClubDetail';

const JoinClubPage = () => {
  const [allClubs, setAllClubs] = useState(() =>
    initialClubs.map((club) => ({
      ...club,
      isEnrolled: false,
      bannedUntil: 0,
    }))
  );

  const [selectedId, setSelectedId] = useState<number>(() =>
    initialClubs && initialClubs.length > 0 ? initialClubs[0].id : 0
  );

  const handleClubSelect = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  const handleEnroll = useCallback((id: number) => {
    setAllClubs((prev) =>
      prev.map((club) =>
        club.id === id
          ? {
              ...club,
              isEnrolled: true,
              currentMembers: club.currentMembers + 1,
            }
          : club
      )
    );
  }, []);

  const handleLeave = useCallback((id: number) => {
    setAllClubs((prev) =>
      prev.map((club) =>
        club.id === id
          ? {
              ...club,
              isEnrolled: false,
              currentMembers: club.currentMembers - 1,
            }
          : club
      )
    );
  }, []);

  const selectedClub = useMemo(
    () => allClubs.find((club) => club.id === selectedId),
    [allClubs, selectedId]
  );

  const openClubsCount = useMemo(
    () => allClubs.filter((c) => c.status === 'Open').length,
    [allClubs]
  );

  if (allClubs.length === 0) return <EmptyState />;

  return (
    <div className="relative min-h-screen w-full bg-[#050c1f] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl p-6 lg:p-12">
        <ClubsHeader openClubsCount={openClubsCount} />
        <div className="mt-12 flex flex-col gap-8 lg:flex-row">
          <div className="w-full space-y-4 lg:w-[400px]">
            {allClubs.map((club) => (
              <ClubCard
                key={club.id}
                club={club}
                isSelected={selectedId === club.id}
                onClick={handleClubSelect}
              />
            ))}
          </div>
          <div className="flex-1">
            {selectedClub ? (
              <ClubDetail
                selectedClub={selectedClub}
                onEnroll={handleEnroll}
                onLeave={handleLeave}
                isLocked={false}
                remainingTime={0}
              />
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const EmptyState = () => (
  <div className="flex h-full items-center justify-center p-8">
    <p className="text-white/20 uppercase font-black">Клуб сонгоно уу</p>
  </div>
);

export default JoinClubPage;
