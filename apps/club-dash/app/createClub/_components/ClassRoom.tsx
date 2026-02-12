import { Label } from '@intern-3a-club/shadcn';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';

export const ClassRoom = () => {
  return (
    <Select>
      <div className="flex flex-col w-full gap-3">
        <Label
          htmlFor="classRoom"
          className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Орох Анги
        </Label>
        <div>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="301" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem value="301" defaultChecked defaultValue={'301'}>
                301
              </SelectItem>
              <SelectItem value="302">302</SelectItem>
              <SelectItem value="303">303</SelectItem>
              <SelectItem value="304">304</SelectItem>
              <SelectItem value="305">305</SelectItem>
            </SelectGroup>
          </SelectContent>
        </div>
      </div>
    </Select>
  );
};
