'use client';
import { useQuery } from '@apollo/client/react';

import { Data } from '../../lib/type';
import { ClubsContent } from './_components/ClubsContent';
import { GET_ALL_APPROVED_CLUBS } from '../../lib/club-query';
import { ClubDetailSkeleton, ClubListSkeleton } from './_components';

const JoinClubPage = () => {
  const { loading, error, data } = useQuery<Data>(GET_ALL_APPROVED_CLUBS);
  console.log({ data });
  if (loading) {
    return (
      <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat py-6 px-12">
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-10'>
          <div className="mt-16">
            <ClubListSkeleton />
          </div>
          <div className="w-full mt-10">
            <ClubDetailSkeleton />
          </div>
        </div>
      </div>
    );
  }
  if (error) return <div>Алдаа гарлаа: {error.message}</div>;

  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat">
      <ClubsContent />
    </div>
  );
};

export default JoinClubPage;
