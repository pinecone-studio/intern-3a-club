export type Club = {
  id: string;
  creatorId: string;
  name: string;
  description?: string;
  teacherIds: string[];
  minMember: number;
  maxMember: number;
  members?: string[];
  type: 'self' | 'mentor';
  preferredTeachers?: string[];
  status: 'pending' | 'approved' | 'declined';
  createdAt: string;
  updatedAt: string;
};

export type TimeTable = {
  id: string;
  date: string;
  clubEndDate?: string;
  room: number;
  duration: number;
  clubId: Club;
  createdAt: string;
  updatedAt: string;
};
