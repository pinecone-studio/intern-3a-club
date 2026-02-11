export type CourseType = 'CODING' | 'DESIGN';

export type ClassTeacherType = {
  email: string;
  name: string;
};

export interface Class {
  id: string;
  clubName: string;
  teachers: ClassTeacherType[];
  clubDesc: string;
  clubStartDate: string;
  clubFrequency: string;
  clubClassRoom: number;
  clubStartTime: string;
  clubDuration: string;
  clubMaxStudent: number;
  clubMinStudent: number;

  // clubEndDate: string | null;
}
