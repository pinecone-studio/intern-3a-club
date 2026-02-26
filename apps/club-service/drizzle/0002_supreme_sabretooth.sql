PRAGMA foreign_keys=OFF;--> statement-breakpoint
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
INSERT INTO `__new_students`("id", "authUserId", "classId", "studentCode", "azureEmail", "registerNumber", "personalEmail", "profilePicture", "firstName", "lastName", "phoneNumber", "activeStatus", "gender", "profileProgress", "isGraduated", "isAdvocator", "isProfileVisible", "profileVisibledDate", "isProfileStaged", "isInternational", "dateOfBirth", "graduatedDate", "jobSeekingStatus", "hasAgreedTerms", "createdAt", "updatedAt") SELECT "id", "authUserId", "classId", "studentCode", "azureEmail", "registerNumber", "personalEmail", "profilePicture", "firstName", "lastName", "phoneNumber", "activeStatus", "gender", "profileProgress", "isGraduated", "isAdvocator", "isProfileVisible", "profileVisibledDate", "isProfileStaged", "isInternational", "dateOfBirth", "graduatedDate", "jobSeekingStatus", "hasAgreedTerms", "createdAt", "updatedAt" FROM `students`;--> statement-breakpoint
DROP TABLE `students`;--> statement-breakpoint
ALTER TABLE `__new_students` RENAME TO `students`;--> statement-breakpoint
PRAGMA foreign_keys=ON;