import { FieldLabel } from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ClassTeacherType } from '@/lib/types';
import { Dispatch, SetStateAction } from 'react';

type TeachersProps = {
  teacherName: ClassTeacherType[];
  setTeacherName: Dispatch<SetStateAction<ClassTeacherType[]>>;
};

export function Teachers({ teacherName, setTeacherName }: TeachersProps) {
  return (
    <Select>
      <div className="flex flex-col w-full gap-3">
        <FieldLabel htmlFor="duration">Хариуцсан багш</FieldLabel>
        <div>
          <SelectTrigger className="w-full max-w-131.5">
            <SelectValue placeholder="Хариуцсан багш" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem
                value="Erdenetsogt"
                defaultChecked
                defaultValue={'Erdenetsogt'}
              >
                Erdenetsogt
              </SelectItem>
              <SelectItem value="Narantsatsralt">Narantsatsralt</SelectItem>
              <SelectItem value="Bilguundul">Bilguundul</SelectItem>
            </SelectGroup>
          </SelectContent>
        </div>
      </div>
    </Select>
  );
}
