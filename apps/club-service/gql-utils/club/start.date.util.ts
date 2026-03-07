export const resolveStartDate = (
  schedules: { date: string }[]
): string | null => {
  if (!schedules || schedules.length === 0) return null;

  // Date-үүдийг string-ээр нь sort хийхэд "YYYY-MM-DD" формат учраас зөв эрэмбэлэгдэнэ
  const sorted = [...schedules].map((s) => s.date).sort();
  return sorted[0];
};
