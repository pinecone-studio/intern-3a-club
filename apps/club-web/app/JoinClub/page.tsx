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

  return (
    <div className="relative min-h-screen w-full bg-[#050a12] bg-[radial-gradient(circle_at_20%_30%,_rgba(29,78,216,0.25)_0%,_transparent_30%),_radial-gradient(circle_at_30%_10%,_rgba(100,116,139,0.15)_0%,_transparent_60%)] overflow-hidden">
      <div className="mx-auto max-w-[1600px] p-6 lg:p-8">
        <ClubsHeader openClubsCount={openClubsCount} />

        <div className="mt-8 flex flex-col gap-6 lg:flex-row items-start">
          <div className="w-full space-y-3 lg:w-[380px] shrink-0 h-[calc(100vh-200px)] overflow-y-auto no-scrollbar">
            {allClubs.length > 0 ? (
              allClubs.map((club) => (
                <ClubCard
                  key={club.id}
                  club={club}
                  isSelected={selectedId === club.id}
                  onClick={handleClubSelect}
                />
              ))
            ) : (
              <div className="text-white/40 text-sm text-center py-10">
                Клуб олдсонгүй
              </div>
            )}
          </div>

          {/* Баруун талын дэлгэрэнгүй хэсэг */}
          <div className="flex-1 w-full min-h-[600px] bg-[#11161D]/50 border border-white/5 rounded-2xl backdrop-blur-sm">
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

// EmptyState-ийг илүү "Modern Dashboard" стиль рүү оруулав
const EmptyState = () => (
  <div className="flex h-full min-h-[400px] flex-col items-center justify-center p-8 text-center">
    <div className="w-16 h-16 mb-4 rounded-full bg-white/5 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-dashed border-white/20 rounded-full animate-spin-slow" />
    </div>
    <p className="text-white/30 text-sm font-medium tracking-widest uppercase">
      Мэдээлэл харахын тулд клуб сонгоно уу
    </p>
  </div>
);

export default JoinClubPage;
