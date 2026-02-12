import { sqliteTable, index, check, text, real, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

// --- STUDENTS TABLE ---
export const students = sqliteTable("students", {
    id: text("id").primaryKey(),
    authUserId: text("authUserId"),
    classId: text("classId").notNull(),
    studentCode: text("studentCode").notNull(),
    azureEmail: text("azureEmail").notNull(),
    registerNumber: text("registerNumber").notNull(),
    personalEmail: text("personalEmail"),
    profilePicture: text("profilePicture"),
    firstName: text("firstName"),
    lastName: text("lastName"),
    phoneNumber: text("phoneNumber"),
    activeStatus: text("activeStatus").default("PENDING").notNull(),
    gender: text("gender").default("OTHER"),
    profileProgress: real("profileProgress"),
    isGraduated: integer("isGraduated").default(0),
    isAdvocator: integer("isAdvocator").default(0),
    isProfileVisible: integer("isProfileVisible").default(0),
    profileVisibledDate: text("profileVisibledDate"),
    isProfileStaged: integer("isProfileStaged").default(0),
    isInternational: integer("isInternational").default(0),
    dateOfBirth: text("dateOfBirth"),
    graduatedDate: text("graduatedDate"),
    jobSeekingStatus: text("jobSeekingStatus"),
    hasAgreedTerms: integer("hasAgreedTerms").default(0),
    createdAt: text("createdAt").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: text("updatedAt").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
},
);

// --- CLASSES TABLE ---
export const classes = sqliteTable("classes", {
    id: text("id").primaryKey(),
    classNumber: text("classNumber").notNull(),
    className: text("className").notNull(),
    classStartDate: text("classStartDate").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    classEndDate: text("classEndDate"),
    classStartTime: text("classStartTime"),
    classEndTime: text("classEndTime"),
    course: text("course").default("CODING").notNull(),
    teachers: text("teachers").default(sql`(json_array())`).notNull(),
    academicYearId: text("academicYearId"),
    isFinished: integer("isFinished").default(0),
},
);

// --- TEACHERS TABLE ---
export const teachers = sqliteTable("teachers", {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    name: text("name").notNull(),
    phoneNumber: text("phoneNumber"),
    profilePicture: text("profilePicture"),
    gender: text("gender"),
    isActive: integer("isActive").default(1),
    createdAt: text("createdAt").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: text("updatedAt").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
},
);

// --- CLUBS TABLE ---
export const clubs = sqliteTable("clubs", {
    id: text("id").primaryKey(),
    creatorId: text("creatorId"),
    name: text("name").notNull(),
    description: text("description"),
    teacherId: text("teacherId"),
    minMember: integer("minMember"),
    maxMember: integer("maxMember"),
    type: text("type").notNull(),
    preferredTeacher: text("preferredTeacher"),
    status: text("status").default("pending").notNull(),
    createdAt: text("createdAt").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: text("updatedAt").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
},
);

// --- INTERMEDIATE TABLES (JOINS) ---
export const classTeachers = sqliteTable("class_teachers", {
    id: text("id").primaryKey(),
    classId: text("classId").notNull().references(() => classes.id, { onDelete: "cascade" } ),
    teacherId: text("teacherId").notNull().references(() => teachers.id, { onDelete: "cascade" } ),
    assignedAt: text("assignedAt").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});

export const clubMembers = sqliteTable("club_members", {
    id: text("id").primaryKey(),
    clubId: text("clubId").notNull().references(() => clubs.id, { onDelete: "cascade" } ),
    studentId: text("studentId").notNull().references(() => students.id, { onDelete: "cascade" } ),
    joinedAt: text("joinedAt").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});

export const timetable = sqliteTable("timetable", {
    id: text("id").primaryKey(),
    date: text("date").notNull(),
    clubStartTime: text("clubStartTime"),
    clubEndTime: text("clubEndTime"),
    room: integer("room"),
    duration: integer("duration"),
    clubId: text("clubId").notNull().references(() => clubs.id, { onDelete: "cascade" } ),
    createdAt: text("createdAt").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: text("updatedAt").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});