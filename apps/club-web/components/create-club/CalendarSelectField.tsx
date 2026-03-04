'use client';

import { MoveDownIcon } from 'lucide-react';
import React, { ChangeEvent } from 'react';
import { CalendarSelectFieldProps, SelectOption } from './types';

const CalendarOption = ({
  opt,
  index,
}: {
  opt: string | SelectOption;
  index: number;
}) => {
  if (typeof opt === 'string') {
    return (
      <option key={`opt-${index}`} value={opt} className="bg-[#050c1f]">
        {opt}
      </option>
    );
  }

  return (
    <option key={opt.v} value={opt.v} className="bg-[#050c1f]">
      {opt.l}
    </option>
  );
};

export const CalendarSelectField = ({
  label,
  icon,
  value,
  onChange,
  options,
  id,
  error,
}: CalendarSelectFieldProps & { id?: string }) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-[9px] font-semibold text-white/40 uppercase tracking-widest flex items-center gap-2"
      >
        {icon} {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={handleSelectChange}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 appearance-none cursor-pointer font-medium"
        >
          {options.map((opt, index) => (
            <CalendarOption
              key={typeof opt === 'string' ? opt : opt.v}
              opt={opt}
              index={index}
            />
          ))}
        </select>
        <MoveDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 pointer-events-none" />
      </div>
      {error && <p className="text-red-500 text-[10px] italic">{error}</p>}
    </div>
  );
};
