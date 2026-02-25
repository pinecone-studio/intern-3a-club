'use client';
import { useQuery } from '@apollo/client/react';
import { ClubsContent } from './_components/ClubsContent';
import { Data, GET_ALL_CLUBS } from '../../lib/type';

const JoinClubPage = () => {
  const { loading, error, data } = useQuery<Data>(GET_ALL_CLUBS);
  console.log({ data });
  if (loading) return <div>Уншиж байна...</div>;
  if (error) return <div>Алдаа гарлаа: {error.message}</div>;

  return (
    <div className="relative min-h-screen w-full bg-[#050a12] bg-[radial-gradient(circle_at_20%_30%,_rgba(29,78,216,0.25)_0%,_transparent_30%),_radial-gradient(circle_at_30%_10%,_rgba(100,116,139,0.15)_0%,_transparent_60%)] overflow-hidden">
      <ClubsContent />
    </div>
  );
};

export default JoinClubPage;
