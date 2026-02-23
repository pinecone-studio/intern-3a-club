import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';

export const useCreateClubState = () => {
  const [clubName, setClubName] = useState<string>('');
  const [teacherName, setTeacherName] = useState<string>('');
  const [clubDesc, setClubDesc] = useState<string>('');
  const [clubStartDate, setClubStartDate] = useState<Date | undefined>(
    undefined
  );
  const [clubFrequency, setClubFrequency] = useState<string>('ONCE');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedFreqId, setSelectedFreqId] = useState<string>('1');
  const [clubClassRoom, setClubClassRoom] = useState<string>('301');
  const [clubStartTime, setClubStartTime] = useState<string>('13:00');
  const [clubDuration, setClubDuration] = useState<string>('1:00');
  const [clubMaxStudent, setClubMaxStudent] = useState<string>('20');
  const [clubMinStudent, setClubMinStudent] = useState<string>('5');

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
      selectedDays,
      selectedFreqId,
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
      setSelectedDays,
      setSelectedFreqId,
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
