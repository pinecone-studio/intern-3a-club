import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';
import React from 'react';

type FrequencyProps = {
  clubFrequency: string;
  setClubFrequency: (_val: string) => void;
};

const mockFrequency = [
  { id: '1', frequency: 'Зөвхөн сонгосон өдрүүдэд' },
  { id: '2', frequency: 'Долоо хоног бүр' },
  { id: '3', frequency: '2 долоо хоног тутам' },
  { id: '4', frequency: 'Сар бүр' },
];

export const Frequency = ({
  clubFrequency,
  setClubFrequency,
}: FrequencyProps) => {
  const handleSelectFrequency = (selectedFrequencyId: string) => {
    const selectedFrequency = mockFrequency.find(
      (frequency) => frequency.id === selectedFrequencyId
    );
    if (selectedFrequency) {
      setClubFrequency(selectedFrequency.frequency);
    }
  };

  return (
    <div className="flex flex-col w-full gap-3">
      <Label
        htmlFor="frequency-select"
        className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Давтамж
      </Label>
      <Select onValueChange={handleSelectFrequency}>
        <SelectTrigger id="frequency-select" className="w-full max-w-63.75">
          <SelectValue placeholder="Зөвхөн сонгосон өдрүүдэд">
            {clubFrequency}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {mockFrequency.map((frequency) => (
              <SelectItem value={frequency.id} key={frequency.id}>
                {frequency.frequency}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
