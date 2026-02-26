PRAGMA foreign_keys = OFF;

    INSERT INTO students (
      id, authUserId, classId, studentCode, azureEmail, registerNumber, 
      personalEmail, profilePicture, firstName, lastName, phoneNumber, 
      activeStatus, gender, profileProgress, isGraduated, isAdvocator, 
      isProfileVisible, profileVisibledDate, isProfileStaged, isInternational, 
      dateOfBirth, graduatedDate, jobSeekingStatus, hasAgreedTerms
    ) VALUES (
      'c4dd7f6b-db15-4cc6-8796-91e51ad096c6', 
      NULL, 
      '3a', 
      '25LP4018', 
      '25LP4018@nest.edu.mn', 
      '╨ú╨ú00000000', 
      'oyunmyagmar.g@gmail.com', 
      'https://avatar.com/me.png', 
      'Oyunmyagmar', 
      'Ganbaatar', 
      '00000000', 
      'ACTIVE', 
      'FEMALE', 
      100, 
      0, 
      0, 
      1, 
      '2026-02-26', 
      1, 
      0, 
      '0000-00-00', 
      NULL, 
      'READY', 
      1
    );
  
PRAGMA foreign_keys = ON;
