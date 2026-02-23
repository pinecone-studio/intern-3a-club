import { sql } from 'drizzle-orm';
import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const students = sqliteTable('students', {
  id: text('id').primaryKey(),
  authUserId: text('authUserId'),
  classId: text('classId').notNull(),
  studentCode: text('studentCode').notNull(),
  azureEmail: text('azureEmail').notNull(),
  registerNumber: text('registerNumber').notNull(),
  personalEmail: text('personalEmail'),
  profilePicture: text('profilePicture'),
  firstName: text('firstName'),
  lastName: text('lastName'),
  phoneNumber: text('phoneNumber'),
  activeStatus: text('activeStatus').default('PENDING').notNull(),
  gender: text('gender').default('OTHER'),
  profileProgress: real('profileProgress'),
  isGraduated: integer('isGraduated').default(0),
  isAdvocator: integer('isAdvocator').default(0),
  isProfileVisible: integer('isProfileVisible').default(0),
  profileVisibledDate: text('profileVisibledDate'),
  isProfileStaged: integer('isProfileStaged').default(0),
  isInternational: integer('isInternational').default(0),
  dateOfBirth: text('dateOfBirth'),
  graduatedDate: text('graduatedDate'),
  jobSeekingStatus: text('jobSeekingStatus'),
  hasAgreedTerms: integer('hasAgreedTerms').default(0),
  createdAt: text('createdAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: text('updatedAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});
