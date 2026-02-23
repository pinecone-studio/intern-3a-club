'use client';

import React, { ChangeEvent } from 'react';
import { DoorOpen, Clock, Timer, UserPlus2, RotateCcw } from 'lucide-react';

import { cn } from 'lib/utils';
import { CalendarSelectField } from './CalendarSelectField';
import { FormDataType } from './types';

interface LogisticsFormProps {
  formData: FormDataType;

  setFormData: (_data: FormDataType) => void;
  onRepeatChange: (_val: string) => void;
}

export const LogisticsForm = ({
  formData,
  setFormData,
  onRepeatChange,
}: LogisticsFormProps) => {
  const handleRepeatChange = (val: string) => {
    setFormData({ ...formData, repeat: val });
    onRepeatChange(val);
  };

  const handleRoomChange = (v: string) => {
    setFormData({ ...formData, room: v });
  };

  const handleTimeChange = (v: string) => {
    setFormData({ ...formData, time: v });
  };

  const handleDurationChange = (v: string) => {
    setFormData({ ...formData, duration: v });
  };

  const handleMaxStudentsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, maxStudents: e.target.value });
  };

  return (
    <div className="flex flex-col justify-center space-y-6 lg:border-l border-white/5 lg:pl-10">
      <CalendarSelectField
        label="Давтамж"
        icon={<RotateCcw size={12} />}
        value={formData.repeat}
        onChange={handleRepeatChange}
        options={[
          { l: 'Зөвхөн сонгосон өдрүүдэд', v: 'none' },
          { l: 'Долоо хоног бүр', v: 'weekly' },
          { l: '2 долоо хоног тутам', v: 'biweekly' },
          { l: 'Сар бүр', v: 'monthly' },
        ]}
      />

      <div className="grid grid-cols-2 gap-4">
        <CalendarSelectField
          label="Орох Анги"
          icon={<DoorOpen size={12} />}
          value={formData.room}
          onChange={handleRoomChange}
          options={['301', '302', '303']}
        />
        <CalendarSelectField
          label="Эхлэх цаг"
          icon={<Clock size={12} />}
          value={formData.time}
          onChange={handleTimeChange}
          options={['13:00', '14:00', '15:00', '16:00']}
        />
      </div>

      <CalendarSelectField
        label="Үргэлжлэх"
        icon={<Timer size={12} />}
        value={formData.duration}
        onChange={handleDurationChange}
        options={[
          { l: '1:00 цаг', v: '1:00' },
          { l: '1:30 цаг', v: '1:30' },
          { l: '2:00 цаг', v: '2:00' },
        ]}
      />

      <div className="space-y-2">
        <p
          className={cn(
            'text-[9px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors',
            Number(formData.maxStudents) > 25 ? 'text-red-500' : 'text-white/40'
          )}
        >
          <UserPlus2 size={12} /> Сурагчид (Макс 20)
        </p>
        <input
          type="number"
          value={formData.maxStudents}
          onChange={handleMaxStudentsChange}
          className={cn(
            'w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white focus:border-primary/50 outline-none transition-all font-mono',
            Number(formData.maxStudents) > 20
              ? 'border-red-500'
              : 'border-white/10'
          )}
          placeholder="15"
        />
      </div>
    </div>
  );
};
