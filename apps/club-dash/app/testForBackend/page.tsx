'use client';

import { useQuery } from '@apollo/client/react';
import { GetAllClubsDocument, GetAllClubsQuery } from './generated/graphql';


type Club = GetAllClubsQuery['getAllClubs'][number];


export default function CreateClubPage() {
const { data, loading, error } = useQuery(GetAllClubsDocument);

  if (loading) return <div>Уншиж байна...</div>;
  if (error) return <div>Алдаа гарлаа: {error.message}</div>;

  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="flex flex-col gap-8">
        {data?.getAllClubs.map((club: Club) => (
          <div className="border rounded-md p-6" key={club.id}>
            <div>{club.id}</div>
            <div>{club.name}</div>
            <div>{club.description}</div>
            <div>{String(club.creatorId ?? '')}</div>
            <div>{club.teacherId}</div>
            <div>{JSON.stringify(club.preferredTeachers ?? [])}</div>
            <div>{club.type}</div>
            <div>{club.status}</div>
            <div>{club.minMember}</div>
            <div>{club.maxMember}</div>

            <div className="flex flex-col gap-2 p-4">
              {club.timetables?.map((schedule) =>
                schedule ? (
                  <div key={schedule.id} className="bg-red-50">
                    <div>{schedule.id}</div>
                    <div>{schedule.clubId}</div>
                    <div>{schedule.date}</div>
                    <div>{schedule.room}</div>
                    <div>{schedule.clubStartTime}</div>
                    <div>{schedule.duration}</div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
