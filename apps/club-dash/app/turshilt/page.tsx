'use client';
/* eslint-disable complexity, max-lines, @nx/workspace/jsx-no-inline-function */

import { useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client/react';
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GET_ALL_APPROVED_CLUBS, UPDATE_CLUB } from '../../libs/club-queries';
import {
  ApprovedClubsData,
  GetAllClub,
  TeacherData,
  Timetable,
} from '../../libs/types';
import { GET_ALL_TEACHERS } from '../_hooks/use-get-teachers';
import { UPDATE_TIMETABLE } from '../_components/teacher/approved/edit/timetable.mutations';

type ClubEvent = {
  clubId: string;
  clubName: string;
  description: string;
  teacherId: string;
  minMember: number;
  maxMember: number;
  type: string;
  status: string;
  timetableId: string;
  date: Date;
  room: string;
  clubStartTime: string;
  duration: number;
};

const toDate = (value: string): Date | null => {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const dateKey = (date: Date) => format(date, 'yyyy-MM-dd');

const buildMonthDays = (month: Date) => {
  const start = startOfWeek(startOfMonth(month), { weekStartsOn: 0 });
  const end = endOfWeek(endOfMonth(month), { weekStartsOn: 0 });

  const days: Date[] = [];
  let cursor = start;
  while (cursor <= end) {
    days.push(cursor);
    cursor = addDays(cursor, 1);
  }
  return days;
};

const eventFromClub = (
  club: GetAllClub,
  timetable: Timetable
): ClubEvent | null => {
  const parsedDate = toDate(timetable.date);
  if (!parsedDate) return null;

  return {
    clubId: club.id,
    clubName: club.name,
    description: club.description ?? '',
    teacherId: club.teacherId ?? '',
    minMember: club.minMember,
    maxMember: club.maxMember,
    type: club.type,
    status: club.status,
    timetableId: timetable.id,
    date: parsedDate,
    room: timetable.room,
    clubStartTime: timetable.clubStartTime,
    duration: timetable.duration,
  };
};

export default function TurshihPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const [selectedTeacherId, setSelectedTeacherId] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editRoom, setEditRoom] = useState('');
  const [editStartTime, setEditStartTime] = useState('');
  const [editDuration, setEditDuration] = useState('1');

  const [clubSaveMessage, setClubSaveMessage] = useState('');
  const [timeSaveMessage, setTimeSaveMessage] = useState('');

  const {
    data: approvedData,
    loading: loadingApproved,
    error: approvedError,
  } = useQuery<ApprovedClubsData>(GET_ALL_APPROVED_CLUBS, {
    fetchPolicy: 'cache-and-network',
  });

  const {
    data: teacherData,
    loading: loadingTeachers,
    error: teacherError,
  } = useQuery<TeacherData>(GET_ALL_TEACHERS);

  const [updateClub, { loading: savingClub }] = useMutation(UPDATE_CLUB, {
    refetchQueries: [GET_ALL_APPROVED_CLUBS],
  });

  const [updateTimetable, { loading: savingTimetable }] = useMutation(
    UPDATE_TIMETABLE,
    {
      refetchQueries: [GET_ALL_APPROVED_CLUBS],
    }
  );

  const approvedClubs = useMemo(
    () => approvedData?.getAllApprovedClubs ?? [],
    [approvedData?.getAllApprovedClubs]
  );

  const eventsByDate = useMemo(() => {
    const map = new Map<string, ClubEvent[]>();

    for (const club of approvedClubs) {
      for (const timetable of club.timetables ?? []) {
        const event = eventFromClub(club, timetable);
        if (!event) continue;

        const key = dateKey(event.date);
        const prev = map.get(key) ?? [];
        prev.push(event);
        map.set(key, prev);
      }
    }

    for (const [, events] of map) {
      events.sort((a, b) => a.clubStartTime.localeCompare(b.clubStartTime));
    }

    return map;
  }, [approvedClubs]);

  const monthDays = useMemo(() => buildMonthDays(currentMonth), [currentMonth]);

  const weeks = useMemo(() => {
    const rows: Date[][] = [];
    for (let i = 0; i < monthDays.length; i += 7) {
      rows.push(monthDays.slice(i, i + 7));
    }
    return rows;
  }, [monthDays]);

  const selectedEvents = useMemo(
    () => eventsByDate.get(dateKey(selectedDate)) ?? [],
    [eventsByDate, selectedDate]
  );

  const selectedEvent = useMemo(() => {
    if (selectedEvents.length === 0) return null;
    if (!selectedEventId) return selectedEvents[0];
    return (
      selectedEvents.find((event) => event.timetableId === selectedEventId) ??
      selectedEvents[0]
    );
  }, [selectedEvents, selectedEventId]);

  useEffect(() => {
    if (!selectedEvent) {
      setSelectedTeacherId('');
      setEditDate('');
      setEditRoom('');
      setEditStartTime('');
      setEditDuration('1');
      return;
    }

    setSelectedEventId(selectedEvent.timetableId);
    setSelectedTeacherId(selectedEvent.teacherId || '');
    setEditDate(format(selectedEvent.date, 'yyyy-MM-dd'));
    setEditRoom(selectedEvent.room || '');
    setEditStartTime(selectedEvent.clubStartTime || '');
    setEditDuration(String(selectedEvent.duration || 1));
  }, [selectedEvent]);

  const handlePrevMonth = () => {
    setCurrentMonth((m) => subMonths(m, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((m) => addMonths(m, 1));
  };

  const handleToday = () => {
    const today = new Date();
    setCurrentMonth(today);
    setSelectedDate(today);
    setClubSaveMessage('');
    setTimeSaveMessage('');
  };

  const handleSelectDate = (day: Date) => {
    setSelectedDate(day);
    const dayEvents = eventsByDate.get(dateKey(day)) ?? [];
    setSelectedEventId(dayEvents[0]?.timetableId ?? null);
    setClubSaveMessage('');
    setTimeSaveMessage('');
  };

  const handleSelectEvent = (eventId: string) => {
    setSelectedEventId(eventId);
    setClubSaveMessage('');
    setTimeSaveMessage('');
  };

  const handleSaveTeacher = async () => {
    if (!selectedEvent || !selectedTeacherId) return;

    await updateClub({
      variables: {
        input: {
          id: selectedEvent.clubId,
          teacherId: selectedTeacherId,
          status: 'approved',
        },
      },
    });

    setClubSaveMessage('Багш амжилттай шинэчлэгдлээ.');
  };

  const handleSaveTimetable = async () => {
    if (!selectedEvent) return;

    const durationAsInt = Number.parseInt(editDuration, 10);
    await updateTimetable({
      variables: {
        input: {
          id: selectedEvent.timetableId,
          date: editDate,
          room: editRoom,
          clubStartTime: editStartTime,
          duration: Number.isNaN(durationAsInt) ? 1 : durationAsInt,
        },
      },
    });

    if (editDate) {
      const movedDate = new Date(editDate);
      if (!Number.isNaN(movedDate.getTime())) {
        setSelectedDate(movedDate);
        setCurrentMonth(movedDate);
      }
    }

    setTimeSaveMessage('Хуваарь амжилттай шинэчлэгдлээ.');
  };

  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <main className="p-4 md:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold">Approved Clubs Calendar</h1>
          <p className="text-sm text-muted-foreground">
            Day box дээр дарж зүүн panel-с багш, анги, цагийг засна
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleToday}>
            Today
          </Button>
          <Button variant="outline" size="icon" onClick={handlePrevMonth}>
            <ChevronLeft size={16} />
          </Button>
          <Button variant="outline" size="icon" onClick={handleNextMonth}>
            <ChevronRight size={16} />
          </Button>
          <div className="text-sm font-semibold min-w-[130px] text-center">
            {format(currentMonth, 'yyyy MMMM')}
          </div>
        </div>
      </div>

      {(loadingApproved || loadingTeachers) && (
        <div className="rounded-lg border bg-card p-4 text-sm text-muted-foreground">
          Ачаалж байна...
        </div>
      )}

      {(approvedError || teacherError) && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          Алдаа: {approvedError?.message ?? teacherError?.message}
        </div>
      )}

      {!loadingApproved &&
        !approvedError &&
        !loadingTeachers &&
        !teacherError && (
          <div className="grid gap-4 xl:grid-cols-[360px_1fr]">
            <aside className="rounded-xl border bg-card p-4 h-fit">
              <h3 className="text-sm font-semibold mb-2">
                {format(selectedDate, 'yyyy-MM-dd')}
              </h3>

              {selectedEvents.length === 0 && (
                <p className="text-xs text-muted-foreground">
                  Энэ өдөр клубын хуваарь алга.
                </p>
              )}

              {selectedEvents.length > 0 && (
                <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
                  {selectedEvents.map((event) => (
                    <button
                      key={event.timetableId}
                      onClick={() => handleSelectEvent(event.timetableId)}
                      className={`w-full rounded-md border p-2 text-left text-xs ${
                        selectedEvent?.timetableId === event.timetableId
                          ? 'border-primary bg-primary/10'
                          : 'hover:border-primary/40'
                      }`}
                    >
                      <p className="font-medium">{event.clubName}</p>
                      <p className="text-muted-foreground">
                        {event.clubStartTime} • {event.room}
                      </p>
                    </button>
                  ))}
                </div>
              )}

              {selectedEvent && (
                <div className="space-y-3 border-t pt-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Club</p>
                    <p className="text-sm font-semibold">
                      {selectedEvent.clubName}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">Description</p>
                    <p className="text-sm">
                      {selectedEvent.description || '-'}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Members</p>
                      <p>
                        {selectedEvent.minMember} - {selectedEvent.maxMember}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Type</p>
                      <p>{selectedEvent.type}</p>
                    </div>
                  </div>

                  <div className="border-t pt-3 space-y-2">
                    <Label className="text-xs text-muted-foreground">
                      Teacher
                    </Label>
                    <Select
                      value={selectedTeacherId}
                      onValueChange={setSelectedTeacherId}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Teacher сонгох" />
                      </SelectTrigger>
                      <SelectContent>
                        {(teacherData?.getAllTeachers ?? []).map((teacher) => (
                          <SelectItem key={teacher.id} value={teacher.id}>
                            {teacher.firstName} {teacher.lastName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      className="w-full"
                      disabled={!selectedTeacherId || savingClub}
                      onClick={handleSaveTeacher}
                    >
                      {savingClub ? 'Saving...' : 'Save Teacher'}
                    </Button>
                    {clubSaveMessage && (
                      <p className="text-xs text-emerald-600">
                        {clubSaveMessage}
                      </p>
                    )}
                  </div>

                  <div className="border-t pt-3 space-y-2">
                    <Label className="text-xs text-muted-foreground">
                      Date
                    </Label>
                    <Input
                      type="date"
                      value={editDate}
                      onChange={(e) => setEditDate(e.target.value)}
                    />

                    <Label className="text-xs text-muted-foreground">
                      Room
                    </Label>
                    <Input
                      value={editRoom}
                      onChange={(e) => setEditRoom(e.target.value)}
                      placeholder="Room"
                    />

                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">
                          Start time
                        </Label>
                        <Input
                          type="time"
                          value={editStartTime}
                          onChange={(e) => setEditStartTime(e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">
                          Duration (hour)
                        </Label>
                        <Input
                          type="number"
                          min={1}
                          value={editDuration}
                          onChange={(e) => setEditDuration(e.target.value)}
                        />
                      </div>
                    </div>

                    <Button
                      className="w-full"
                      disabled={
                        !editDate ||
                        !editRoom ||
                        !editStartTime ||
                        savingTimetable
                      }
                      onClick={handleSaveTimetable}
                    >
                      {savingTimetable ? 'Saving...' : 'Save Schedule'}
                    </Button>
                    {timeSaveMessage && (
                      <p className="text-xs text-emerald-600">
                        {timeSaveMessage}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </aside>

            <section className="rounded-xl border bg-card overflow-hidden">
              <div className="grid grid-cols-7 border-b bg-muted/30">
                {dayNames.map((name) => (
                  <div
                    key={name}
                    className="border-r px-3 py-2 text-sm font-medium last:border-r-0"
                  >
                    {name}
                  </div>
                ))}
              </div>

              <div>
                {weeks.map((week, weekIndex) => (
                  <div
                    key={weekIndex}
                    className="grid grid-cols-7 border-b last:border-b-0"
                  >
                    {week.map((day) => {
                      const key = dateKey(day);
                      const dayEvents = eventsByDate.get(key) ?? [];
                      const inMonth = isSameMonth(day, currentMonth);
                      const selected = isSameDay(day, selectedDate);
                      const today = isToday(day);

                      return (
                        <button
                          key={day.toISOString()}
                          onClick={() => handleSelectDate(day)}
                          className={`min-h-[150px] border-r p-2 text-left align-top transition-colors last:border-r-0 ${
                            selected ? 'bg-primary/10' : 'hover:bg-muted/40'
                          } ${!inMonth ? 'opacity-45' : ''}`}
                        >
                          <div className="mb-2 flex items-center justify-between">
                            <span
                              className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-sm ${
                                today
                                  ? 'bg-primary text-primary-foreground'
                                  : ''
                              }`}
                            >
                              {format(day, 'd')}
                            </span>
                            {dayEvents.length > 0 && (
                              <span className="text-[11px] text-muted-foreground">
                                {dayEvents.length}
                              </span>
                            )}
                          </div>

                          <div className="space-y-1">
                            {dayEvents.slice(0, 3).map((event) => (
                              <div
                                key={event.timetableId}
                                className={`rounded border px-2 py-1 text-[11px] ${
                                  selectedEvent?.timetableId ===
                                  event.timetableId
                                    ? 'border-primary bg-primary/20'
                                    : 'border-primary/40 bg-primary/10'
                                }`}
                              >
                                <p className="font-medium leading-tight line-clamp-1">
                                  {event.clubName}
                                </p>
                                <p className="text-muted-foreground leading-tight">
                                  {event.clubStartTime}
                                </p>
                              </div>
                            ))}

                            {dayEvents.length > 3 && (
                              <p className="text-[11px] text-muted-foreground">
                                +{dayEvents.length - 3} more
                              </p>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
    </main>
  );
}
