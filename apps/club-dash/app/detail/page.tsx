'use client';

import { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { format } from 'date-fns';

import { GET_ALL_APPROVED_CLUBS } from '../../libs/club-queries';
import { ApprovedClubsData } from '../../libs/types';

import { buildMonthDays } from './utils/calendar.utils';
import { useCalendarEvents } from './hook/useCalendarEvents';

import { CalendarHeader } from './_components/CalendarHeader';
import { CalendarGrid } from './_components/CalendarGrid';
import { EventSidebar } from './_components/EventSidebar';

export default function TurshihPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { data } = useQuery<ApprovedClubsData>(GET_ALL_APPROVED_CLUBS);

  const approvedClubs = data?.getAllApprovedClubs ?? [];

  const eventsByDate = useCalendarEvents(approvedClubs);

  // month days
  const monthDays = buildMonthDays(currentMonth);

  // build weeks
  const weeks = useMemo(() => {
    const rows: Date[][] = [];

    for (let i = 0; i < monthDays.length; i += 7) {
      rows.push(monthDays.slice(i, i + 7));
    }

    return rows;
  }, [monthDays]);

  const selectedEvents = useMemo(() => {
    const key = format(selectedDate, 'yyyy-MM-dd');
    return eventsByDate.get(key) ?? [];
  }, [eventsByDate, selectedDate]);

  const selectedEvent = selectedEvents[0] ?? null;

  return (
    <main className="p-6">
      <CalendarHeader
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />

      <div className="grid gap-4 xl:grid-cols-[320px_1fr]">
        {/* Sidebar */}
        <EventSidebar
          selectedDate={selectedDate}
          selectedEvents={selectedEvents}
          selectedEvent={selectedEvent}
        />

        {/* Month Calendar */}
        <CalendarGrid
          weeks={weeks}
          eventsByDate={eventsByDate}
          onSelect={setSelectedDate}
        />
      </div>
    </main>
  );
}
