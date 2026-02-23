import { sqliteTable, AnySQLiteColumn, foreignKey, text, real, integer } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const classTeachers = sqliteTable("class_teachers", {
	id: text().primaryKey().notNull(),
	classId: text().notNull().references(() => classes.id, { onDelete: "cascade" } ),
	teacherId: text().notNull().references(() => teachers.id, { onDelete: "cascade" } ),
	assignedAt: text().default("sql`(CURRENT_TIMESTAMP)`").notNull(),
});

export const clubMembers = sqliteTable("club_members", {
	id: text().primaryKey().notNull(),
	clubId: text().notNull().references(() => clubs.id, { onDelete: "cascade" } ),
	studentId: text().notNull().references(() => students.id, { onDelete: "cascade" } ),
	joinedAt: text().default("sql`(CURRENT_TIMESTAMP)`").notNull(),
});

export const students = sqliteTable("students", {
	id: text().primaryKey().notNull(),
	authUserId: text(),
	classId: text().notNull(),
	studentCode: text().notNull(),
	azureEmail: text().notNull(),
	registerNumber: text().notNull(),
	personalEmail: text(),
	profilePicture: text(),
	firstName: text(),
	lastName: text(),
	phoneNumber: text(),
	activeStatus: text().default("PENDING").notNull(),
	gender: text().default("OTHER"),
	profileProgress: real(),
	isGraduated: integer().default(0),
	isAdvocator: integer().default(0),
	isProfileVisible: integer().default(0),
	profileVisibledDate: text(),
	isProfileStaged: integer().default(0),
	isInternational: integer().default(0),
	dateOfBirth: text(),
	graduatedDate: text(),
	jobSeekingStatus: text(),
	hasAgreedTerms: integer().default(0),
	createdAt: text().default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	updatedAt: text().default("sql`(CURRENT_TIMESTAMP)`").notNull(),
});

export const classes = sqliteTable("classes", {
	id: text().primaryKey().notNull(),
	classNumber: text().notNull(),
	className: text().notNull(),
	classStartDate: text().default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	classEndDate: text(),
	classStartTime: text(),
	classEndTime: text(),
	course: text().default("CODING").notNull(),
	teachers: text().default("sql`(json_array())`").notNull(),
	academicYearId: text(),
	isFinished: integer().default(0),
});

export const teachers = sqliteTable("teachers", {
	id: text().primaryKey().notNull(),
	email: text().notNull(),
	name: text().notNull(),
	phoneNumber: text(),
	profilePicture: text(),
	gender: text(),
	isActive: integer().default(1),
	createdAt: text().default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	updatedAt: text().default("sql`(CURRENT_TIMESTAMP)`").notNull(),
});

export const clubs = sqliteTable("clubs", {
	id: text().primaryKey().notNull(),
	creatorId: text(),
	name: text().notNull(),
	description: text(),
	teacherId: text().references(() => teachers.id),
	minMember: integer().notNull(),
	maxMember: integer().notNull(),
	type: text().notNull(),
	preferredTeachers: text(),
	status: text().notNull(),
	createdAt: text().default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	updatedAt: text().default("sql`(CURRENT_TIMESTAMP)`").notNull(),
});

export const timetable = sqliteTable("timetable", {
	id: text().primaryKey().notNull(),
	date: text().notNull(),
	room: text().notNull(),
	clubStartTime: text().notNull(),
	duration: integer(),
	clubId: text().notNull().references(() => clubs.id, { onDelete: "cascade" } ),
	createdAt: text().default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	updatedAt: text().default("sql`(CURRENT_TIMESTAMP)`").notNull(),
});

