'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { clubs as initialClubs } from '../../lib/mockdata';
import { ClubCard } from './_components/ClubCard';
import { ClubsHeader } from './_components/ClubsHeader';
import { ClubDetail } from './_components/ClubDetail';

const JoinClubPage = () => {
  // 1. Датагаа төлөвт хадгалах
  const [allClubs, setAllClubs] = useState(() =>
    initialClubs.map((club) => ({
      ...club,
      isEnrolled: false,
      bannedUntil: 0,
    }))
  );

  const [selectedId, setSelectedId] = useState<number>(initialClubs[0].id);

  // 2. JSX-no-inline-function алдааг засах нэрлэсэн функц
  const handleClubSelect = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  // 3. Бүртгүүлэх логик
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

  // 4. Гарах логик
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

  return (
    <div className="relative min-h-screen w-full bg-[#050c1f] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(90,160,255,0.15),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl p-6 lg:p-12">
        <ClubsHeader openClubsCount={openClubsCount} />

        <div className="mt-12 flex flex-col gap-8 lg:flex-row">
          {/* Зүүн тал */}
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

          {/* Баруун тал */}
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
  <div className="flex h-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
    <p className="text-white/20 uppercase font-black italic">Клуб сонгоно уу</p>
  </div>
);

export default JoinClubPage;
