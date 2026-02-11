import { relations } from "drizzle-orm/relations";
import { teachers, classTeachers, classes, students, clubMembers, clubs, timetable } from "./schema";

export const classTeachersRelations = relations(classTeachers, ({one}) => ({
	teacher: one(teachers, {
		fields: [classTeachers.teacherId],
		references: [teachers.id]
	}),
	class: one(classes, {
		fields: [classTeachers.classId],
		references: [classes.id]
	}),
}));

export const teachersRelations = relations(teachers, ({many}) => ({
	classTeachers: many(classTeachers),
}));

export const classesRelations = relations(classes, ({many}) => ({
	classTeachers: many(classTeachers),
}));

export const clubMembersRelations = relations(clubMembers, ({one}) => ({
	student: one(students, {
		fields: [clubMembers.studentId],
		references: [students.id]
	}),
	club: one(clubs, {
		fields: [clubMembers.clubId],
		references: [clubs.id]
	}),
}));

export const studentsRelations = relations(students, ({many}) => ({
	clubMembers: many(clubMembers),
}));

export const clubsRelations = relations(clubs, ({many}) => ({
	clubMembers: many(clubMembers),
	timetables: many(timetable),
}));

export const timetableRelations = relations(timetable, ({one}) => ({
	club: one(clubs, {
		fields: [timetable.clubId],
		references: [clubs.id]
	}),
}));