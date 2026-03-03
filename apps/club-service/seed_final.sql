PRAGMA foreign_keys = OFF;
DELETE FROM students;
INSERT INTO students (
  id, authUserId, classId, studentCode, azureEmail, registerNumber, 
  personalEmail, profilePicture, firstName, lastName, phoneNumber, 
  gender, activeStatus, isGraduated, graduatedDate,
  profileProgress, isAdvocator, isProfileVisible, profileVisibledDate, 
  isProfileStaged, isInternational, dateOfBirth, jobSeekingStatus, hasAgreedTerms
) VALUES (
  '955300a3-c5f9-46fb-8627-572680a0b87e', NULL, '3a', '25LP4018', 
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
  'f1c0f225-5af1-4e09-81f7-018042dbb7c3', NULL, '3a', '25LP9779', 
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
  'db3114bb-fd61-478a-9b77-88f7a9af51bb', NULL, '3a', '25LP5598', 
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
  '65741eb7-8d16-49f4-96bb-a2d82dfe92bd', NULL, '3a', '25LP6030', 
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
  '9ef2a789-9c44-451f-8961-6a87e5788259', NULL, '3a', '25LP8609', 
  'khishigdari.nb@gmail.com', '╨ú╨ú00000000', '', 
  'https://avatar.com/student_1.png', 'Khishigdari', '', 
  '00000000', 'FEMALE', 'ACTIVE', 
  0, NULL, 100, 0, 1, '2026-03-03', 1, 0, '2000-01-01', 'READY', 1
);

PRAGMA foreign_keys = ON;
