import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';

// type TeachersProps = {
//   teacherName: ClassTeacherType[];
//   setTeacherName: Dispatch<SetStateAction<ClassTeacherType[]>>;
// };

// export function Teachers({ teacherName, setTeacherName }: TeachersProps) {
export const Teachers = () => {
  return (
    <Select>
      <div className="flex flex-col w-full gap-3">
        <Label
          htmlFor="duration"
          className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Хариуцсан багш
        </Label>
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
};
