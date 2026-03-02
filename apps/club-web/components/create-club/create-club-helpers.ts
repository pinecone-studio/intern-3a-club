import { FormDataType, CreateClubWithSchedulesResponse } from './types';

export const calculateTotalMinutes = (duration: string) => {
  const parts = duration.split(':');
  return parseInt(parts[0]) * 60 + (parseInt(parts[1]) || 0);
};

export const getDayNames = (dates: Date[]) => {
  return Array.from(
    new Set(
      dates.map((d) =>
        new Intl.DateTimeFormat('en-US', { weekday: 'long' })
          .format(d)
          .toUpperCase()
      )
    )
  );
};

export const getFrequency = (repeat: string) =>
  repeat === 'none' ? 'ONCE' : repeat.toUpperCase();

export const getMinMax = (val: string) => parseInt(val) || 0;
export const formatDate = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export const getStep1Errors = (formData: { name?: string; goal?: string }) => {
  const { name, goal } = formData;
  return [
    { key: 'name', val: name?.trim() },
    { key: 'goal', val: goal?.trim() },
  ].reduce((acc, { key, val }) => {
    if (!val) acc[key] = 'Заавал';
    return acc;
  }, {} as Record<string, string>);
};

export const getStep2Errors = (formData: { room?: string }) => {
  const errs: Record<string, string> = {};
  if (!formData.room) errs.room = 'Заавал';
  return errs;
};

export const buildMutationVariables = (
  formData: FormDataType,
  selectedDates: Date[]
) => {
  return {
    input: {
      name: formData.name,
      description: formData.goal,
      type: 'mentor',
      teacherId: formData.teacher === 'student' ? null : formData.teacher,
      preferredTeachers: formData.preferredTeachers || [],
      minMember: getMinMax(formData.minStudents),
      maxMember: getMinMax(formData.maxStudents),
    },
    schedules: selectedDates.map((date) => ({
      date: formatDate(date),
      room: formData.room,
      clubStartTime: formData.time,
      duration: calculateTotalMinutes(formData.duration),
    })),
    frequency: getFrequency(formData.repeat),
    clubTerm: '2024-2025',
  };
};

export const handlePreferredToggleHelper = (
  current: string[],
  id: string
): string[] => {
  return current.includes(id)
    ? current.filter((x) => x !== id)
    : [...current, id];
};

export const getMutationError = (res: {
  errors?: readonly { message: string }[];
  error?: { message: string };
}) => res?.errors?.[0]?.message || res?.error?.message;

export const handleMutationResult = (
  res: {
    data?: CreateClubWithSchedulesResponse | null;
    errors?: readonly { message: string }[];
    error?: { message: string };
  },
  onSuccess: () => void
) => {
  const errorMsg = getMutationError(res);
  if (errorMsg) {
    alert(`Алдаа гарлаа: ${errorMsg}`);
    return { success: false, message: errorMsg };
  }
  if (res?.data?.createClubWithSchedules) {
    onSuccess();
    return { success: true, message: 'Клуб амжилттай үүслээ' };
  }
  const fallback = 'Клуб үүссэн эсэх тодорхойгүй.';
  alert(fallback);
  return { success: false, message: fallback };
};
