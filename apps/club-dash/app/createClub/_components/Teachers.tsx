import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';
import { ClassTeacherType } from '../../../../club-dash/libs/types';

type TeachersProps = {
  teacherName: string;
  setTeacherName: (_name: string) => void;
};

const mockTeachers: ClassTeacherType[] = [
  { id: '1', name: 'Erdenetsogt' },
  { id: '2', name: 'Narantsatsralt' },
  { id: '3', name: 'Bilguundul' },
  { id: '4', name: 'Elbeg' },
];

export const Teachers = ({ teacherName, setTeacherName }: TeachersProps) => {
  return (
    <div className="flex flex-col w-full gap-3">
      <Label htmlFor="teacher-select" className="text-sm font-semibold">
        Хариуцсан багш
      </Label>
      <Select onValueChange={setTeacherName} value={teacherName || ''}>
        <SelectTrigger className="w-full max-w-131.5" id="teacher-select">
          <SelectValue placeholder="Хариуцсан багш" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {mockTeachers.map((teacher) => (
              <SelectItem value={teacher.name} key={teacher.id}>
                {teacher.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
