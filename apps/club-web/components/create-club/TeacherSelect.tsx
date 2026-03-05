import { ChangeEvent } from 'react';

interface TeacherSelectProps {
  value: string;
  onChange: (_e: ChangeEvent<HTMLSelectElement>) => void;
  teachers?: { id: string; firstName: string; lastName?: string }[];
  className?: string;
}

const FALLBACK_TEACHERS = [
  { id: 'teacher1', firstName: 'Bagsh1', lastName: undefined },
  { id: 'teacher2', firstName: 'Bagsh2', lastName: undefined },
];

export const TeacherSelect = ({
  value,
  onChange,
  teachers,
  className,
}: TeacherSelectProps) => {
  const teacherList =
    teachers && teachers.length > 0 ? teachers : FALLBACK_TEACHERS;

  console.log('teacherList', teacherList);

  return (
    <div className="relative">
      <select
        id="teacher-select"
        name="teacher"
        value={value}
        onChange={onChange}
        className={`${className ?? ''} appearance-none`}
        style={{
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          backgroundImage: 'none',
        }}
      >
        <option value="">Сонгох...</option>
        <option value="teacher">Багш</option>
        <option value="student">Сурагч</option>
      </select>
    </div>
  );
};
