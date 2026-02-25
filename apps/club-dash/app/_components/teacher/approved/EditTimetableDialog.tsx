'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useMutation } from '@apollo/client/react';
import { Dialog } from '@intern-3a-club/shadcn';
import {
  UPDATE_TIMETABLE,
  parseDate,
  formatDate,
  fmt,
  mins,
  findTimetableConflict,
  getConflictDates,
  shouldAbortSave,
  type EditTimetableDialogProps,
  type Timetable,
} from './edit-timetable-utils';
import { EditTimetableDialogContent } from './EditTimetableDialogContent';

function applyFoundToState(
  setActive: (_t: Timetable | null) => void,
  setRoom: (_v: string) => void,
  setTime: (_v: string) => void,
  setDuration: (_v: string) => void,
  found: Timetable
) {
  setActive(found);
  setRoom(found.room);
  setTime(found.clubStartTime);
  setDuration(fmt(found.duration));
}

export const EditTimetableDialog = ({
  open,
  onClose,
  timetables,
  mockClassroom,
  mockStartTime,
  mockDuration,
  allTimetables,
}: EditTimetableDialogProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [active, setActive] = useState<Timetable | null>(null);
  const [room, setRoom] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [updateTimetable, { loading }] = useMutation(UPDATE_TIMETABLE);

  const highlighted = useMemo(
    () => timetables.map((t) => parseDate(t.date)),
    [timetables]
  );

  const handleSelectDate = useCallback(
    (d?: Date) => {
      if (!d) return;
      setSelectedDate(d);
      const found = timetables.find(
        (t) => formatDate(parseDate(t.date)) === formatDate(d)
      );
      if (found) {
        applyFoundToState(setActive, setRoom, setTime, setDuration, found);
      }
    },
    [timetables]
  );

  useEffect(() => {
    if (!open || timetables.length === 0) return;
    handleSelectDate(parseDate(timetables[0].date));
  }, [open, handleSelectDate, timetables]);

  const handleDialogOpenChange = useCallback(
    (isOpen: boolean) => {
      if (!isOpen) onClose();
    },
    [onClose]
  );

  const executeUpdateAndClose = useCallback(async () => {
    if (!active || !selectedDate) return;
    await updateTimetable({
      variables: {
        input: {
          id: active.id,
          date: formatDate(selectedDate),
          room,
          clubStartTime: time,
          duration: mins(duration),
        },
      },
    });
    alert('Амжилттай шинэчлэгдлээ');
    onClose();
  }, [active, selectedDate, room, time, duration, updateTimetable, onClose]);

  const checkConflict = useCallback(() => {
    if (!active || !selectedDate) return null;
    return findTimetableConflict(
      allTimetables,
      active,
      formatDate(selectedDate),
      room,
      time,
      duration
    );
  }, [allTimetables, active, selectedDate, room, time, duration]);

  const handleSave = useCallback(async () => {
    if (
      shouldAbortSave(active, selectedDate, () => checkConflict() || undefined)
    )
      return;
    await executeUpdateAndClose();
  }, [active, selectedDate, checkConflict, executeUpdateAndClose]);

  const conflictDates = useMemo(
    () =>
      getConflictDates(
        allTimetables,
        active,
        selectedDate,
        room,
        time,
        duration
      ),
    [allTimetables, active, selectedDate, room, time, duration]
  );

  return (
    <Dialog open={open} onOpenChange={handleDialogOpenChange}>
      <EditTimetableDialogContent
        selectedDate={selectedDate}
        onSelectDate={handleSelectDate}
        highlighted={highlighted}
        conflictDates={conflictDates}
        active={active}
        room={room}
        time={time}
        duration={duration}
        onRoomChange={setRoom}
        onTimeChange={setTime}
        onDurationChange={setDuration}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
        onSave={handleSave}
        saving={loading}
      />
    </Dialog>
  );
};
