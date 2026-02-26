import { randomUUID } from 'crypto';

async function seed() {
  const student = {
    id: randomUUID(),
    authUserId: null,
    classId: '3a',
    studentCode: '25LP4018',
    azureEmail: '25LP4018@nest.edu.mn',
    registerNumber: 'УУ00000000',
    personalEmail: 'oyunmyagmar.g@gmail.com',
    profilePicture: 'https://avatar.com/me.png',
    firstName: 'Oyunmyagmar',
    lastName: 'Ganbaatar',
    phoneNumber: '00000000',
    activeStatus: 'ACTIVE',
    gender: 'FEMALE',
    profileProgress: 100,
    isGraduated: 0,
    isAdvocator: 0,
    isProfileVisible: 1,
    profileVisibledDate: '2026-02-26',
    isProfileStaged: 1,
    isInternational: 0,
    dateOfBirth: '0000-00-00',
    graduatedDate: null,
    jobSeekingStatus: 'READY',
    hasAgreedTerms: 1,
  };

  // 1. Foreign Key шалгалтыг түр унтраах
  console.log('PRAGMA foreign_keys = OFF;');

  // 2. Оюутан нэмэх SQL
  const studentSql = `
    INSERT INTO students (
      id, authUserId, classId, studentCode, azureEmail, registerNumber, 
      personalEmail, profilePicture, firstName, lastName, phoneNumber, 
      activeStatus, gender, profileProgress, isGraduated, isAdvocator, 
      isProfileVisible, profileVisibledDate, isProfileStaged, isInternational, 
      dateOfBirth, graduatedDate, jobSeekingStatus, hasAgreedTerms
    ) VALUES (
      '${student.id}', 
      ${student.authUserId ?? 'NULL'}, 
      '${student.classId}', 
      '${student.studentCode}', 
      '${student.azureEmail}', 
      '${student.registerNumber}', 
      '${student.personalEmail}', 
      '${student.profilePicture}', 
      '${student.firstName}', 
      '${student.lastName}', 
      '${student.phoneNumber}', 
      '${student.activeStatus}', 
      '${student.gender}', 
      ${student.profileProgress}, 
      ${student.isGraduated}, 
      ${student.isAdvocator}, 
      ${student.isProfileVisible}, 
      '${student.profileVisibledDate}', 
      ${student.isProfileStaged}, 
      ${student.isInternational}, 
      '${student.dateOfBirth}', 
      ${student.graduatedDate ?? 'NULL'}, 
      '${student.jobSeekingStatus}', 
      ${student.hasAgreedTerms}
    );
  `;

  console.log(studentSql);

  // 3. Шалгалтыг буцааж асаах (Сурвал зохимжтой)
  console.log('PRAGMA foreign_keys = ON;');
}

seed();

setTimeout(() => {
  process.exit(0);
}, 500);
