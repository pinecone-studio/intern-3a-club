import { sql } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { clubs } from './clubs.schema';
import { students } from './students.schema';

export const clubMembers = sqliteTable('club_members', {
  id: text('id').primaryKey(),
  clubId: text('clubId')
    .notNull()
    .references(() => clubs.id, { onDelete: 'cascade' }),
  studentId: text('studentId')
    .notNull()
    .references(() => students.id, { onDelete: 'cascade' }),
  joinedAt: text('joinedAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});
