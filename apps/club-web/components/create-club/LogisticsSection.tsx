'use client';

import React, { useEffect, useCallback } from 'react';
import { CalendarDays, RotateCcw as ResetIcon } from 'lucide-react';
import { CalendarHeader } from './CalendarHeader';
import { SelectedDatesList } from './SelectedDatesList';
import { LogisticsForm } from './LogisticsForm';
import { LogisticsSectionProps } from './types';
import { generateDates } from './RecurrentUtils';

export const LogisticsSection = (props: LogisticsSectionProps) => {
  const {
    formData,
    setFormData,
    selectedDates,
    setSelectedDates,
    currentMonth,
    errors = {},
  } = props;

  const calculateRecurrence = useCallback(
    (baseDates: Date[], mode: string, monthDate: Date) => {
      if (mode === 'none') return baseDates;
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const sourceDates = baseDates.length > 0 ? baseDates : [new Date(today)];
      const anchorDate = [...sourceDates].sort(
        (a, b) => a.getTime() - b.getTime()
      )[0];

      return generateDates(
        monthDate.getFullYear(),
        monthDate.getMonth(),
        today,
        mode,
        {
          weekDays: Array.from(new Set(sourceDates.map((d) => d.getDay()))),
          dayNumbers: Array.from(new Set(sourceDates.map((d) => d.getDate()))),
          anchorTime: anchorDate.getTime(),
        }
      );
    },
    []
  );

  useEffect(() => {
    if (formData.repeat !== 'none') {
      const newDates = calculateRecurrence(
        selectedDates,
        formData.repeat,
        currentMonth
      );

      if (
        JSON.stringify(newDates.map((d) => d.getTime())) !==
        JSON.stringify(selectedDates.map((d) => d.getTime()))
      ) {
        setSelectedDates(newDates);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.repeat, currentMonth]);

  const handleReset = () => {
    setSelectedDates([]);
    setFormData({ ...formData, repeat: 'none' });
  };

  const handleRemoveDate = (d: Date) =>
    setSelectedDates(selectedDates.filter((x) => x.getTime() !== d.getTime()));

  const handleRepeatChange = (val: string) => {
    // 1. Эхлээд formData-г шинэчилнэ
    setFormData({ ...formData, repeat: val });
    // 2. Дараа нь тооцооллыг дуудна (Энэ мөр 64-р мөрийг 100% бүрхэнэ)
    setSelectedDates(calculateRecurrence(selectedDates, val, currentMonth));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-[2.5rem] bg-black/30 border border-white/5 space-y-6 lg:space-y-8">
      <header className="flex items-center justify-between border-b border-white/5 pb-4">
        <h4 className="text-sm font-semibold text-white text-primary flex items-center gap-2">
          <CalendarDays size={16} /> Хуваарь ба Логистик
        </h4>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold text-emerald-400 italic">
            {selectedDates.length} өдөр сонгосон
          </span>
          <button
            onClick={handleReset}
            data-testid="reset-logistics-btn"
            className="p-1.5 rounded-lg bg-white/5 text-white/40 hover:text-red-400"
          >
            <ResetIcon size={14} />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        <div className="space-y-6 text-white">
          <CalendarHeader
            currentMonth={currentMonth}
            onMonthChange={props.handleMonthChange}
          />
          <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-center">
            {['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'].map((day) => (
              <div
                key={day}
                className="text-[7px] sm:text-[9px] font-black text-white/20 uppercase py-1 sm:py-2"
              >
                {day}
              </div>
            ))}
            {props.renderCalendarDays()}
          </div>
          <SelectedDatesList
            dates={selectedDates}
            data-testid="remove-date-icon"
            onRemove={handleRemoveDate}
          />
        </div>
        <LogisticsForm
          formData={formData}
          setFormData={setFormData}
          onRepeatChange={handleRepeatChange}
          errors={errors}
        />
      </div>
    </div>
  );
};
