PRAGMA foreign_keys = OFF;
 
DELETE FROM timetable;
DELETE FROM clubs;
DELETE FROM teachers;
DELETE FROM students;
 
INSERT INTO students (
  id, authUserId, classId, studentCode, azureEmail, registerNumber,
  personalEmail, profilePicture, firstName, lastName, phoneNumber,
  gender, activeStatus, isGraduated, graduatedDate,
  profileProgress, isAdvocator, isProfileVisible, profileVisibledDate,
  isProfileStaged, isInternational, dateOfBirth, jobSeekingStatus, hasAgreedTerms
) VALUES (
  '169a744a-e6a5-44b3-b199-14ab7c5f7800', NULL, '3a', '25LP4018',
  '25LP4018@nest.edu.mn', '╨ú╨ú00000000', 'oyunmyagmar.g@gmail.com',
  'https://avatar.com/me.png', 'Oyunmyagmar', 'Ganbaatar',
  '00000000', 'FEMALE', 'ACTIVE',
  0, NULL,
  100, 0, 1, '2026-02-26', 1, 0, '2000-01-01', 'READY', 1
);
 
INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture,
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '3dc965d0-cbf9-41a4-a118-39af61cf3b40', NULL, 'erdenetsogt.a@pinecone.mn', NULL,
  'https://avatar.com/teacher_placeholder.png', 'Erdenetsogt',
  'Amgalanbaatar', '99359299', 'MALE', 1
);
 
INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture,
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '78b1c2e4-8ba2-4682-bf2c-84b50630afc4', NULL, 'bilguun.b@nest.edu.mn', NULL,
  'https://avatar.com/teacher_placeholder.png', 'Bilguun',
  'Battugs', '00000000', 'MALE', 1
);
 
INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture,
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '5f6ce242-48b3-4e10-b70b-8b1121232dc9', NULL, 'Bilguundul.B@nest.edu.mn', NULL,
  'https://avatar.com/teacher_placeholder.png', 'Bilguundul',
  'Bayarsaikhan', '88322339', 'MALE', 1
);
 
INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture,
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '6457a8af-4485-4ad9-80d8-a17145f1ebc7', NULL, 'Narantsatsralt.B@nest.edu.mn', NULL,
  'https://avatar.com/teacher_placeholder.png', 'Narantsatsralt',
  'Bumnasan', '99974374', 'MALE', 1
);
 
INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture,
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '065db078-bfca-4db8-b48c-bf3a61d54826', NULL, 'Batmunkh.A@nest.edu.mn', NULL,
  'https://avatar.com/teacher_placeholder.png', 'Batmunkh',
  'Ariunbold', '94651523', 'MALE', 1
);
 
INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture,
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  'cb2337d5-d508-4209-903f-6e2089aac5fd', NULL, 'elbeg@nestsolutions.llc', NULL,
  'https://avatar.com/teacher_placeholder.png', 'Elbeg-Amar',
  'Amar', '00000000', 'MALE', 1
);
 
INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture,
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  'bc64c79c-8d13-4aea-8830-dfc604c37b9f', NULL, 'Javkhlantugs.B@nest.edu.mn', NULL,
  'https://avatar.com/teacher_placeholder.png', 'Javkhlantugs',
  'Batmanlai', '90353089', 'MALE', 1
);
 
INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture,
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '25c40486-d831-4276-81ef-80d1d1e380a6', NULL, 'nbhishgee22@gmail.com', NULL,
  'https://avatar.com/teacher_placeholder.png', 'Khishigdari',
  'Naranbaatar', '00000000', 'FEMALE', 1
);
 
INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture,
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  'b45a979a-5e26-44de-b2ce-9fb55ef21864', NULL, 'oyunmyagmar.g@gmail.com', NULL,
  'https://avatar.com/teacher_placeholder.png', 'Oyunmyagmar',
  'Ganbaatar', '99192615', 'FEMALE', 1
);
 
INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture,
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '08be5894-19b1-4503-8945-30c5b4f3328b', NULL, 'b.sodbilegt11@gmail.com', NULL,
  'https://avatar.com/teacher_placeholder.png', 'Sodbilegt',
  '', '00000000', 'MALE', 1
);
 
INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture,
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  'c38acff8-b6e6-40bb-8f15-dcf16eef2179', NULL, 'tsetsegulziiocherden@gmail.com', NULL,
  'https://avatar.com/teacher_placeholder.png', 'Och-Erdene',
  '', '00000000', 'MALE', 1
);
PRAGMA foreign_keys = ON;
 
