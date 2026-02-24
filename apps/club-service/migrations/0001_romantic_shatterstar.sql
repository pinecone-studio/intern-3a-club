PRAGMA foreign_keys=OFF;
CREATE TABLE `__new_clubs` (
	`id` text PRIMARY KEY NOT NULL,
	`creatorId` text,
	`name` text NOT NULL,
	`description` text,
	`teacherId` text,
	`minMember` integer NOT NULL,
	`maxMember` integer NOT NULL,
	`type` text NOT NULL,
	`preferredTeachers` text,
	`status` text NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`teacherId`) REFERENCES `teachers`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_clubs`("id", "creatorId", "name", "description", "teacherId", "minMember", "maxMember", "type", "preferredTeachers", "status", "createdAt", "updatedAt") SELECT "id", "creatorId", "name", "description", "teacherId", "minMember", "maxMember", "type", "preferredTeachers", "status", "createdAt", "updatedAt" FROM `clubs`;--> statement-breakpoint
DROP TABLE `clubs`;--> statement-breakpoint
ALTER TABLE `__new_clubs` RENAME TO `clubs`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_students` (
	`id` text PRIMARY KEY NOT NULL,
	`authUserId` text,
	`classId` text NOT NULL,
	`studentCode` text NOT NULL,
	`azureEmail` text NOT NULL,
	`registerNumber` text NOT NULL,
	`personalEmail` text,
	`profilePicture` text,
	`firstName` text,
	`lastName` text,
	`phoneNumber` text,
	`activeStatus` text DEFAULT 'PENDING' NOT NULL,
	`gender` text DEFAULT 'OTHER',
	`profileProgress` real,
	`isGraduated` integer DEFAULT 0,
	`isAdvocator` integer DEFAULT 0,
	`isProfileVisible` integer DEFAULT 0,
	`profileVisibledDate` text,
	`isProfileStaged` integer DEFAULT 0,
	`isInternational` integer DEFAULT 0,
	`dateOfBirth` text,
	`graduatedDate` text,
	`jobSeekingStatus` text,
	`hasAgreedTerms` integer DEFAULT 0,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_students`("id", "authUserId", "classId", "studentCode", "azureEmail", "registerNumber", "personalEmail", "profilePicture", "firstName", "lastName", "phoneNumber", "activeStatus", "gender", "profileProgress", "isGraduated", "isAdvocator", "isProfileVisible", "profileVisibledDate", "isProfileStaged", "isInternational", "dateOfBirth", "graduatedDate", "jobSeekingStatus", "hasAgreedTerms", "createdAt", "updatedAt") SELECT "id", "authUserId", "classId", "studentCode", "azureEmail", "registerNumber", "personalEmail", "profilePicture", "firstName", "lastName", "phoneNumber", "activeStatus", "gender", "profileProgress", "isGraduated", "isAdvocator", "isProfileVisible", "profileVisibledDate", "isProfileStaged", "isInternational", "dateOfBirth", "graduatedDate", "jobSeekingStatus", "hasAgreedTerms", "createdAt", "updatedAt" FROM `students`;--> statement-breakpoint
DROP TABLE `students`;--> statement-breakpoint
ALTER TABLE `__new_students` RENAME TO `students`;--> statement-breakpoint
CREATE TABLE `__new_classes` (
	`id` text PRIMARY KEY NOT NULL,
	`classNumber` text NOT NULL,
	`className` text NOT NULL,
	`classStartDate` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`classEndDate` text,
	`classStartTime` text,
	`classEndTime` text,
	`course` text DEFAULT 'CODING' NOT NULL,
	`teachers` text DEFAULT (json_array()) NOT NULL,
	`academicYearId` text,
	`isFinished` integer DEFAULT 0
);
--> statement-breakpoint
INSERT INTO `__new_classes`("id", "classNumber", "className", "classStartDate", "classEndDate", "classStartTime", "classEndTime", "course", "teachers", "academicYearId", "isFinished") SELECT "id", "classNumber", "className", "classStartDate", "classEndDate", "classStartTime", "classEndTime", "course", "teachers", "academicYearId", "isFinished" FROM `classes`;--> statement-breakpoint
DROP TABLE `classes`;--> statement-breakpoint
ALTER TABLE `__new_classes` RENAME TO `classes`;--> statement-breakpoint
CREATE TABLE `__new_teachers` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`phoneNumber` text,
	`profilePicture` text,
	`gender` text,
	`isActive` integer DEFAULT 1,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_teachers`("id", "email", "name", "phoneNumber", "profilePicture", "gender", "isActive", "createdAt", "updatedAt") SELECT "id", "email", "name", "phoneNumber", "profilePicture", "gender", "isActive", "createdAt", "updatedAt" FROM `teachers`;--> statement-breakpoint
DROP TABLE `teachers`;--> statement-breakpoint
ALTER TABLE `__new_teachers` RENAME TO `teachers`;--> statement-breakpoint
CREATE TABLE `__new_class_teachers` (
	`id` text PRIMARY KEY NOT NULL,
	`classId` text NOT NULL,
	`teacherId` text NOT NULL,
	`assignedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`classId`) REFERENCES `classes`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`teacherId`) REFERENCES `teachers`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_class_teachers`("id", "classId", "teacherId", "assignedAt") SELECT "id", "classId", "teacherId", "assignedAt" FROM `class_teachers`;--> statement-breakpoint
DROP TABLE `class_teachers`;--> statement-breakpoint
ALTER TABLE `__new_class_teachers` RENAME TO `class_teachers`;--> statement-breakpoint
CREATE TABLE `__new_club_members` (
	`id` text PRIMARY KEY NOT NULL,
	`clubId` text NOT NULL,
	`studentId` text NOT NULL,
	`joinedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`clubId`) REFERENCES `clubs`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_club_members`("id", "clubId", "studentId", "joinedAt") SELECT "id", "clubId", "studentId", "joinedAt" FROM `club_members`;--> statement-breakpoint
DROP TABLE `club_members`;--> statement-breakpoint
ALTER TABLE `__new_club_members` RENAME TO `club_members`;--> statement-breakpoint
CREATE TABLE `__new_timetable` (
	`id` text PRIMARY KEY NOT NULL,
	`date` text NOT NULL,
	`room` text NOT NULL,
	`clubStartTime` text NOT NULL,
	`duration` integer,
	`clubId` text NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`clubId`) REFERENCES `clubs`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_timetable`("id", "date", "room", "clubStartTime", "duration", "clubId", "createdAt", "updatedAt") SELECT "id", "date", "room", "clubStartTime", "duration", "clubId", "createdAt", "updatedAt" FROM `timetable`;--> statement-breakpoint
DROP TABLE `timetable`;--> statement-breakpoint
ALTER TABLE `__new_timetable` RENAME TO `timetable`;

PRAGMA foreign_keys=ON;