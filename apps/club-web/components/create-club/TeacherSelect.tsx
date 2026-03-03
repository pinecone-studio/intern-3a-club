import { MoveDownIcon } from 'lucide-react';
import { ChangeEvent } from 'react';

interface TeacherSelectProps {
  value: string;
  onChange: (_e: ChangeEvent<HTMLSelectElement>) => void;
  teachers?: { id: string; firstName: string; lastName?: string }[];
  className?: string;
}

const FALLBACK_TEACHERS = [
  { id: 'erdenetsogt', firstName: 'Эрдэнэцогт', lastName: undefined },
  { id: 'narantsatsralt', firstName: 'Наранцацралт', lastName: undefined },
];

export const TeacherSelect = ({
  value,
  onChange,
  teachers,
  className,
}: TeacherSelectProps) => {
  const teacherList =
    teachers && teachers.length > 0 ? teachers : FALLBACK_TEACHERS;

  return (
    <div className="relative">
      <select
        id="teacher-select"
        name="teacher"
        value={value}
        onChange={onChange}
        className={className}
      >
        <option value="">Сонгох...</option>
        {teacherList.map((t) => (
          <option key={t.id} value={t.id}>
            {t.lastName ? `${t.firstName} ${t.lastName}` : t.firstName}
          </option>
        ))}
        <option value="student">Сурагч</option>
      </select>
      <MoveDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
    </div>
  );
};
