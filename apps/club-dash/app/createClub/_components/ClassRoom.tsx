import { FieldLabel } from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function ClassRoom() {
  return (
    <Select>
      <div className="flex flex-col w-full gap-3">
        <FieldLabel htmlFor="classRoom">Орох Анги</FieldLabel>
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
}
