import { useQuery } from '@apollo/client/react';
import { GetAllTeachersDocument } from './generated/graphql';

export const GET_ALL_TEACHERS = GetAllTeachersDocument;

export const useGetTeachers = () => useQuery(GET_ALL_TEACHERS);
