import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';

export const useCreateClubState = () => {
  const [clubName, setClubName] = useState('');
  const [teacherName, setTeacherName] = useState(''); // String утга авна
  const [clubDesc, setClubDesc] = useState('');
  const [clubStartDate, setClubStartDate] = useState<Date | undefined>(
    undefined
  );
  const [clubFrequency, setClubFrequency] = useState('');
  const [clubClassRoom, setClubClassRoom] = useState('');
  const [clubStartTime, setClubStartTime] = useState('');
  const [clubDuration, setClubDuration] = useState('');
  const [clubMaxStudent, setClubMaxStudent] = useState('');
  const [clubMinStudent, setClubMinStudent] = useState('');

  const handleChange =
    (setter: Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setter(e.target.value);

  return {
    state: {
      clubName,
      teacherName,
      clubDesc,
      clubStartDate,
      clubFrequency,
      clubClassRoom,
      clubStartTime,
      clubDuration,
      clubMaxStudent,
      clubMinStudent,
    },
    setters: {
      setTeacherName,
      setClubStartDate,
      setClubFrequency,
      setClubClassRoom,
      setClubStartTime,
      setClubDuration,
    },
    handlers: {
      handleName: handleChange(setClubName),
      handleDesc: handleChange(setClubDesc),
      handleMax: handleChange(setClubMaxStudent),
      handleMin: handleChange(setClubMinStudent),
    },
  };
};
