import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';

type StartTimeProps = {
  clubStartTime: string;
  setClubStartTime: React.Dispatch<React.SetStateAction<string>>;
};
const mockStartTime = [
  {
    id: '1',
    startTime: '13:00',
  },
  {
    id: '2',
    startTime: '14:00',
  },
  {
    id: '3',
    startTime: '15:00',
  },
  {
    id: '4',
    startTime: '16:00',
  },
  {
    id: '5',
    startTime: '17:00',
  },
];

export const StartTime = ({
  clubStartTime,
  setClubStartTime,
}: StartTimeProps) => {
  const handleSelectedStarttime = (selectedStarttimeId: string) => {
    const selectedStartTime = mockStartTime.find(
      (time) => time.id === selectedStarttimeId
    );
    if (selectedStartTime) {
      setClubStartTime(selectedStartTime.startTime);
    }
  };
  return (
    <Select onValueChange={handleSelectedStarttime}>
      <div className="flex flex-col w-full gap-3">
        <Label
          htmlFor="startTime"
          className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Эхлэх цаг
        </Label>
        <div>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="13:00">{clubStartTime}</SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {mockStartTime.map((time) => (
                <SelectItem value={time.id} key={time.id}>
                  {time.startTime}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </div>
      </div>
    </Select>
  );
};
