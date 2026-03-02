'use client';
import { useQuery } from '@apollo/client/react';

import { Data } from '../../lib/type';
import { ClubsContent } from './_components/ClubsContent';
import { GET_ALL_APPROVED_CLUBS } from './_components/club-query';

const JoinClubPage = () => {
  const { loading, error, data } = useQuery<Data>(GET_ALL_APPROVED_CLUBS);
  console.log({ data });
  if (loading) return <div>Уншиж байна...</div>;
  if (error) return <div>Алдаа гарлаа: {error.message}</div>;

  return (
    <div className="min-h-screen bg-[url('/pinebaatar.png')] bg-cover bg-center bg-no-repeat">
      <ClubsContent/>
    </div>
  );
};

export default JoinClubPage;
