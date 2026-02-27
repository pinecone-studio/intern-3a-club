import { sqliteTable, text, real, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const teachers = sqliteTable('teachers', {
  id: text('id').primaryKey(),
  authUserId: text('authUserId'),
  azureEmail: text('azureEmail').notNull(),
  personalEmail: text('personalEmail'),
  profilePicture: text('profilePicture'),
  firstName: text('firstName'),
  lastName: text('lastName'),
  phoneNumber: text('phoneNumber'),
  gender: text('gender', { enum: ['FEMALE', 'MALE', 'OTHER'] }).default(
    'OTHER'
  ),
  isActive: integer('isActive').default(1),
  createdAt: text('createdAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: text('updatedAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull()
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});

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
  activeStatus: text('activeStatus', {
    enum: ['ACTIVE', 'ARCHIVED', 'PENDING', 'DROPOUT'],
  })
    .default('ACTIVE')
    .notNull(),
  gender: text('gender', { enum: ['FEMALE', 'MALE', 'OTHER'] }).default(
    'OTHER'
  ),
  profileProgress: real('profileProgress'),
  isGraduated: integer('isGraduated').default(0),
  isAdvocator: integer('isAdvocator').default(0),
  isProfileVisible: integer('isProfileVisible').default(0),
  profileVisibledDate: text('profileVisibledDate'),
  isProfileStaged: integer('isProfileStaged').default(0),
  isInternational: integer('isInternational').default(0),
  dateOfBirth: text('dateOfBirth'),
  graduatedDate: text('graduatedDate'),
  jobSeekingStatus: text('jobSeekingStatus', {
    enum: ['READY', 'OPEN_TO_OFFER', 'UNAVAILABLE'],
  }),
  hasAgreedTerms: integer('hasAgreedTerms').default(0),
  createdAt: text('createdAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: text('updatedAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull()
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});

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
  frequency: text('frequency').notNull(),
  clubTerm: text('clubTerm'),
  createdAt: text('createdAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: text('updatedAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull()
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});

export const timetable = sqliteTable('timetable', {
  id: text('id').primaryKey(),
  date: text('date').notNull(),
  classroom: text('classroom').notNull(),
  startTime: text('startTime').notNull(),
  duration: integer('duration'),
  clubId: text('clubId')
    .notNull()
    .references(() => clubs.id, { onDelete: 'cascade' }),
  createdAt: text('createdAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: text('updatedAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull()
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});

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
  updatedAt: text('updatedAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull()
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});

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

export const classTeachers = sqliteTable('class_teachers', {
  id: text('id').primaryKey(),
  classId: text('classId')
    .notNull()
    .references(() => classes.id, { onDelete: 'cascade' }),
  teacherId: text('teacherId')
    .notNull()
    .references(() => teachers.id, { onDelete: 'cascade' }),
  assignedAt: text('assignedAt')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});
