import React from 'react';
import { CalendarDay } from './CalendarDay';

interface CalendarGridProps {
    currentMonth: Date;
    selectedDates: Date[];
    today: Date;
    toggleDate: (_date: Date) => void;
}

export const CalendarGrid = ({
    currentMonth,
    selectedDates,
    today,
    toggleDate,
}: CalendarGridProps) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dateStr = date.toDateString();
        const isPast = date < today;
        const isSelected = !!selectedDates.find((d) => d.toDateString() === dateStr);
        const isToday = date.toDateString() === today.toDateString();

        days.push(
            <CalendarDay
                key={day}
                day={day}
                date={date}
                isPast={isPast}
                isSelected={isSelected}
                isToday={isToday}
                onToggle={toggleDate}
            />
        );
    }

    return <>{days}</>;
};
