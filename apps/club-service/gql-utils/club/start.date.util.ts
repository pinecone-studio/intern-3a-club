export const resolveStartDate = (
  schedules: { date: string }[]
): string | null => {
  if (!schedules || schedules.length === 0) return null;

  const sorted = [...schedules].map((s) => s.date).sort();
  return sorted[0];
};
