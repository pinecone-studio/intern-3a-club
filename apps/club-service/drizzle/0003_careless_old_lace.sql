PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_teachers` (
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
INSERT INTO `__new_teachers`("id", "authUserId", "azureEmail", "personalEmail", "profilePicture", "firstName", "lastName", "phoneNumber", "gender", "isActive", "createdAt", "updatedAt") SELECT "id", "authUserId", "azureEmail", "personalEmail", "profilePicture", "firstName", "lastName", "phoneNumber", "gender", "isActive", "createdAt", "updatedAt" FROM `teachers`;--> statement-breakpoint
DROP TABLE `teachers`;--> statement-breakpoint
ALTER TABLE `__new_teachers` RENAME TO `teachers`;--> statement-breakpoint
PRAGMA foreign_keys=ON;