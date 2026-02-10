import { ReactNode } from 'react';

export interface SelectOption {
  l: string;
  v: string;
}

export interface CalendarSelectFieldProps {
  label: string;
  icon: ReactNode;
  value: string | number;
  onChange: (value: string) => void;
  options: (string | SelectOption)[];
}

export interface ClubFormProps {
  formData: FormDataType;
  setFormData: (data: FormDataType) => void;
  handleSubmit: () => void;
  // ЗАСВАР: selectedDate (нэг) биш selectedDates (массив) болгох
  selectedDates: Date[];
  setSelectedDates: (dates: Date[]) => void;
  currentMonth: Date;
  handleMonthChange: (offset: number) => void;
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
  setFormData: (data: FormDataType) => void;
  selectedDates: Date[];
  setSelectedDates: (dates: Date[]) => void;
  currentMonth: Date;
  handleMonthChange: (offset: number) => void;
  renderCalendarDays: () => React.ReactNode;
}
