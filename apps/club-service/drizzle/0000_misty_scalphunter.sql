CREATE TABLE `class_teachers` (
	`id` text PRIMARY KEY NOT NULL,
	`classId` text NOT NULL,
	`teacherId` text NOT NULL,
	`assignedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`classId`) REFERENCES `classes`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`teacherId`) REFERENCES `teachers`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `classes` (
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
CREATE TABLE `club_members` (
	`id` text PRIMARY KEY NOT NULL,
	`clubId` text NOT NULL,
	`studentId` text NOT NULL,
	`joinedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`clubId`) REFERENCES `clubs`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `clubs` (
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
	`frequency` text NOT NULL,
	`clubTerm` text,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`teacherId`) REFERENCES `teachers`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `students` (
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
	`activeStatus` text DEFAULT 'ACTIVE' NOT NULL,
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
CREATE TABLE `teachers` (
	`id` text PRIMARY KEY NOT NULL,
	`authUserId` text,
	`azureEmail` text NOT NULL,
	`personalEmail` text,
	`profilePicture` text,
	`firstName` text,
	`lastName` text,
	`phoneNumber` text,
	`gender` text DEFAULT 'OTHER',
	`isActive` integer DEFAULT 1,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `timetable` (
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
