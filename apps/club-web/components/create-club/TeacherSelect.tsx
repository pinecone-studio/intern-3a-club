import { MoveDownIcon } from 'lucide-react';
import { ChangeEvent } from 'react';

interface TeacherSelectProps {
  value: string;
  onChange: (_e: ChangeEvent<HTMLSelectElement>) => void;
  teachers?: { id: string; firstName: string; lastName?: string }[];
  className?: string;
}

export const TeacherSelect = ({
  value,
  onChange,
  teachers,
  className,
}: TeacherSelectProps) => (
  <div className="relative">
    <select
      id="teacher-select"
      name="teacher"
      value={value}
      onChange={onChange}
      className={className}
    >
      <option value="">Сонгох...</option>
      {teachers && teachers.length > 0 ? (
        teachers.map((t) => (
          <option key={t.id} value={t.id}>
            {t.firstName} {t.lastName || ''}
          </option>
        ))
      ) : (
        <>
          <option value="1">Эрдэнэцогт</option>
          <option value="2">Наранцацралт</option>
        </>
      )}
      <option value="student">Сурагч</option>
    </select>
    <MoveDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
  </div>
);
