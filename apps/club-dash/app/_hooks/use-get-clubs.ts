import { useQuery } from '@apollo/client/react';
import { Data } from '../../../club-dash/libs/types';
import { GetAllClubsDocument } from './generated/graphql';

export const GET_ALL_CLUBS = GetAllClubsDocument;

export const useGetClubs = () => {
  const { loading, error, data } = useQuery(GET_ALL_CLUBS);
  return { loading, error, data: data as Data | undefined };
};
