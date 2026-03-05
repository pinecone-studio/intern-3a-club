export const resolvePreferredTeachers = (
  teacherIdOrPreferred?: string | string[],
  maybePreferred?: string[]
) => {
  const preferred = Array.isArray(teacherIdOrPreferred)
    ? teacherIdOrPreferred
    : maybePreferred;

  const normalized = (preferred ?? [])
    .filter((id): id is string => typeof id === 'string')
    .map((id) => id.trim())
    .filter(Boolean);

  // Keep preferred teachers even when main teacherId is selected.
  return Array.from(new Set(normalized));
};
