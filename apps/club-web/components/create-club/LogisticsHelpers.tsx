'use client';
import React, { ChangeEvent } from 'react';
import { UserPlus2 } from 'lucide-react';
import { cn } from 'lib/utils';
import { FormDataType } from './types';

export interface StudentCountFieldProps {
  label: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  isInvalid: boolean;
  placeholder: string;
}

const getPClass = (invalid: boolean) =>
  cn(
    'text-[9px] font-semibold uppercase tracking-widest flex items-center gap-2 transition-colors',
    invalid ? 'text-red-500' : 'text-white/40'
  );

const getInputClass = (invalid: boolean) =>
  cn(
    'w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white focus:border-primary/50 outline-none transition-all font-mono',
    invalid ? 'border-red-500' : 'border-white/10'
  );

export const StudentCountField = ({
  label,
  icon,
  value,
  onChange,
  onBlur,
  isInvalid,
  placeholder,
}: StudentCountFieldProps) => (
  <div className="space-y-2">
    <p className={getPClass(isInvalid)}>
      {icon || <UserPlus2 size={12} />} {label}
    </p>
    <input
      type="number"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={getInputClass(isInvalid)}
      placeholder={placeholder}
    />
  </div>
);

export const checkEmptyOrSmall = (v: number) => !v || v < 5;
export const checkMinGreater = (v: number, maxV: number) =>
  maxV > 0 && v >= maxV;

export const checkEmptyOrLarge = (v: number) => !v || v > 25;
export const checkMaxSmaller = (v: number, minV: number) =>
  minV > 0 && v <= minV;

const getIsMinInvalid = (touched: boolean, min: number, max: number) =>
  touched && (checkEmptyOrSmall(min) || checkMinGreater(min, max));

const getIsMaxInvalid = (touched: boolean, max: number, min: number) =>
  touched && (checkEmptyOrLarge(max) || checkMaxSmaller(max, min));

export const useLogisticsForm = (
  formData: FormDataType,
  setFormData: (_data: FormDataType) => void,
  onRepeatChange: (_val: string) => void
) => {
  const [touched, setTouched] = React.useState({ min: false, max: false });
  const min = Number(formData.minStudents);
  const max = Number(formData.maxStudents);

  const blur = (key: 'min' | 'max') => () =>
    setTouched((p) => ({ ...p, [key]: true }));

  const update = (key: string, val: string) =>
    setFormData({ ...formData, [key]: val });

  const onRepeat = (val: string) => {
    update('repeat', val);
    onRepeatChange(val);
  };

  return {
    isMinInvalid: getIsMinInvalid(touched.min, min, max),
    isMaxInvalid: getIsMaxInvalid(touched.max, max, min),
    handleMaxBlur: blur('max'),
    handleMinBlur: blur('min'),
    handleRepeatChange: onRepeat,
    handleInput: (key: string) => (e: ChangeEvent<HTMLInputElement>) =>
      update(key, e.target.value),
    bind: (key: string) => (v: string) => update(key, v),
  };
};
