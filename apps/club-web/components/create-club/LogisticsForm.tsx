'use client';
import React from 'react';
import { DoorOpen, Clock, Timer, RotateCcw } from 'lucide-react';
import { CalendarSelectField } from './CalendarSelectField';
import { FormDataType } from './types';

import { StudentCountField, useLogisticsForm } from './LogisticsHelpers';

interface LogisticsFormProps {
  formData: FormDataType;
  setFormData: (_data: FormDataType) => void;
  onRepeatChange: (_val: string) => void;
  errors?: Record<string, string>;
}

export const LogisticsForm = ({
  formData,
  setFormData,
  onRepeatChange,
  errors = {},
}: LogisticsFormProps) => {
  const {
    isMinInvalid,
    isMaxInvalid,
    handleMaxBlur,
    handleMinBlur,
    handleRepeatChange,
    handleInput,
    bind,
  } = useLogisticsForm(formData, setFormData, onRepeatChange);

  return (
    <div className="flex flex-col justify-center space-y-6 lg:border-l border-white/5 pl-4 sm:pl-6 lg:pl-10">
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
        id="repeat-select"
        error={errors.repeat}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CalendarSelectField
          label="Орох Анги"
          icon={<DoorOpen size={12} />}
          value={formData.room}
          onChange={bind('room')}
          options={['301', '302', '303']}
          id="room-select"
          error={errors.room}
        />
        <CalendarSelectField
          label="Эхлэх цаг"
          icon={<Clock size={12} />}
          value={formData.time}
          onChange={bind('time')}
          options={['13:00', '14:00', '15:00', '16:00']}
          id="time-select"
          error={errors.time}
        />
      </div>

      <CalendarSelectField
        label="Үргэлжлэх"
        icon={<Timer size={12} />}
        value={formData.duration}
        onChange={bind('duration')}
        options={[
          { l: '1:00 цаг', v: '1:00' },
          { l: '2:00 цаг', v: '2:00' },
        ]}
        id="duration-select"
      />

      <StudentCountField
        label="Сурагчид (Макс 20)"
        value={formData.maxStudents}
        onChange={handleInput('maxStudents')}
        onBlur={handleMaxBlur}
        isInvalid={isMaxInvalid}
        placeholder="15"
      />

      <StudentCountField
        label="Сурагчид (Багадаа 7)"
        value={formData.minStudents}
        onChange={handleInput('minStudents')}
        onBlur={handleMinBlur}
        isInvalid={isMinInvalid}
        placeholder="11"
      />
    </div>
  );
};
