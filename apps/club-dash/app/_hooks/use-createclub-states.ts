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

export const formatDates = (dates: Date[]): string =>
  dates
    .map((d) => format(d, 'yyyy-MM-dd'))
    .sort()
    .join(',');

export const hasDateChanged = (current: Date[], generated: Date[]): boolean =>
  formatDates(current) !== formatDates(generated);

export const getUniqueDays = (dates: Date[]): number[] =>
  Array.from(new Set(dates.map((d) => getDay(d))));

export const getDateRange = (dates: Date[], term: string) => {
  const sorted = [...dates].sort((a, b) => a.getTime() - b.getTime());
  return { start: sorted[0], end: addMonths(sorted[0], parseInt(term, 10)) };
};

export const generateClubDates = (dates: Date[], term: string): Date[] => {
  if (!dates.length) return [];
  const days = getUniqueDays(dates);
  const range = getDateRange(dates, term);
  return eachDayOfInterval(range).filter((d) => days.includes(getDay(d)));
};

export const buildScheduleChange = (
  schedule: Record<string, ScheduleChange>,
  key: string,
  field: keyof ScheduleChange,
  value: string,
  state: CreateClubState
): Record<string, ScheduleChange> => ({
  ...schedule,
  [key]: buildOverride(schedule, key, field, value, state),
});

export const shouldSync = (
  isWeekly: boolean,
  hasDates: boolean,
  isDeleting: boolean
): boolean => isWeekly && hasDates && !isDeleting;

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
  const isDeletingRef = useRef(false);
  const syncChangedDates = useCallback((current: Date[], term: string) => {
    const generated = generateClubDates(current, term);
    if (hasDateChanged(current, generated)) setClubStartDate(generated);
  }, []);
  useEffect(() => {
    const isWeekly = selectedFreqId === '2';
    const hasDates = !!clubStartDate?.length;
    if (shouldSync(isWeekly, hasDates, isDeletingRef.current)) {
      syncChangedDates(clubStartDate as Date[], clubTerm);
    }
    if (isDeletingRef.current) isDeletingRef.current = false;
  }, [clubStartDate, selectedFreqId, clubTerm, syncChangedDates]);
  const handleChange =
    (set: Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      set(e.target.value);
  const handleUpdateChange = (
    key: string,
    field: keyof ScheduleChange,
    value: string
  ) => {
    setScheduleChange((schedule) =>
      buildScheduleChange(schedule, key, field, value, {
        clubClassRoom,
        clubStartTime,
        clubDuration,
        scheduleChange,
      } as CreateClubState)
    );
  };
  const handleDeleteDate = useCallback((day: Date) => {
    const chosenDate = format(day, 'yyyy-MM-dd');
    isDeletingRef.current = true;
    setClubStartDate((dates) =>
      (dates ?? []).filter((d) => format(d, 'yyyy-MM-dd') !== chosenDate)
    );
    setScheduleChange((prev) => {
      const next = { ...prev };
      delete next[chosenDate];
      return next;
    });
  }, []);
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
