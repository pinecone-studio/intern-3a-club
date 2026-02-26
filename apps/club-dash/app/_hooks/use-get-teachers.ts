import { useQuery } from '@apollo/client/react';
import { TeacherData } from '../../../club-dash/libs/types';
import gql from 'graphql-tag';

export const GET_ALL_TEACHERS = gql`
  query GetAllTeachers {
    getAllTeachers {
      id
      firstName
      lastName
      profilePicture
    }
  }
`;

export const useGetTeachers = () => {
  const {
    loading: isLoadingTeacher,
    error: errTeacherData,
    data: teacherData,
  } = useQuery<TeacherData>(GET_ALL_TEACHERS);
  return {
    loading: isLoadingTeacher,
    error: errTeacherData,
    data: teacherData,
  };
};
