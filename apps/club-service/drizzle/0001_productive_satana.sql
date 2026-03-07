PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_clubs` (
	`id` text PRIMARY KEY NOT NULL,
	`creatorId` text,
	`name` text NOT NULL,
	`description` text,
	`teacherId` text,
	`minMember` integer,
	`maxMember` integer,
	`type` text,
	`preferredTeachers` text,
	`status` text DEFAULT 'pending',
	`frequency` text,
	`clubTerm` text,
	`startDate` text,
	`endDate` text,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`teacherId`) REFERENCES `teachers`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_clubs`("id", "creatorId", "name", "description", "teacherId", "minMember", "maxMember", "type", "preferredTeachers", "status", "frequency", "clubTerm", "startDate", "endDate", "createdAt", "updatedAt") SELECT "id", "creatorId", "name", "description", "teacherId", "minMember", "maxMember", "type", "preferredTeachers", "status", "frequency", "clubTerm", "startDate", "endDate", "createdAt", "updatedAt" FROM `clubs`;--> statement-breakpoint
DROP TABLE `clubs`;--> statement-breakpoint
ALTER TABLE `__new_clubs` RENAME TO `clubs`;--> statement-breakpoint
PRAGMA foreign_keys=ON;