'use client';
import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';
import { useGetTeachers } from '../../_hooks/use-get-teachers';

type TeachersProps = {
  teacherId: string;
  setTeacherId: (_name: string) => void;
};

export const getTeacherStatus = (
  loading: boolean,
  error: Error | undefined
): string | null => {
  if (loading) return 'Уншиж байна...';
  if (error) return `Алдаа гарлаа: ${error.message}`;
  return null;
};

export const Teachers = ({ teacherId, setTeacherId }: TeachersProps) => {
  const { loading, error, data } = useGetTeachers();

  const status = getTeacherStatus(loading, error);
  if (status) return <p>{status}</p>;

  return (
    <div className="flex flex-col w-60 gap-3">
      <Label htmlFor="teacher-select" className="text-sm font-semibold">
        Хариуцсан багш
      </Label>
      <Select onValueChange={setTeacherId} value={teacherId || ''}>
        <SelectTrigger className="w-full max-w-131.5" id="teacher-select">
          <SelectValue placeholder="Хариуцсан багш" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {data?.getAllTeachers.map((teacher) => (
              <SelectItem value={teacher.id} key={teacher.id}>
                {teacher.firstName} {teacher.lastName}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
