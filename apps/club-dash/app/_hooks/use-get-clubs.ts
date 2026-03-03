import { useQuery } from '@apollo/client/react';
import { GetAllClubsDocument } from './generated/graphql';

export const GET_ALL_CLUBS = GetAllClubsDocument;

export const useGetClubs = () => useQuery(GET_ALL_CLUBS);
