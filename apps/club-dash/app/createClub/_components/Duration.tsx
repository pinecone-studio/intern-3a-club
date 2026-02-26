import { Label } from '@intern-3a-club/shadcn';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';

type DurationProps = {
  clubDuration: string;
  setClubDuration: React.Dispatch<React.SetStateAction<string>>;
};
const mockDuration = [
  {
    id: '1',
    duration: '1:00',
  },
  {
    id: '2',
    duration: '2:00',
  },
];

export const Duration = ({ clubDuration, setClubDuration }: DurationProps) => {
  const handleSelectedDuration = (selectedDurationId: string) => {
    const selectedDuration = mockDuration.find(
      (time) => time.id === selectedDurationId
    );
    if (selectedDuration) {
      setClubDuration(selectedDuration.duration);
    }
  };
  return (
    <Select onValueChange={handleSelectedDuration}>
      <div className="flex flex-col w-70 mt-2 gap-3">
        <Label
          htmlFor="duration"
          className="text-sm font-semibold leading-none w-[140px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Үргэлжлэх хугацаа
        </Label>
        <div>
          <SelectTrigger className="w-full max-w-63.75">
            <SelectValue placeholder="1 цаг">{clubDuration}</SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {mockDuration.map((time) => (
                <SelectItem value={time.id} key={time.id}>
                  {time.duration} цаг
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </div>
      </div>
    </Select>
  );
};
