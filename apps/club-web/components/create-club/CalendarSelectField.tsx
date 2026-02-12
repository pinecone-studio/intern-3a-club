'use client';

import { MoveDownIcon } from 'lucide-react';
import React, { ChangeEvent } from 'react';
import { CalendarSelectFieldProps, SelectOption } from './types';

// 1. Option-д зориулсан тусдаа жижиг компонент (Энэ нь complexity-г хувааж авна)
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
}: CalendarSelectFieldProps) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="space-y-2">
      <p className="text-[9px] font-black text-white/40 uppercase tracking-widest flex items-center gap-2">
        {icon} {label}
      </p>
      <div className="relative">
        <select
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
    </div>
  );
};
