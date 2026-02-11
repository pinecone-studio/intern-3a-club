import { FieldLabel } from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Duration() {
  return (
    <Select>
      <div className="flex flex-col w-full gap-3">
        <FieldLabel htmlFor="duration">Үргэлжлэх хугацаа</FieldLabel>
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
}
