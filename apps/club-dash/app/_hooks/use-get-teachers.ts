import { useQuery } from '@apollo/client/react';
import { TeacherData } from '../../../club-dash/libs/types';
import { GetAllTeachersDocument } from './generated/graphql';

export const GET_ALL_TEACHERS = GetAllTeachersDocument;

export const useGetTeachers = () => {
  const { loading, error, data } = useQuery(GET_ALL_TEACHERS);
  return { loading, error, data: data as TeacherData | undefined };
};
