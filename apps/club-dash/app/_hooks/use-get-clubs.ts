import { useQuery } from '@apollo/client/react';
import { Data } from '../../../club-dash/libs/types';
import gql from 'graphql-tag';

export const GET_ALL_CLUBS = gql`
  query GetAllClubs {
    getAllClubs {
      id
      name
      description
      creatorId
      teacherId
      type
      status
      preferredTeachers
      minMember
      maxMember
      frequency
      clubTerm
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

export const useGetClubs = () => {
  const { loading, error, data } = useQuery<Data>(GET_ALL_CLUBS);
  return { loading, error, data };
};
