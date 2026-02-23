import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { teachers } from './teachers.schema';

export const clubs = sqliteTable('clubs', {
  id: text('id').primaryKey(),
  creatorId: text('creatorId'),
  name: text('name').notNull(),
  description: text('description'),
  teacherId: text('teacherId').references(() => teachers.id),
  minMember: integer('minMember').notNull(),
  maxMember: integer('maxMember').notNull(),
  type: text('type').notNull(),
  preferredTeachers: text('preferredTeachers', { mode: 'json' }).$type<
    string[]
  >(),
  status: text('status').notNull(),
  createdAt: text('createdAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: text('updatedAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});
