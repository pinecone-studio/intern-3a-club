'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ClubDetail } from './ClubDetail';
import { ClubList } from './ClubList';
// import { initialClubs } from '../../../lib/mockdata';
import {
  Data,
  ExtendedClub,
  GET_ALL_CLUBS,
  GetAllClub,
} from '../../../lib/type';
import { useQuery } from '@apollo/client/react';

const sortClubs = (getAllClubs: ExtendedClub[]) => {
  return [...getAllClubs].sort((a, b) =>
    a.isEnrolled === b.isEnrolled ? 0 : a.isEnrolled ? -1 : 1
  );
};

const mapClubsData = (clubs: GetAllClub[]): ExtendedClub[] => {
  return clubs.map((club) => ({
    ...club,
    isEnrolled: false,
    bannedUntil: club.bannedUntil ?? 0,
  }));
};

export const ClubsContent = () => {
  const [allClubs, setAllClubs] = useState<ExtendedClub[]>([]);
  const [selectedClubId, setSelectedClubId] = useState<string>('');
  const [now, setNow] = useState<number>(Date.now());

  const { loading, error, data } = useQuery<Data>(GET_ALL_CLUBS);

  useEffect(() => {
    const rawClubs = data?.getAllClubs;

    if (!rawClubs || rawClubs.length === 0) return;

    const mapped = mapClubsData(rawClubs);
    setAllClubs(mapped);

    setSelectedClubId((prevId) => prevId || mapped[0].id);
  }, [data]);

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleEnroll = useCallback((id: string) => {
    setAllClubs((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isEnrolled: true } : c))
    );
  }, []);

  const handleLeave = useCallback((id: string) => {
    setAllClubs((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, isEnrolled: false, bannedUntil: Date.now() + 60000 }
          : c
      )
    );
  }, []);

  const handleSelect = useCallback((id: string) => {
    setSelectedClubId(id);
  }, []);

  const sortedClubs = useMemo(() => sortClubs(allClubs), [allClubs]);

  const selectedClub = useMemo(
    () => sortedClubs.find((c) => c.id === selectedClubId),
    [sortedClubs, selectedClubId]
  );

  const isLocked = useMemo(() => {
    if (!selectedClub) return false;
    return /* istanbul ignore next */ (selectedClub.bannedUntil ?? 0) > now;
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
  if (loading) return null;
  if (error) return <div className="text-red-500 p-4">{error.message}</div>;
  return (
    <div className="mx-auto h-screen space-y-6 p-12 bg-gradient-to-br from-[#050c1f] to-[#0b2b5c]">
      {/* <ClubsHeader openClubsCount={openClubsCount} /> */}
      <div className="flex flex-col my-4 gap-2 lg:flex-row">
        <ClubList
          selectedClubId={selectedClubId}
          onSelect={handleSelect}
          clubs={sortedClubs}
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
