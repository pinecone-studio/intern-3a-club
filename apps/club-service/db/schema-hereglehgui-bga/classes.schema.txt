import { sql } from 'drizzle-orm';
import { integer } from 'drizzle-orm/gel-core';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const classes = sqliteTable('classes', {
  id: text('id').primaryKey(),
  classNumber: text('classNumber').notNull(),
  className: text('className').notNull(),
  classStartDate: text('classStartDate')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  classEndDate: text('classEndDate'),
  classStartTime: text('classStartTime'),
  classEndTime: text('classEndTime'),
  course: text('course').default('CODING').notNull(),
  teachers: text('teachers')
    .default(sql`(json_array())`)
    .notNull(),
  academicYearId: text('academicYearId'),
  isFinished: integer('isFinished').default(0),
});
