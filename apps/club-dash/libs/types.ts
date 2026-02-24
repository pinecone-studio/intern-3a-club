import React from 'react';

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
  setExpandedId: (_id: number | null) => void;
  onDelete?: (_club: Club) => void;
  expandedId?: number | null;
}

export interface ToggleItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export interface Club {
  id: number;
  name: string;
  leader: string;
  time: string;
  room: string;
  goal: string;
  repeat: string;
  students: string;
  status?: 'pending' | 'approved';
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
  setExpandedId: (_id: number | null) => void;
}

export type CreateClubState = {
  clubName: string;
  clubDesc: string;
  teacherName: string;
  clubMinStudent: string;
  clubMaxStudent: string;
  clubStartDate: Date | undefined;
  clubClassRoom: string;
  clubStartTime: string;
  clubDuration: string;
  clubFrequency: string;
  selectedDays: string[];
  selectedFreqId: string;
};

export type Data = {
  getAllClubs: GetAllClub[];
};

export type GetAllClub = {
  id: string;
  name: string;
  description: string;
  creatorId: string | null; // Changed from any
  teacherId: string;
  type: string;
  status: string;
  preferredTeachers: string[] | null; // Changed from any
  minMember: number;
  maxMember: number;
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
