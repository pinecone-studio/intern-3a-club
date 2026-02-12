import { ReactNode } from 'react';

export interface SelectOption {
  l: string;
  v: string;
}

export interface CalendarSelectFieldProps {
  label: string;
  icon: ReactNode;
  value: string | number;
  onChange: (_value: string) => void; // _ нэмсэн
  options: (string | SelectOption)[];
}

export interface ClubFormProps {
  formData: FormDataType;
  setFormData: (_data: FormDataType) => void; // _ нэмсэн
  handleSubmit: () => void;
  selectedDates: Date[];
  setSelectedDates: (_dates: Date[]) => void; // _ нэмсэн
  currentMonth: Date;
  handleMonthChange: (_offset: number) => void; // _ нэмсэн
  renderCalendarDays: () => React.ReactNode;
}

export type FormDataType = {
  name: string;
  goal: string;
  teacher: string;
  time: string;
  duration: string;
  studentEmail: string;
  room: string;
  maxStudents: string;
  repeat: string;
};

export interface LogisticsSectionProps {
  formData: FormDataType;
  setFormData: (_data: FormDataType) => void; // _ нэмсэн
  selectedDates: Date[];
  setSelectedDates: (_dates: Date[]) => void; // _ нэмсэн
  currentMonth: Date;
  handleMonthChange: (_offset: number) => void; // _ нэмсэн
  renderCalendarDays: () => React.ReactNode;
}
export interface CalendarDayProps {
  day: number;

  date: Date;

  isPast: boolean;

  isSelected: boolean;

  isToday: boolean;

  onToggle: (_d: Date) => void;
}

export interface RecurrenceConfig {
  weekDays: number[];
  dayNumbers: number[];
  anchorTime: number;
}
