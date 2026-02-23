import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const teachers = sqliteTable('teachers', {
  id: text('id').primaryKey(),
  email: text('email').notNull(),
  name: text('name').notNull(),
  phoneNumber: text('phoneNumber'),
  profilePicture: text('profilePicture'),
  gender: text('gender'),
  isActive: integer('isActive').default(1),
  createdAt: text('createdAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: text('updatedAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});
