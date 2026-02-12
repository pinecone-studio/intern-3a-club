import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { classes, classTeachers, clubMembers, clubs, students, teachers, timetable } from "drizzle/schema";

/* Students */
export type Student = InferSelectModel<typeof students>;
export type NewStudent = InferInsertModel<typeof students>;

/* Classes */
export type Class = InferSelectModel<typeof classes>;
export type NewClass = InferInsertModel<typeof classes>;

/* Teachers */
export type Teacher = InferSelectModel<typeof teachers>;
export type NewTeacher = InferInsertModel<typeof teachers>;

/* ClassTeachers */
export type ClassTeacher = InferSelectModel<typeof classTeachers>;
export type NewClassTeacher = InferInsertModel<typeof classTeachers>;

/* Clubs */
export type Club = InferSelectModel<typeof clubs>;
export type NewClub = InferInsertModel<typeof clubs>;

/* ClubMembers */
export type ClubMember = InferSelectModel<typeof clubMembers>;
export type NewClubMember = InferInsertModel<typeof clubMembers>;

/* Timetable */
export type Timetable = InferSelectModel<typeof timetable>;
export type NewTimetable = InferInsertModel<typeof timetable>;
