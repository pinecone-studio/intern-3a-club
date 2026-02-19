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
import React, { MouseEvent, useState } from 'react';

type FrequencyProps = {
  clubFrequency: string;
  setClubFrequency: (_val: string) => void;
};

type Weekdays = { id: string; day: string };

const mockFrequency = [
  { id: '1', frequency: 'Зөвхөн сонгосон өдрүүдэд' },
  { id: '2', frequency: 'Долоо хоног бүр' },
  { id: '3', frequency: '2 долоо хоног тутам' },
  { id: '4', frequency: 'Сар бүр' },
];

const mockWeekdays: Weekdays[] = [
  { id: '1', day: 'M' },
  { id: '2', day: 'T' },
  { id: '3', day: 'W' },
  { id: '4', day: 'T' },
  { id: '5', day: 'F' },
  { id: '6', day: 'S' },
  { id: '7', day: 'S' },
];

export const Frequency = ({
  clubFrequency,
  setClubFrequency,
}: FrequencyProps) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedFreqId, setSelectedFreqId] = useState<string>('');
  const handleToggleDay = (e: MouseEvent<HTMLButtonElement>) => {
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
