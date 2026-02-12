import { Label } from '@intern-3a-club/shadcn';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';

export const Duration = () => {
  return (
    <Select>
      <div className="flex flex-col w-full gap-3">
        <Label
          htmlFor="duration"
          className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Үргэлжлэх хугацаа
        </Label>
        <div>
          <SelectTrigger className="w-full max-w-63.75">
            <SelectValue placeholder="1 цаг" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem
                value="oneHour"
                defaultChecked
                defaultValue={'oneHour'}
              >
                1:00 цаг
              </SelectItem>
              <SelectItem value="oneHourHalf">1:30 цаг</SelectItem>
              <SelectItem value="twoHour">2:00 цаг</SelectItem>
            </SelectGroup>
          </SelectContent>
        </div>
      </div>
    </Select>
  );
};
