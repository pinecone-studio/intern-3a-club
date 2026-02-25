import React, { Dispatch, SetStateAction } from 'react';

export type ClassTeacherType = {
  id: string;
  name: string;
};

export interface ChildItem {
  label: string;
}

export interface NavItem {
  label: string;
  icon: React.ReactNode;
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

export type CreateClubState = {
  clubName: string;
  clubDesc: string;
  teacherName: string;
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
};

export type Data = {
  getAllClubs: GetAllClub[];
};

export type ApprovedClubsData = {
  getAllApprovedClubs: GetAllClub[];
};

export type PendingClubsData = {
  getAllPendingClubs: GetAllClub[];
};

export type GetAllClub = {
  id: string;
  name: string;
  description: string;
  creatorId: string | null;
  teacherId: string;
  type: string;
  status: string;
  preferredTeachers: string[] | null;
  minMember: number;
  maxMember: number;
  timetables: Timetable[];
  frequency?: string;
  termMonths?: number;
};

export type Timetable = {
  id: string;
  clubId: string;
  endDate?: string;
  date: string;
  room: string;
  clubStartTime: string;
  duration: number;
};

export type CreateClubSetters = {
  setTeacherName: Dispatch<SetStateAction<string>>;
  setClubStartDate: Dispatch<SetStateAction<Date[] | undefined>>;
  setSelectedFreqId: Dispatch<SetStateAction<string>>;
  setClubTerm: Dispatch<SetStateAction<string>>;
  setClubClassRoom: Dispatch<SetStateAction<string>>;
  setClubStartTime: Dispatch<SetStateAction<string>>;
  setClubDuration: Dispatch<SetStateAction<string>>;
  setClubFrequency: Dispatch<SetStateAction<string>>;
};

export type CreateClubHandlers = {
  handleName: (
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleDesc: (
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleMax: (
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};
