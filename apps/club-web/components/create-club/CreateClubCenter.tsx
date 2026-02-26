'use client';
import { useState, useCallback, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client/react';
import { ClubForm } from './ClubForm';
import { HeaderSection } from './HeaderSection';
import { FormDataType, INITIAL_FORM_DATA, GetAllTeacher } from './types';
import { GET_ALL_CLUBS, GET_ALL_TEACHERS } from '../../lib/type';
import { MyClubsList } from '../club-add/PersonalClubs';
import { RequestHistory } from '../club-add/RequestHistory';
import { SystemTip } from '../club-add/SystemTip';
import { CREATE_CLUB_WITH_SCHEDULE } from '../../graphql/mutations';
import { toast } from 'sonner';
import { CalendarDay } from './CalendarDay';
import {
  calculateTotalMinutes,
  getDayNames,
  getFrequency,
  getMinMax,
  formatDate,
} from './create-club-helpers';
export const CreateClubCenter = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState<FormDataType>(INITIAL_FORM_DATA);
  const [createClub] = useMutation(CREATE_CLUB_WITH_SCHEDULE, {
    refetchQueries: [{ query: GET_ALL_CLUBS }],
  });

  const { data: teacherData } = useQuery<{
    getAllTeachers: GetAllTeacher[];
  }>(GET_ALL_TEACHERS);
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
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
      if (exists) {
        return prev.filter((d) => d.toDateString() !== dateStr);
      }
      return [...prev, date].sort((a, b) => a.getTime() - b.getTime());
    });
  }, []);
  const renderCalendarDays = useCallback(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonthCount = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
    }

    const todayStr = today.toDateString();

    for (let d = 1; d <= daysInMonthCount; d++) {
      const date = new Date(year, month, d);
      const isSelected = selectedDates.some(
        (sd) => sd.toDateString() === date.toDateString()
      );

      days.push(
        <CalendarDay
          key={d}
          day={d}
          date={date}
          isPast={date < today}
          isSelected={isSelected}
          isToday={todayStr === date.toDateString()}
          onToggle={toggleDate}
        />
      );
    }
    return days;
  }, [currentMonth, selectedDates, today, toggleDate]);

  const getMutationVariables = () => ({
    input: {
      name: formData.name,
      description: formData.goal,
      type: 'mentor',
      teacherId: formData.teacher === 'student' ? null : formData.teacher,
      minMember: getMinMax(formData.minStudents),
      maxMember: getMinMax(formData.maxStudents),
    },
    startDate: selectedDates[0] ? formatDate(selectedDates[0]) : '',
    classroom: formData.room,
    startTime: formData.time,
    duration: calculateTotalMinutes(formData.duration),
    frequency: getFrequency(formData.repeat),
    selectedDays: getDayNames(selectedDates),
  });

  const onFormSubmit = async () => {
    const variables = getMutationVariables();
    if (selectedDates.length === 0) {
      toast.error('Огноо сонгоно уу');
      return;
    }

    try {
      await createClub({
        variables,
        onCompleted: () => {
          toast.success('Клуб амжилттай үүслээ');
          setFormData(INITIAL_FORM_DATA);
          setSelectedDates([]);
          setCurrentMonth(new Date());
        },
        onError: (err) => toast.error(`Алдаа гарлаа: ${err.message}`),
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto p-6 lg:p-10 relative z-10 min-h-screen">
      <HeaderSection
        title="Клуб Нээх"
        subtitle="Шинэ клуб нээх хүсэлт болон хуваарь илгээх."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
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
        <div className="lg:col-span-5 space-y-8">
          <MyClubsList />
          <RequestHistory />
          <SystemTip />
        </div>
      </div>
    </div>
  );
};
