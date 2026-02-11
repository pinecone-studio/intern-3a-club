import { FieldLabel } from '../../../components/ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';

export const Frequency = () => {
  return (
    <Select>
      <FieldLabel htmlFor="frequency">Давтамж</FieldLabel>
      <SelectTrigger className="w-full max-w-63.75">
        <SelectValue placeholder="Зөвхөн сонгосон өдрүүдэд" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectItem
            value="Зөвхөн сонгосон өдрүүдэд"
            defaultChecked
            defaultValue={'Зөвхөн сонгосон өдрүүдэд'}
          >
            Зөвхөн сонгосон өдрүүдэд
          </SelectItem>
          <SelectItem value="Долоо хоног бүр">Долоо хоног бүр</SelectItem>
          <SelectItem value="2 долоо хоног тутам">
            2 долоо хоног тутам
          </SelectItem>
          <SelectItem value="Сар бүр">Сар бүр</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
