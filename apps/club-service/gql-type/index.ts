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
  schedules: {
    date: string;
    classroom: string;
    startTime: string;
    duration: number;
  }[];
  frequency: string;
  clubTerm?: string;
}

export type UpdateTimetableArgs = {
  input: {
    id: string;
    date: string;
    classroom: string;
    clubStartTime: string;
    duration: number;
  };
};
