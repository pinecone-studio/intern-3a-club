export type ApprovedClubData = {
  getAllApprovedClubs: GetAllApprovedClub[];
};

export interface ExtendedClub extends GetAllApprovedClub {
  isEnrolled: boolean;
  bannedUntil: number;
}
export interface GetAllApprovedClub {
  __typename: string;
  id: string;
  name: string;
  description: string;
  creatorId: string;
  teacherId: string;
  frequency: string;
  clubTerm: string;
  type: string;
  status: string;
  minMember: number;
  maxMember: number;
  timetables: ApprovedClubTimetable[];
  members: ClubMember[];
}

export interface ApprovedClubTimetable {
  __typename: string;
  id: string;
  clubId: string;
  date: string;
  room: string;
  clubStartTime: string;
  duration: number;
}

export interface ClubMember {
  __typename: string;
  id: string;
  studentId: string;
  student: {
    azureEmail: string;
    firstName: string;
    lastName: string;
    classId: string;
  };
}

export interface TeacherData {
  getAllTeachers: GetAllTeacher[];
}

export interface GetAllTeacher {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

// ---- data ----
import { gql } from '@apollo/client';

export const GET_ALL_CLUBS = gql`
  query GetAllClubs {
    getAllClubs {
      id
      name
      description
      teacherId
      type
      status
      minMember
      maxMember
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

export type Data = {
  getAllClubs: GetAllClub[];
};

export type GetAllClub = {
  id: string;
  name: string;
  description: string;
  teacherId: string;
  type: string;
  status: string;
  minMember: number;
  maxMember: number;
  bannedUntil?: number;
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
