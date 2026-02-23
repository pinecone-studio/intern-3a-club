'use client';

import {
  Button,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';
import React, { Dispatch, SetStateAction } from 'react';

type FrequencyProps = {
  clubFrequency: string;
  setClubFrequency: (_val: string) => void;
  selectedDays: string[];
  setSelectedDays: Dispatch<SetStateAction<string[]>>;
  selectedFreqId: string;
  setSelectedFreqId: Dispatch<SetStateAction<string>>;
};

const mockFrequency = [
  { id: '1', label: 'Зөвхөн сонгосон өдрүүдэд', value: 'ONCE' },
  { id: '2', label: 'Долоо хоног бүр', value: 'WEEKLY' },
  { id: '3', label: '2 долоо хоног тутам', value: 'BIWEEKLY' },
  { id: '4', label: 'Сар бүр', value: 'MONTHLY' },
];

const mockWeekdays = [
  { id: '1', day: 'M', value: 'MONDAY' },
  { id: '2', day: 'T', value: 'TUESDAY' },
  { id: '3', day: 'W', value: 'WEDNESDAY' },
  { id: '4', day: 'T', value: 'THURSDAY' },
  { id: '5', day: 'F', value: 'FRIDAY' },
  { id: '6', day: 'S', value: 'SATURDAY' },
  { id: '7', day: 'S', value: 'SUNDAY' },
];

export const Frequency = ({
  clubFrequency,
  setClubFrequency,
  selectedDays,
  setSelectedDays,
  selectedFreqId,
  setSelectedFreqId,
}: FrequencyProps) => {
  const handleToggleDay = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset.id;
    if (!id) return;
    setSelectedDays((day) =>
      day.includes(id) ? day.filter((d) => d !== id) : [...day, id]
    );
  };
  const handleSelectFrequency = (selectedFrequencyId: string) => {
    setSelectedFreqId(selectedFrequencyId);
    const selectedFrequency = mockFrequency.find(
      (frequency) => frequency.id === selectedFrequencyId
    );
    if (selectedFrequency) {
      setClubFrequency(selectedFrequency.label);
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
                {frequency.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {selectedFreqId !== '1' && selectedFreqId !== '' && (
        <div className="flex items-center gap-1">
          {mockWeekdays.map((day) => {
            const isSelected = selectedDays.includes(day.id);
            return (
              <Button
                key={day.id}
                data-id={day.id}
                onClick={handleToggleDay}
                className={`
              w-10 h-10 rounded-full text-sm font-medium transition-colors
              flex items-center justify-center border
              ${
                isSelected
                  ? 'bg-black border-black text-white shadow-sm'
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
              }
            `}
              >
                {day.day}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
};
