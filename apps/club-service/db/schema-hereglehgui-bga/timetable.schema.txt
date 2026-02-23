import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { clubs } from './clubs.schema';

export const timetable = sqliteTable('timetable', {
  id: text('id').primaryKey(),
  date: text('date').notNull(),
  room: text('room').notNull(),
  clubStartTime: text('clubStartTime').notNull(),
  duration: integer('duration'),
  clubId: text('clubId')
    .notNull()
    .references(() => clubs.id, { onDelete: 'cascade' }),
  createdAt: text('createdAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: text('updatedAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});
