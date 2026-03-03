export const parseDateString = (dateStr: string) => {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
};

export const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0];
};

export const durationInMinutes = (val: string) => {
  const [h, m] = val.split(':').map(Number);
  return h * 60 + (m || 0);
};

export const formatDuration = (mins: number) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}:${m === 0 ? '00' : m}`;
};
