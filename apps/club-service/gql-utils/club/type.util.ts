export const resolveType = (type?: string, teacherId?: string) => {
  if (type) return type;
  return teacherId ? 'mentor' : 'self';
};
