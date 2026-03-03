import { randomUUID } from 'crypto';

async function seed() {
  // --- 1. ОЮУТНУУДЫН ДАТА ---
  const students = [
    {
      id: randomUUID(),
      classId: '3a',
      studentCode: '25LP4018',
      azureEmail: 'davaasuren7932@gmail.com',
      registerNumber: 'УУ00000000',
      personalEmail: '',
      profilePicture: 'https://avatar.com/student_1.png',
      firstName: 'Davaasuren',
      lastName: '',
      phoneNumber: '00000000',
      gender: 'FEMALE',
      activeStatus: 'ACTIVE',
    },
    {
      id: randomUUID(),
      classId: '3a',
      studentCode: '25LP9779',
      azureEmail: 'nnaso0275@gmail.com',
      registerNumber: 'UU00000000',
      personalEmail: '',
      profilePicture: 'https://avatar.com/student_2.png',
      firstName: 'Naransolongo',
      lastName: '',
      phoneNumber: '00000000',
      gender: 'FEMALE',
      activeStatus: 'ACTIVE',
    },
    {
      id: randomUUID(),
      classId: '3a',
      studentCode: '25LP5598',
      azureEmail: 'hbbaatar@gmail.com',
      registerNumber: 'УУ00000000',
      personalEmail: '',
      profilePicture: 'https://avatar.com/student_1.png',
      firstName: 'Khatanbaatar',
      lastName: '',
      phoneNumber: '00000000',
      gender: 'MALE',
      activeStatus: 'ACTIVE',
    },
    {
      id: randomUUID(),
      classId: '3a',
      studentCode: '25LP6030',
      azureEmail: 'battsooj1010@gmail.com',
      registerNumber: 'УУ00000000',
      personalEmail: '',
      profilePicture: 'https://avatar.com/student_1.png',
      firstName: 'Battsooj',
      lastName: '',
      phoneNumber: '00000000',
      gender: 'MALE',
      activeStatus: 'ACTIVE',
    },
    {
      id: randomUUID(),
      classId: '3a',
      studentCode: '25LP8609',
      azureEmail: 'khishigdari.nb@gmail.com',
      registerNumber: 'УУ00000000',
      personalEmail: '',
      profilePicture: 'https://avatar.com/student_1.png',
      firstName: 'Khishigdari',
      lastName: '',
      phoneNumber: '00000000',
      gender: 'FEMALE',
      activeStatus: 'ACTIVE',
    },
  ];

  // --- 2. БАГШ НАРЫН ДАТА (Нийт 11 багш) ---
  const teachers = [
    {
      id: randomUUID(),
      azureEmail: 'erdenetsogt.a@pinecone.mn',
      firstName: 'Erdenetsogt',
      lastName: 'Amgalanbaatar',
      phoneNumber: '99359299',
      gender: 'MALE',
    },
    {
      id: randomUUID(),
      azureEmail: 'bilguun.b@nest.edu.mn',
      firstName: 'Bilguun',
      lastName: 'Battugs',
      phoneNumber: '00000000',
      gender: 'MALE',
    },
    {
      id: randomUUID(),
      azureEmail: 'Bilguundul.B@nest.edu.mn',
      firstName: 'Bilguundul',
      lastName: 'Bayarsaikhan',
      phoneNumber: '88322339',
      gender: 'MALE',
    },
    {
      id: randomUUID(),
      azureEmail: 'Narantsatsralt.B@nest.edu.mn',
      firstName: 'Narantsatsralt',
      lastName: 'Bumnasan',
      phoneNumber: '99974374',
      gender: 'MALE',
    },
    {
      id: randomUUID(),
      azureEmail: 'Batmunkh.A@nest.edu.mn',
      firstName: 'Batmunkh',
      lastName: 'Ariunbold',
      phoneNumber: '94651523',
      gender: 'MALE',
    },
    {
      id: randomUUID(),
      azureEmail: 'elbeg@nestsolutions.llc',
      firstName: 'Elbeg-Amar',
      lastName: 'Amar',
      phoneNumber: '00000000',
      gender: 'MALE',
    },
    {
      id: randomUUID(),
      azureEmail: 'Javkhlantugs.B@nest.edu.mn',
      firstName: 'Javkhlantugs',
      lastName: 'Batmanlai',
      phoneNumber: '90353089',
      gender: 'MALE',
    },
    {
      id: randomUUID(),
      azureEmail: '25LP0350@nest.edu.mn',
      firstName: 'Sodbilegt',
      lastName: 'S',
      phoneNumber: '00000000',
      gender: 'MALE',
    },
    {
      id: randomUUID(),
      azureEmail: '25LP8609@nest.edu.mn',
      firstName: 'Khishigdari',
      lastName: 'Naranbaatar',
      phoneNumber: '00000000',
      gender: 'FEMALE',
    },
    {
      id: randomUUID(),
      azureEmail: 'oyunmyagmar.g@gmail.com',
      firstName: 'Oyunmyagmar',
      lastName: 'Ganbaatar',
      phoneNumber: '99192615',
      gender: 'FEMALE',
    },
    {
      id: randomUUID(),
      azureEmail: 'tsetsegulziiocherdene@gmail.com',
      firstName: 'Ocherdene',
      lastName: 'Tsetsegulzii',
      phoneNumber: '88703020',
      gender: 'MALE',
    },
  ];

  console.log('PRAGMA foreign_keys = OFF;');

  // --- 3. ОЮУТНУУДЫГ INSERT ХИЙХ SQL ---
  students.forEach((s) => {
    const studentSql = `
INSERT INTO students (
  id, authUserId, classId, studentCode, azureEmail, registerNumber, 
  personalEmail, profilePicture, firstName, lastName, phoneNumber, 
  gender, activeStatus, isGraduated, graduatedDate,
  profileProgress, isAdvocator, isProfileVisible, profileVisibledDate, 
  isProfileStaged, isInternational, dateOfBirth, jobSeekingStatus, hasAgreedTerms
) VALUES (
  '${s.id}', NULL, '${s.classId}', '${s.studentCode}', 
  '${s.azureEmail}', '${s.registerNumber}', '${s.personalEmail}', 
  '${s.profilePicture}', '${s.firstName}', '${s.lastName}', 
  '${s.phoneNumber}', '${s.gender}', '${s.activeStatus}', 
  0, NULL, 100, 0, 1, '2026-03-03', 1, 0, '2000-01-01', 'READY', 1
);`;
    console.log(studentSql);
  });

  // --- 4. БАГШ НАРЫГ INSERT ХИЙХ SQL ---
  teachers.forEach((t) => {
    const teacherSql = `
INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture, 
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '${t.id}', NULL, '${t.azureEmail}', NULL, 
  'https://avatar.com/teacher_placeholder.png', '${t.firstName}', 
  '${t.lastName}', '${t.phoneNumber}', '${t.gender}', 1
);`;
    console.log(teacherSql);
  });

  console.log('PRAGMA foreign_keys = ON;');
}

seed().catch((err) => {
  console.error('Seed error:', err);
  process.exit(1);
});

setTimeout(() => process.exit(0), 500);
