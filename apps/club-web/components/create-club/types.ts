//apps/club-web/components/create-club/types.ts
import { ReactNode } from 'react';

export interface CreateClubWithSchedulesResponse {
  createClubWithSchedules: {
    id: string;
    name: string;
  } | null;
}

export interface SelectOption {
  l: string;
  v: string;
}

export interface GetAllTeacher {
  id: string;
  firstName: string;
  lastName?: string;
  profilePicture?: string;
}

export interface CalendarSelectFieldProps {
  label: string;
  icon: ReactNode;
  value: string | number;
  onChange: (_value: string) => void;
  options: (string | SelectOption)[];
  error?: string;
}

export interface ClubFormProps {
  formData: FormDataType;
  handleFormChange: (_name: string, _value: string) => void;
  handleSubmit: () => Promise<void>;
  errors: Record<string, string>;
  loading: boolean;
}

export type FormDataType = {
  name: string;
  goal: string;
};

export interface LogisticsSectionProps {
  formData: FormDataType;
  setFormData: (_data: FormDataType) => void;
  selectedDates: Date[];
  setSelectedDates: (_dates: Date[]) => void;
  currentMonth: Date;
  handleMonthChange: (_offset: number) => void;
  renderCalendarDays: () => React.ReactNode;
  errors?: Record<string, string>;
}

export interface Step1Props {
  formData: FormDataType;
  // name болон value авдаг функц болгож өөрчлөх
  setFormData: (_name: string, _value: string) => void;
  errors: Record<string, string>; // ? (optional)-ийг нь болиулбал хэрэглэхэд амар
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

export const INITIAL_FORM_DATA: FormDataType = {
  name: '',
  goal: '',
};

export interface CreateClubInput {
  input: {
    name: string;
    description: string;
    type: string;
    minMember: number;
    maxMember: number;
  };
  schedules: string[];
  frequency: string;
}
