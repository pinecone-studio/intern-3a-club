'use client';
import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';
import React from 'react';

type FrequencyProps = {
  selectedFreqId: string;
  setSelectedFreqId: React.Dispatch<React.SetStateAction<string>>;
  clubTerm: string;
  setClubTerm: React.Dispatch<React.SetStateAction<string>>;
  setClubFrequency: React.Dispatch<React.SetStateAction<string>>;
};

export const Frequency = ({
  selectedFreqId,
  setSelectedFreqId,
  clubTerm,
  setClubTerm,
  setClubFrequency,
}: FrequencyProps) => {
  const frequencies = [
    { id: '1', label: 'Зөвхөн сонгосон өдрүүдэд', value: 'ONCE' },
    { id: '2', label: 'Долоо хоног бүр', value: 'WEEKLY' },
  ];

  const handleValueChange = (val: string) => {
    setSelectedFreqId(val);
    const selected = frequencies.find((f) => f.id === val);
    setClubFrequency(selected?.value || '');
  };

  return (
    <div className="flex flex-col gap-4 mt-2">
      <div className="flex flex-col gap-2">
        <Label className="text-sm font-semibold">Давтамж</Label>
        <Select onValueChange={handleValueChange} value={selectedFreqId}>
          <SelectTrigger className="w-full text-sm">
            <SelectValue placeholder="Сонгох" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {frequencies.map((f) => (
              <SelectItem key={f.id} value={f.id}>
                {f.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedFreqId === '2' && (
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-semibold">
            Үргэлжлэх Хугацаа (Сар)
          </Label>
          <Select onValueChange={setClubTerm} value={clubTerm}>
            <SelectTrigger className="w-full text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((m) => (
                <SelectItem key={m} value={m.toString()}>
                  {m} сар
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-blue-500">
            * Календар дээр сонгосон гарагуудаар автоматаар бөглөгдөнө.
          </p>
        </div>
      )}
    </div>
  );
};
