import { useQuery } from '@apollo/client/react';
import gql from 'graphql-tag';
import React from 'react';

export interface MyClubs {
  getAllClubsByCreatorId: GetAllClubsByCreatorId[];
}

export interface GetAllClubsByCreatorId {
  __typename: string;
  id: string;
  name: string;
  description: string;
  teacherId: string;
  preferredTeachers: string[];
  type: string;
  frequency: string;
  clubTerm: string;
  minMember: number;
  maxMember: number;
  status: string;
  creatorId: string;
  timetables: Timetable[];
}

export interface Timetable {
  __typename: string;
  id: string;
  clubId: string;
  date: string;
  room: string;
  clubStartTime: string;
  duration: number;
}

export const GET_MY_CLUBS = gql`
  query GetAllClubsByCreatorId {
    getAllClubsByCreatorId {
      id
      name
      description
      teacherId
      preferredTeachers
      type
      frequency
      clubTerm
      minMember
      maxMember
      status
      creatorId
      timetables {
        id
        clubId
        date
        room
        clubStartTime
        duration
      }
    }
  }
`;

export const MyClubs = () => {
  const { loading, error, data } = useQuery<MyClubs>(GET_MY_CLUBS);

  if (loading) return <p>Ачаалж байна...</p>;

  if (error) {
    return <p>Алдаа гарлаа: {error.message}</p>;
  }
  console.log(data);
  return (
    <div>
      <div>MyClubs</div>
      <div>
        {data?.getAllClubsByCreatorId.map((club) => (
          <div key={club.id}>
            <div>{club.name}</div>
            <div>{club.status}</div>
            <div>{club.id}</div>
            <div>
              {club.timetables.map((timetable) => (
                <div key={timetable.id}>
                  <div>{timetable.clubId}</div>
                  <div>{timetable.id}</div>
                  <div>{timetable.date}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
