export interface Instructor {
  name: string;
  role: string;
  image: string;
}

export interface Club {
  id: number;
  name: string;
  description: string;
  status: 'Open' | 'Full';
  instructors: Instructor[];
  currentMembers: number;
  maxMembers: number;
  schedule: string;
  time: string;
  class: string;
  enrolledStudents: string[];
  image: string;
  isEnrolled?: boolean;
}

export interface ExtendedClub extends GetAllClub {
  isEnrolled: boolean;
  bannedUntil: number;
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
export type ClubCardProps = {
  club: GetAllClub & { isEnrolled?: boolean; bannedUntil?: number };
  isSelected: boolean;
  onClick: (_id: string) => void;
};

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
