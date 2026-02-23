export const getNextDateOfDay = (
  startDate: string,
  dayName: string
): string => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const targetDay = days.findIndex(
    (d) => d.toLowerCase() === dayName.toLowerCase()
  );
  const start = new Date(startDate);
  const resultDate = new Date(start);

  resultDate.setDate(start.getDate() + ((targetDay + 7 - start.getDay()) % 7));
  return resultDate.toISOString().split('T')[0];
};
