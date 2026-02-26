PRAGMA foreign_keys = OFF;

INSERT INTO students (
  id, authUserId, classId, studentCode, azureEmail, registerNumber, 
  personalEmail, profilePicture, firstName, lastName, phoneNumber, 
  gender, activeStatus, isGraduated, graduatedDate,
  profileProgress, isAdvocator, isProfileVisible, profileVisibledDate, 
  isProfileStaged, isInternational, dateOfBirth, jobSeekingStatus, hasAgreedTerms
) VALUES (
  '438829e2-400d-425f-a286-4e7bd39dc198', NULL, '3a', '25LP4018', 
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
  'd2883336-9230-4413-91c8-5b7738cb48c4', NULL, 'erdenetsogt.a@pinecone.mn', NULL, 
  'https://avatar.com/teacher_placeholder.png', 'Erdenetsogt', 
  'Amgalanbaatar', '99359299', 'MALE', 1
);

INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture, 
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  'e8315878-0c4b-4388-b43c-37390938e64f', NULL, 'bilguun.b@nest.edu.mn', NULL, 
  'https://avatar.com/teacher_placeholder.png', 'Bilguun', 
  'Battugs', '00000000', 'MALE', 1
);

INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture, 
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '4a91e870-ebdf-4447-acfa-9579123898b5', NULL, 'Bilguundul.B@nest.edu.mn', NULL, 
  'https://avatar.com/teacher_placeholder.png', 'Bilguundul', 
  'Bayarsaikhan', '88322339', 'MALE', 1
);

INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture, 
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '25388a72-c6a7-4a7f-adbb-0d172037ffa0', NULL, 'Narantsatsralt.B@nest.edu.mn', NULL, 
  'https://avatar.com/teacher_placeholder.png', 'Narantsatsralt', 
  'Bumnasan', '99974374', 'MALE', 1
);

INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture, 
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '8baa483a-1c71-4c78-9904-ffd68831296d', NULL, 'Batmunkh.A@nest.edu.mn', NULL, 
  'https://avatar.com/teacher_placeholder.png', 'Batmunkh', 
  'Ariunbold', '94651523', 'MALE', 1
);

INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture, 
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  'a3d31bff-e4cd-4d3e-9fd8-22df27d80f5c', NULL, 'elbeg@nestsolutions.llc', NULL, 
  'https://avatar.com/teacher_placeholder.png', 'Elbeg-Amar', 
  'Amar', '00000000', 'MALE', 1
);

INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture, 
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '1e822163-d563-4e85-ba6e-d09bdaef449d', NULL, 'Javkhlantugs.B@nest.edu.mn', NULL, 
  'https://avatar.com/teacher_placeholder.png', 'Javkhlantugs', 
  'Batmanlai', '90353089', 'MALE', 1
);

INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture, 
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '16e09fa2-7071-4a58-9ac0-a814b9fd2fa2', NULL, '25LP0350@nest.edu.mn', NULL, 
  'https://avatar.com/teacher_placeholder.png', 'Sodbilegt', 
  'S', '00000000', 'MALE', 1
);

INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture, 
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '9352b6fa-8211-4d1b-b2ec-ecc8cdfad3d6', NULL, '25LP8609@nest.edu.mn', NULL, 
  'https://avatar.com/teacher_placeholder.png', 'Khishigdari', 
  'Naranbaatar', '00000000', 'FEMALE', 1
);

INSERT INTO teachers (
  id, authUserId, azureEmail, personalEmail, profilePicture, 
  firstName, lastName, phoneNumber, gender, isActive
) VALUES (
  '3ef5495a-376e-4502-8c5e-8a1dc9e6f5a8', NULL, 'oyunmyagmar.g@gmail.com', NULL, 
  'https://avatar.com/teacher_placeholder.png', 'Oyunmyagmar', 
  'Ganbaatar', '99192615', 'FEMALE', 1
);
PRAGMA foreign_keys = ON;
