import { ChangeEvent, Dispatch, SetStateAction, ReactNode } from 'react';
import type {
  GetAllApprovedClubsQuery,
  GetAllClubsQuery,
  GetAllPendingClubsQuery,
  GetAllTeachersQuery,
} from '../app/_hooks/generated/graphql';

export type ClassTeacherType = {
  id: string;
  name: string;
};

export interface ChildItem {
  label: string;
}

export interface NavItem {
  label: string;
  icon: ReactNode;
  children?: ChildItem[];
}

export interface SidebarProps {
  onViewChange: (_label: string) => void;
  currentActive: string;
}

export interface SidebarGroupProps {
  item: NavItem;
  expandedItems: string[];
  onToggle: (_label: string) => void;
  onChildClick: (_label: string) => void;
  currentActive: string;
}

export interface ClubCardProps {
  req: Club;
  isPrimary: boolean;
  isExpanded: boolean;
  setExpandedId: (_id: string | null) => void;
  onDelete?: (_club: Club) => void;
  expandedId?: string | null;
}

export interface ToggleItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export interface Club {
  id: string;
  name: string;
  description: string | null;
  teacherId: string | null;
  minMember: number;
  maxMember: number;
  status: string;
  timetables: Timetable[];
}

export interface ApprovedClubDetailProps {
  club: Club;
  onEdit?: (_club: Club) => void;
  onDelete?: (_club: Club) => void;
}

export interface Props {
  req: Club;
  isPrimary: boolean;
  isExpanded: boolean;
  setExpandedId: (_id: string | null) => void;
}

export type ScheduleChange = {
  room: string;
  startTime: string;
  duration: string;
};
export type CreateClubState = {
  clubName: string;
  clubDesc: string;
  teacherId: string;
  clubMinStudent: string;
  clubMaxStudent: string;
  clubStartDate: Date[] | undefined;
  clubClassRoom: string;
  clubStartTime: string;
  clubDuration: string;
  clubFrequency: string;
  selectedDays?: string[];
  selectedFreqId: string;
  clubTerm: string;
  scheduleChange: Record<string, ScheduleChange>;
};
type ArrayItem<T> = T extends Array<infer U> ? U : never;
type ClubQueryTimetable = NonNullable<
  ArrayItem<NonNullable<GetAllClubsQuery['getAllClubs'][number]['timetables']>>
>;

export type Data = GetAllClubsQuery;
export type ApprovedClubsData = GetAllApprovedClubsQuery;
export type PendingClubsData = GetAllPendingClubsQuery;
export type GetAllClub = GetAllClubsQuery['getAllClubs'][number];
export type Timetable = ClubQueryTimetable & { endDate?: string };
export type CreateClubSetters = {
  setTeacherId: Dispatch<SetStateAction<string>>;
  setClubStartDate: Dispatch<SetStateAction<Date[] | undefined>>;
  setSelectedFreqId: Dispatch<SetStateAction<string>>;
  setClubTerm: Dispatch<SetStateAction<string>>;
  setClubClassRoom: Dispatch<SetStateAction<string>>;
  setClubStartTime: Dispatch<SetStateAction<string>>;
  setClubDuration: Dispatch<SetStateAction<string>>;
  setClubFrequency: Dispatch<SetStateAction<string>>;
  setScheduleChange: Dispatch<SetStateAction<Record<string, ScheduleChange>>>;
};
export type InputChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
export type CreateClubHandlers = {
  handleName: (_e: InputChangeEvent) => void;
  handleDesc: (_e: InputChangeEvent) => void;
  handleMax: (_e: InputChangeEvent) => void;
  handleUpdateChange: (
    _key: string,
    _field: keyof ScheduleChange,
    _value: string
  ) => void;
  handleDeleteDate: (_day: Date) => void;
  handleEmptyFields: () => void;
};
export type TeacherData = GetAllTeachersQuery;
export type GetAllTeacher = GetAllTeachersQuery['getAllTeachers'][number];
