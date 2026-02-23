import { CreateClubWithSchedulesArgs } from './type';
import { getNextDateOfDay } from './date.util';

export const resolveSchedules = (
  args: CreateClubWithSchedulesArgs,
  clubId: string
) => {
  const { startDate, classroom, startTime, duration, frequency, selectedDays } =
    args;
  const common = {
    clubId,
    room: classroom,
    clubStartTime: startTime,
    duration,
  };

  if (frequency === 'ONCE' || !selectedDays?.length) {
    return [{ id: crypto.randomUUID(), date: startDate, ...common }];
  }

  return selectedDays.map((day) => ({
    id: crypto.randomUUID(),
    date: getNextDateOfDay(startDate, day),
    ...common,
  }));
};
