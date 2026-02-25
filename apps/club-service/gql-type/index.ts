export type ClubStatus = 'pending' | 'approved' | 'declined';

export interface CreateClubInput {
  name: string;
  description?: string;
  creatorId?: string;
  teacherId?: string;
  status?: ClubStatus;
  type?: string;
  preferredTeachers?: string[];
  minMember?: number;
  maxMember?: number;
}
export interface CreateClubWithSchedulesArgs {
  input: CreateClubInput;
  startDate: string;
  classroom: string;
  startTime: string;
  duration: number;
  frequency: string;
  selectedDays?: string[];
}

export type UpdateTimetableArgs = {
  input: {
    id: string;
    date: string;
    room: string;
    clubStartTime: string;
    duration: number;
  };
};
