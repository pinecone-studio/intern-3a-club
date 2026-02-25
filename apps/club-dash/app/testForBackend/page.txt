'use client';
import { useGetAllClubsQuery } from './generated';

export type GetAllClub = {
  id: string;
  name: string;
  description: string;
  creatorId: any;
  teacherId: string;
  type: string;
  status: string;
  preferredTeachers: any;
  minMember: number;
  maxMember: number;
  timetables: Timetable[];
};
export type Timetable = {
  id: string;
  clubId: string;
  date: string;
  room: string;
  clubStartTime: string;
  duration: number;
};

export default function CreateClubPage() {
  const { data, loading, error } = useGetAllClubsQuery();

  if (loading) return <div>Уншиж байна...</div>;
  if (error) return <div>Алдаа гарлаа: {error.message}</div>;

  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="flex flex-col gap-8">
        {data?.getAllClubs.map((club: any) => (
          <div className="border rounded-md p-6" key={club.id}>
            <div>{club.id}</div>
            <div>{club.name}</div>
            <div>{club.description}</div>
            <div>{club.creatorId}</div>
            <div>{club.teacherId}</div>
            <div>{club.preferredTeachers}</div>
            <div>{club.type}</div>
            <div>{club.status}</div>
            <div>{club.minMember}</div>
            <div>{club.maxMember}</div>
            <div className="flex flex-col gap-2 p-4">
              {club.timetables.map((schedule: any) => (
                <div key={schedule.id} className="bg-red-50">
                  <div>{schedule.id}</div>
                  <div>{schedule.clubId}</div>
                  <div>{schedule.date}</div>
                  <div>{schedule.room}</div>
                  <div>{schedule.clubStartTime}</div>
                  <div>{schedule.duration}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
