import {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { addMonths, eachDayOfInterval, getDay, format } from 'date-fns';
import { CreateClubState, ScheduleChange } from '../../../club-dash/libs/types';
import { buildOverride } from './use-create-club';

export const useCreateClubState = () => {
  const [clubName, setClubName] = useState<string>('');
  const [teacherId, setTeacherId] = useState<string>('');
  const [clubDesc, setClubDesc] = useState<string>('');
  const [clubStartDate, setClubStartDate] = useState<Date[] | undefined>([]);
  const [selectedFreqId, setSelectedFreqId] = useState<string>('1');
  const [clubTerm, setClubTerm] = useState<string>('1');
  const [clubClassRoom, setClubClassRoom] = useState<string>('301');
  const [clubStartTime, setClubStartTime] = useState<string>('13:00');
  const [clubDuration, setClubDuration] = useState<string>('1:00');
  const [clubMaxStudent, setClubMaxStudent] = useState<string>('20');
  const [clubMinStudent] = useState<string>('0');
  const [clubFrequency, setClubFrequency] = useState<string>('ONCE');
  const [scheduleChange, setScheduleChange] = useState<
    Record<string, ScheduleChange>
  >({});

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

  const syncChangedDates = useCallback(
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
      syncChangedDates(clubStartDateRef.current as Date[], clubTerm);
    }
  }, [selectedFreqId, clubTerm, syncChangedDates]);

  const handleChange =
    (set: Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      set(e.target.value);

  const handleUpdateChange = (
    key: string,
    field: keyof ScheduleChange,
    value: string
  ) => {
    setScheduleChange((schedule) => ({
      ...schedule,
      [key]: buildOverride(schedule, key, field, value, {
        clubClassRoom,
        clubStartTime,
        clubDuration,
        scheduleChange,
      } as CreateClubState),
    }));
  };

  const handleDeleteDate = (day: Date) => {
    const chosenDate = format(day, 'yyyy-MM-dd');
    setClubStartDate((dates) =>
      (dates ?? []).filter((d) => d.getTime() !== day.getTime())
    );
    setScheduleChange((dates) => {
      const next = { ...dates };
      delete next[chosenDate];
      return next;
    });
  };

  const handleEmptyFields = () => {
    setClubClassRoom('301');
    setClubDuration('1:00');
    setClubFrequency('ONCE');
    setClubStartDate([]);
    setClubStartTime('13:00');
    setClubTerm('1');
    setSelectedFreqId('1');
    setScheduleChange({});
  };

  return {
    state: {
      clubName,
      // teacherName,
      teacherId,
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
      scheduleChange,
    },
    setters: {
      // setTeacherName,
      setTeacherId,
      setClubStartDate,
      setSelectedFreqId,
      setClubTerm,
      setClubClassRoom,
      setClubStartTime,
      setClubDuration,
      setClubFrequency,
      setScheduleChange,
    },
    handlers: {
      handleName: handleChange(setClubName),
      handleDesc: handleChange(setClubDesc),
      handleMax: handleChange(setClubMaxStudent),
      handleUpdateChange,
      handleDeleteDate,
      handleEmptyFields,
    },
  };
};
