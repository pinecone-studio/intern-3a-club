'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ClubDetail } from './ClubDetail';
import { ClubList } from './ClubList';
// import { ClubsHeader } from './ClubsHeader';
import { clubs as initialClubs } from '../../../lib/mockdata';
import { ExtendedClub } from '../../../lib/type';

const sortClubs = (clubs: ExtendedClub[]) => {
  return [...clubs].sort((a, b) =>
    a.isEnrolled === b.isEnrolled ? 0 : a.isEnrolled ? -1 : 1
  );
};

export const ClubsContent = () => {
  const [allClubs, setAllClubs] = useState<ExtendedClub[]>(() =>
    initialClubs.map((c) => ({ ...c, isEnrolled: false, bannedUntil: 0 }))
  );
  const [selectedClubId, setSelectedClubId] = useState<number>(1);
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Арга хэмжээний функцууд
  const handleEnroll = useCallback((id: number) => {
    setAllClubs((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isEnrolled: true } : c))
    );
  }, []);

  const handleLeave = useCallback((id: number) => {
    setAllClubs((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, isEnrolled: false, bannedUntil: Date.now() + 60000 }
          : c
      )
    );
  }, []);

  const handleSelect = useCallback((id: number) => {
    setSelectedClubId(id);
  }, []);

  // Өгөгдөл боловсруулах (Дараалал чухал!)
  const sortedClubs = useMemo(() => sortClubs(allClubs), [allClubs]);

  // 1-рт: SelectedClub-ийг тодорхойлно
  const selectedClub = useMemo(
    () => sortedClubs.find((c) => c.id === selectedClubId),
    [sortedClubs, selectedClubId]
  );

  // 2-рт: Түүн дээр суурилсан утгуудыг тооцоолно
  const isLocked = useMemo(() => {
    if (!selectedClub) return false;
    return selectedClub.bannedUntil > now;
  }, [selectedClub, now]);

  const remainingTime = useMemo(() => {
    if (!selectedClub) return 0;
    const diff = Math.ceil((selectedClub.bannedUntil - now) / 1000);
    return diff > 0 ? diff : 0;
  }, [selectedClub, now]);

  // const openClubsCount = useMemo(
  //   () => allClubs.filter((c) => c.status === 'Open').length,
  //   [allClubs]
  // );
  return (
    <div className="mx-auto h-screen space-y-8 p-14 bg-gradient-to-br from-[#050c1f] to-[#0b2b5c]">
      {/* <ClubsHeader openClubsCount={openClubsCount} /> */}
      <div className="flex flex-col my-6 gap-6 lg:flex-row">
        <ClubList
          clubs={sortedClubs}
          selectedClubId={selectedClubId}
          onSelect={handleSelect}
        />
       
        <ClubDetail
          selectedClub={selectedClub}
          onEnroll={handleEnroll}
          onLeave={handleLeave}
          isLocked={isLocked}
          remainingTime={remainingTime}
        />
      
      </div>
    </div>
  );
};
