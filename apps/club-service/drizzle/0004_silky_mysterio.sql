ALTER TABLE `club_members` ADD `updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL;--> statement-breakpoint
ALTER TABLE `clubs` ADD `frequency` text NOT NULL;--> statement-breakpoint
ALTER TABLE `clubs` ADD `clubTerm` text;--> statement-breakpoint
ALTER TABLE `timetable` ADD `classroom` text NOT NULL;--> statement-breakpoint
ALTER TABLE `timetable` ADD `startTime` text NOT NULL;--> statement-breakpoint
ALTER TABLE `timetable` DROP COLUMN `room`;--> statement-breakpoint
ALTER TABLE `timetable` DROP COLUMN `clubStartTime`;