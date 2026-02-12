-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `students` (
	`id` text PRIMARY KEY,
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
	`profileProgress` real DEFAULT 0,
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
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT "students_check_1" CHECK(activeStatus IN ('ACTIVE', 'ARCHIVED', 'PENDING', 'DROPOUT'),
	CONSTRAINT "students_check_2" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "students_check_3" CHECK(jobSeekingStatus IN ('READY', 'OPEN_TO_OFFER', 'UNAVAILABLE'),
	CONSTRAINT "classes_check_4" CHECK(course IN ('CODING', 'DESIGN'),
	CONSTRAINT "teachers_check_5" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "clubs_check_6" CHECK(type IN ('self', 'mentor'),
	CONSTRAINT "clubs_check_7" CHECK(status IN ('pending', 'approved', 'declined')
);
--> statement-breakpoint
CREATE INDEX `student_code_idx` ON `students` (`studentCode`);--> statement-breakpoint
CREATE INDEX `student_phone_number_idx` ON `students` (`phoneNumber`);--> statement-breakpoint
CREATE INDEX `students_first_name_idx` ON `students` (`firstName`);--> statement-breakpoint
CREATE TABLE `classes` (
	`id` text PRIMARY KEY,
	`classNumber` text NOT NULL,
	`className` text NOT NULL,
	`classStartDate` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`classEndDate` text,
	`classStartTime` text,
	`classEndTime` text,
	`course` text DEFAULT 'CODING' NOT NULL,
	`teachers` text DEFAULT (json_array()) NOT NULL,
	`academicYearId` text,
	`isFinished` integer DEFAULT 0,
	CONSTRAINT "students_check_1" CHECK(activeStatus IN ('ACTIVE', 'ARCHIVED', 'PENDING', 'DROPOUT'),
	CONSTRAINT "students_check_2" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "students_check_3" CHECK(jobSeekingStatus IN ('READY', 'OPEN_TO_OFFER', 'UNAVAILABLE'),
	CONSTRAINT "classes_check_4" CHECK(course IN ('CODING', 'DESIGN'),
	CONSTRAINT "teachers_check_5" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "clubs_check_6" CHECK(type IN ('self', 'mentor'),
	CONSTRAINT "clubs_check_7" CHECK(status IN ('pending', 'approved', 'declined')
);
--> statement-breakpoint
CREATE INDEX `class_course_idx` ON `classes` (`course`);--> statement-breakpoint
CREATE INDEX `class_number_idx` ON `classes` (`classNumber`);--> statement-breakpoint
CREATE TABLE `teachers` (
	`id` text PRIMARY KEY,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`phoneNumber` text,
	`profilePicture` text,
	`gender` text,
	`isActive` integer DEFAULT 1,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT "students_check_1" CHECK(activeStatus IN ('ACTIVE', 'ARCHIVED', 'PENDING', 'DROPOUT'),
	CONSTRAINT "students_check_2" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "students_check_3" CHECK(jobSeekingStatus IN ('READY', 'OPEN_TO_OFFER', 'UNAVAILABLE'),
	CONSTRAINT "classes_check_4" CHECK(course IN ('CODING', 'DESIGN'),
	CONSTRAINT "teachers_check_5" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "clubs_check_6" CHECK(type IN ('self', 'mentor'),
	CONSTRAINT "clubs_check_7" CHECK(status IN ('pending', 'approved', 'declined')
);
--> statement-breakpoint
CREATE INDEX `teacher_email_idx` ON `teachers` (`email`);--> statement-breakpoint
CREATE TABLE `class_teachers` (
	`id` text PRIMARY KEY,
	`classId` text NOT NULL,
	`teacherId` text NOT NULL,
	`assignedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`teacherId`) REFERENCES `teachers`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`classId`) REFERENCES `classes`(`id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "students_check_1" CHECK(activeStatus IN ('ACTIVE', 'ARCHIVED', 'PENDING', 'DROPOUT'),
	CONSTRAINT "students_check_2" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "students_check_3" CHECK(jobSeekingStatus IN ('READY', 'OPEN_TO_OFFER', 'UNAVAILABLE'),
	CONSTRAINT "classes_check_4" CHECK(course IN ('CODING', 'DESIGN'),
	CONSTRAINT "teachers_check_5" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "clubs_check_6" CHECK(type IN ('self', 'mentor'),
	CONSTRAINT "clubs_check_7" CHECK(status IN ('pending', 'approved', 'declined')
);
--> statement-breakpoint
CREATE INDEX `class_teacher_teacher_idx` ON `class_teachers` (`teacherId`);--> statement-breakpoint
CREATE INDEX `class_teacher_class_idx` ON `class_teachers` (`classId`);--> statement-breakpoint
CREATE TABLE `clubs` (
	`id` text PRIMARY KEY,
	`creatorId` text,
	`name` text NOT NULL,
	`description` text,
	`teacherId` text,
	`minMember` integer,
	`maxMember` integer,
	`type` text NOT NULL,
	`preferredTeacher` text,
	`status` text DEFAULT 'pending' NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT "students_check_1" CHECK(activeStatus IN ('ACTIVE', 'ARCHIVED', 'PENDING', 'DROPOUT'),
	CONSTRAINT "students_check_2" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "students_check_3" CHECK(jobSeekingStatus IN ('READY', 'OPEN_TO_OFFER', 'UNAVAILABLE'),
	CONSTRAINT "classes_check_4" CHECK(course IN ('CODING', 'DESIGN'),
	CONSTRAINT "teachers_check_5" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "clubs_check_6" CHECK(type IN ('self', 'mentor'),
	CONSTRAINT "clubs_check_7" CHECK(status IN ('pending', 'approved', 'declined')
);
--> statement-breakpoint
CREATE INDEX `club_teacher_idx` ON `clubs` (`teacherId`);--> statement-breakpoint
CREATE INDEX `club_type_idx` ON `clubs` (`type`);--> statement-breakpoint
CREATE INDEX `club_status_idx` ON `clubs` (`status`);--> statement-breakpoint
CREATE TABLE `club_members` (
	`id` text PRIMARY KEY,
	`clubId` text NOT NULL,
	`studentId` text NOT NULL,
	`joinedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`clubId`) REFERENCES `clubs`(`id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "students_check_1" CHECK(activeStatus IN ('ACTIVE', 'ARCHIVED', 'PENDING', 'DROPOUT'),
	CONSTRAINT "students_check_2" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "students_check_3" CHECK(jobSeekingStatus IN ('READY', 'OPEN_TO_OFFER', 'UNAVAILABLE'),
	CONSTRAINT "classes_check_4" CHECK(course IN ('CODING', 'DESIGN'),
	CONSTRAINT "teachers_check_5" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "clubs_check_6" CHECK(type IN ('self', 'mentor'),
	CONSTRAINT "clubs_check_7" CHECK(status IN ('pending', 'approved', 'declined')
);
--> statement-breakpoint
CREATE INDEX `club_members_student_idx` ON `club_members` (`studentId`);--> statement-breakpoint
CREATE INDEX `club_members_club_idx` ON `club_members` (`clubId`);--> statement-breakpoint
CREATE TABLE `timetable` (
	`id` text PRIMARY KEY,
	`date` text NOT NULL,
	`clubStartTime` text,
	`clubEndTime` text,
	`room` integer,
	`duration` integer,
	`clubId` text NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`clubId`) REFERENCES `clubs`(`id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "students_check_1" CHECK(activeStatus IN ('ACTIVE', 'ARCHIVED', 'PENDING', 'DROPOUT'),
	CONSTRAINT "students_check_2" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "students_check_3" CHECK(jobSeekingStatus IN ('READY', 'OPEN_TO_OFFER', 'UNAVAILABLE'),
	CONSTRAINT "classes_check_4" CHECK(course IN ('CODING', 'DESIGN'),
	CONSTRAINT "teachers_check_5" CHECK(gender IN ('FEMALE', 'MALE', 'OTHER'),
	CONSTRAINT "clubs_check_6" CHECK(type IN ('self', 'mentor'),
	CONSTRAINT "clubs_check_7" CHECK(status IN ('pending', 'approved', 'declined')
);
--> statement-breakpoint
CREATE INDEX `timetable_date_idx` ON `timetable` (`date`);--> statement-breakpoint
CREATE INDEX `timetable_club_idx` ON `timetable` (`clubId`);
*/