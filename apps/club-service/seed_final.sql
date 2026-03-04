PRAGMA foreign_keys = OFF;

DELETE FROM students;

INSERT INTO students (
  id, authUserId, classId, studentCode, azureEmail, registerNumber, 
  personalEmail, profilePicture, firstName, lastName, phoneNumber, 
  gender, activeStatus, isGraduated, graduatedDate,
  profileProgress, isAdvocator, isProfileVisible, profileVisibledDate, 
  isProfileStaged, isInternational, dateOfBirth, jobSeekingStatus, hasAgreedTerms
) VALUES (
  'fe6c2923-85eb-40b3-a2f8-84689016dc9a', NULL, '3a', '25LP4018', 
  'davaasuren7932@gmail.com', '╨ú╨ú00000000', '', 
  'https://avatar.com/student_1.png', 'Davaasuren', '', 
  '00000000', 'FEMALE', 'ACTIVE', 
  0, NULL, 100, 0, 1, '2026-03-03', 1, 0, '2000-01-01', 'READY', 1
);

INSERT INTO students (
  id, authUserId, classId, studentCode, azureEmail, registerNumber, 
  personalEmail, profilePicture, firstName, lastName, phoneNumber, 
  gender, activeStatus, isGraduated, graduatedDate,
  profileProgress, isAdvocator, isProfileVisible, profileVisibledDate, 
  isProfileStaged, isInternational, dateOfBirth, jobSeekingStatus, hasAgreedTerms
) VALUES (
  'b96dbbd1-bab9-4a7e-8707-63d5e1e5ee00', NULL, '3a', '25LP9779', 
  'nnaso0275@gmail.com', 'UU00000000', '', 
  'https://avatar.com/student_2.png', 'Naransolongo', '', 
  '00000000', 'FEMALE', 'ACTIVE', 
  0, NULL, 100, 0, 1, '2026-03-03', 1, 0, '2000-01-01', 'READY', 1
);

INSERT INTO students (
  id, authUserId, classId, studentCode, azureEmail, registerNumber, 
  personalEmail, profilePicture, firstName, lastName, phoneNumber, 
  gender, activeStatus, isGraduated, graduatedDate,
  profileProgress, isAdvocator, isProfileVisible, profileVisibledDate, 
  isProfileStaged, isInternational, dateOfBirth, jobSeekingStatus, hasAgreedTerms
) VALUES (
  '86dc0cd1-7626-455e-a976-f083948a9b82', NULL, '3a', '25LP5598', 
  'hbbaatar@gmail.com', '╨ú╨ú00000000', '', 
  'https://avatar.com/student_1.png', 'Khatanbaatar', '', 
  '00000000', 'MALE', 'ACTIVE', 
  0, NULL, 100, 0, 1, '2026-03-03', 1, 0, '2000-01-01', 'READY', 1
);

INSERT INTO students (
  id, authUserId, classId, studentCode, azureEmail, registerNumber, 
  personalEmail, profilePicture, firstName, lastName, phoneNumber, 
  gender, activeStatus, isGraduated, graduatedDate,
  profileProgress, isAdvocator, isProfileVisible, profileVisibledDate, 
  isProfileStaged, isInternational, dateOfBirth, jobSeekingStatus, hasAgreedTerms
) VALUES (
  'dabf231b-75de-4884-b52c-f77fe62a69ec', NULL, '3a', '25LP6030', 
  'battsooj1010@gmail.com', '╨ú╨ú00000000', '', 
  'https://avatar.com/student_1.png', 'Battsooj', '', 
  '00000000', 'MALE', 'ACTIVE', 
  0, NULL, 100, 0, 1, '2026-03-03', 1, 0, '2000-01-01', 'READY', 1
);

INSERT INTO students (
  id, authUserId, classId, studentCode, azureEmail, registerNumber, 
  personalEmail, profilePicture, firstName, lastName, phoneNumber, 
  gender, activeStatus, isGraduated, graduatedDate,
  profileProgress, isAdvocator, isProfileVisible, profileVisibledDate, 
  isProfileStaged, isInternational, dateOfBirth, jobSeekingStatus, hasAgreedTerms
) VALUES (
  'aa0ba0eb-454d-4ef5-93b6-abd18b666071', NULL, '3a', '25LP8609', 
  'khishigdari.nb@gmail.com', '╨ú╨ú00000000', '', 
  'https://avatar.com/student_1.png', 'Khishigdari', '', 
  '00000000', 'FEMALE', 'ACTIVE', 
  0, NULL, 100, 0, 1, '2026-03-03', 1, 0, '2000-01-01', 'READY', 1
);

INSERT INTO students (
  id, authUserId, classId, studentCode, azureEmail, registerNumber, 
  personalEmail, profilePicture, firstName, lastName, phoneNumber, 
  gender, activeStatus, isGraduated, graduatedDate,
  profileProgress, isAdvocator, isProfileVisible, profileVisibledDate, 
  isProfileStaged, isInternational, dateOfBirth, jobSeekingStatus, hasAgreedTerms
) VALUES (
  '0f11d908-7352-4234-98db-0d4e8615dc0d', NULL, '3a', '25LP4098', 
  '25LP4098@nest.edu.mn', 'UU00000000', '', 
  'https://avatar.com/student_1.png', 'Och-Erdene', '', 
  '00000000', 'MALE', 'ACTIVE', 
  0, NULL, 100, 0, 1, '2026-03-03', 1, 0, '2000-01-01', 'READY', 1
);

PRAGMA foreign_keys = ON;
