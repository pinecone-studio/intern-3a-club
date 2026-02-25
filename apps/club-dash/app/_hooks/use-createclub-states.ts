import {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { addMonths, eachDayOfInterval, getDay } from 'date-fns';

export const useCreateClubState = () => {
  const [clubName, setClubName] = useState<string>('');
  const [teacherName, setTeacherName] = useState<string>('');
  const [clubDesc, setClubDesc] = useState<string>('');
  const [clubStartDate, setClubStartDate] = useState<Date[] | undefined>([]);
  const [selectedFreqId, setSelectedFreqId] = useState<string>('1');
  const [clubTerm, setClubTerm] = useState<string>('1');
  const [clubClassRoom, setClubClassRoom] = useState<string>('301');
  const [clubStartTime, setClubStartTime] = useState<string>('13:00');
  const [clubDuration, setClubDuration] = useState<string>('1:00');
  const [clubMaxStudent, setClubMaxStudent] = useState<string>('20');
  const [clubMinStudent] = useState<string>('5');
  const [clubFrequency, setClubFrequency] = useState<string>(
    'Зөвхөн сонгосон өдрүүдэд'
  );

  const clubStartDateRef = useRef(clubStartDate);
  clubStartDateRef.current = clubStartDate;

  const clubDates = useCallback((dates: Date[], term: string) => {
    const days = Array.from(new Set(dates.map((d) => getDay(d))));
    const sorted = [...dates].sort((a, b) => a.getTime() - b.getTime());
    const range = {
      start: sorted[0],
      end: addMonths(sorted[0], parseInt(term, 10)),
    };

    return eachDayOfInterval(range).filter((d) => days.includes(getDay(d)));
  }, []);

  const syncGeneratedDates = useCallback(
    (current: Date[], term: string) => {
      const generated = clubDates(current, term);
      const hasChanged = JSON.stringify(generated) !== JSON.stringify(current);
      if (hasChanged) {
        setClubStartDate(generated);
      }
    },
    [clubDates]
  );
  useEffect(() => {
    const isWeekly = selectedFreqId === '2';
    const hasDates = !!clubStartDateRef.current?.length;

    if (isWeekly && hasDates) {
      syncGeneratedDates(clubStartDateRef.current as Date[], clubTerm);
    }
  }, [selectedFreqId, clubTerm, syncGeneratedDates]);

  const handleChange =
    (set: Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      set(e.target.value);

  return {
    state: {
      clubName,
      teacherName,
      clubDesc,
      clubStartDate,
      selectedFreqId,
      clubTerm,
      clubClassRoom,
      clubStartTime,
      clubDuration,
      clubMaxStudent,
      clubMinStudent,
      clubFrequency,
    },
    setters: {
      setTeacherName,
      setClubStartDate,
      setSelectedFreqId,
      setClubTerm,
      setClubClassRoom,
      setClubStartTime,
      setClubDuration,
      setClubFrequency,
    },
    handlers: {
      handleName: handleChange(setClubName),
      handleDesc: handleChange(setClubDesc),
      handleMax: handleChange(setClubMaxStudent),
    },
  };
};
