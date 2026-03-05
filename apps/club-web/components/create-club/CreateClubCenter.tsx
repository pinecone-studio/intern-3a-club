'use client';
import { useState, useCallback, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client/react';

import { ClubForm } from './ClubForm';
import { HeaderSection } from './HeaderSection';
import { SideSection } from './SideSection';
import { CalendarDay } from './CalendarDay';
import { buildMutationVariables } from './create-club-helpers';
import { GET_ALL_CLUBS, GET_ALL_TEACHERS } from '../../lib/type';
import { CREATE_CLUB_WITH_SCHEDULE } from '../../graphql/mutations';
import {
  FormDataType,
  INITIAL_FORM_DATA,
  GetAllTeacher,
  CreateClubWithSchedulesResponse,
} from './types';
import { handleMutationResult } from './create-club-helpers';

export const CreateClubCenter = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState<FormDataType>(INITIAL_FORM_DATA);
  const [createClub] = useMutation<CreateClubWithSchedulesResponse>(
    CREATE_CLUB_WITH_SCHEDULE,
    { refetchQueries: [{ query: GET_ALL_CLUBS }], errorPolicy: 'all' }
  );
  const { data: teacherData } = useQuery<{ getAllTeachers: GetAllTeacher[] }>(
    GET_ALL_TEACHERS
  );
  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const handleMonthChange = useCallback((offset: number) => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + offset, 1)
    );
  }, []);

  const toggleDate = useCallback((date: Date) => {
    const dateStr = date.toDateString();
    setSelectedDates((prev) => {
      const exists = prev.find((d) => d.toDateString() === dateStr);
      if (exists) return prev.filter((d) => d.toDateString() !== dateStr);
      return [...prev, date].sort((a, b) => a.getTime() - b.getTime());
    });
  }, []);

  const renderCalendarDays = useCallback(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysCount = new Date(year, month + 1, 0).getDate();
    const emptyDays = Array.from({ length: firstDay }, (_, i) => (
      <div key={`empty-${i}`} className="h-10 w-10" />
    ));

    return [
      ...emptyDays,
      ...Array.from({ length: daysCount }, (_, i) => {
        const date = new Date(year, month, i + 1);
        const isSelected = selectedDates.some(
          (sd) => sd.toDateString() === date.toDateString()
        );
        return (
          <CalendarDay
            key={i + 1}
            day={i + 1}
            date={date}
            isPast={date < today}
            isSelected={isSelected}
            isToday={today.toDateString() === date.toDateString()}
            onToggle={toggleDate}
          />
        );
      }),
    ];
  }, [currentMonth, selectedDates, today, toggleDate]);

  const handleReset = useCallback(() => {
    alert('Клуб амжилттай үүслээ');
    setFormData(INITIAL_FORM_DATA);
    setSelectedDates([]);
    setCurrentMonth(new Date());
  }, []);
  const requestMutation = async () => {
    const res = await createClub({
      variables: buildMutationVariables(formData, selectedDates),
    });
    return handleMutationResult(res, handleReset);
  };
  const executeSubmission = async () => {
    try {
      return await requestMutation();
    } catch (err: unknown) {
      const msg = (err as Error)?.message || 'Алдаа гарлаа';
      alert(`Алдаа гарлаа: ${msg}`);
      return { success: false, message: msg };
    }
  };

  const onFormSubmit = async () => {
    if (selectedDates.length === 0) {
      alert('Огноо сонгоно уу');
      return { success: false, message: 'Огноо сонгоно уу' };
    }
    return executeSubmission();
  };
  // console.log('formData', formData);
  return (
    <div className="max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-12 relative z-10 min-h-screen">
      <HeaderSection
        title="Клуб Нээх"
        subtitle="Шинэ клуб нээх хүсэлт болон хуваарь илгээх."
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mt-4 sm:mt-6 items-start">
        <div className="lg:col-span-7">
          <ClubForm
            formData={formData}
            setFormData={setFormData}
            selectedDates={selectedDates}
            setSelectedDates={setSelectedDates}
            currentMonth={currentMonth}
            handleMonthChange={handleMonthChange}
            renderCalendarDays={renderCalendarDays}
            handleSubmit={onFormSubmit}
            teachers={teacherData?.getAllTeachers || []}
          />
        </div>
        <SideSection />
      </div>
    </div>
  );
};
