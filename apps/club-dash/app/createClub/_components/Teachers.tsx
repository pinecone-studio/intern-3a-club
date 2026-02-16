import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';
import { ClassTeacherType } from 'apps/club-dash/libs/types';
import { Dispatch, SetStateAction } from 'react';

type TeachersProps = {
  teacherName: ClassTeacherType[];
  setTeacherName: Dispatch<SetStateAction<ClassTeacherType[]>>;
};

const mockTeachers: ClassTeacherType[] = [
  { id: '1', name: 'Erdenetsogt' },
  { id: '2', name: 'Narantsatsralt' },
  { id: '3', name: 'Bilguundul' },
  { id: '4', name: 'Elbeg' },
];
export function Teachers({ teacherName, setTeacherName }: TeachersProps) {
  const handleSelect = (selecterTeacherId: string) => {
    const selectedTeacher = mockTeachers.find(
      (teacher) => teacher.id === selecterTeacherId
    );

    if (selectedTeacher) {
      setTeacherName([selectedTeacher]);
    }
  };
  return (
    <Select onValueChange={handleSelect}>
      <div className="flex flex-col w-full gap-3">
        <Label htmlFor="teacher-select" className="text-sm font-semibold">
          Хариуцсан багш
        </Label>
        <div>
          <SelectTrigger className="w-full max-w-131.5">
            <SelectValue placeholder="Хариуцсан багш">
              {teacherName[0]?.name}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {mockTeachers.map((teacher) => (
                <SelectItem value={teacher.id} key={teacher.id}>
                  {teacher.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </div>
      </div>
    </Select>
  );
}
