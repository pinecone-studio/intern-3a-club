import { FieldLabel } from '../../../components/ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';

export const StartTime = () => {
  return (
    <Select>
      <div className="flex flex-col w-full gap-3">
        <FieldLabel htmlFor="startTime">Эхлэх цаг</FieldLabel>
        <div>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="13:00" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem value="13:00" defaultChecked defaultValue={'13:00'}>
                13:00
              </SelectItem>
              <SelectItem value="14:00">14:00</SelectItem>
              <SelectItem value="15:00">15:00</SelectItem>
              <SelectItem value="16:00">16:00</SelectItem>
              <SelectItem value="17:00">17:00</SelectItem>
            </SelectGroup>
          </SelectContent>
        </div>
      </div>
    </Select>
  );
};
