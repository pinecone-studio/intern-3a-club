import { randomUUID } from 'crypto';

async function seed() {
  // --- 1. ОЮУТНЫ ДАТА (Одоо эдгээр утгуудыг эндээс удирдаж болно) ---
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
    gender: 'FEMALE',
    activeStatus: 'ACTIVE',
    isGraduated: 0,
    graduatedDate: null, // Төгсөөгүй бол null эсвэл 'YYYY-MM-DD'
  };

  // --- 2. БАГШ НАРЫН ДАТА (Нийт 10 багш) ---
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

  // 3. ОЮУТАН ОРУУЛАХ SQL
  // Тогтмол утгуудыг (100, READY гэх мэт) шууд VALUES-т нь хадгалав
  const studentSql = `
INSERT INTO students (
  id, authUserId, classId, studentCode, azureEmail, registerNumber, 
  personalEmail, profilePicture, firstName, lastName, phoneNumber, 
  gender, activeStatus, isGraduated, graduatedDate,
  profileProgress, isAdvocator, isProfileVisible, profileVisibledDate, 
  isProfileStaged, isInternational, dateOfBirth, jobSeekingStatus, hasAgreedTerms
) VALUES (
  '${student.id}', NULL, '${student.classId}', '${student.studentCode}', 
  '${student.azureEmail}', '${student.registerNumber}', '${
    student.personalEmail
  }', 
  '${student.profilePicture}', '${student.firstName}', '${student.lastName}', 
  '${student.phoneNumber}', '${student.gender}', '${student.activeStatus}', 
  ${student.isGraduated}, ${
    student.graduatedDate ? `'${student.graduatedDate}'` : 'NULL'
  },
  100, 0, 1, '2026-02-26', 1, 0, '2000-01-01', 'READY', 1
);`;
  console.log(studentSql);

  // 4. БАГШ НАРЫГ ОРУУЛАХ SQL
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
