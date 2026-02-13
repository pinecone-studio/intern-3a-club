'use client';

import React from 'react';
import { LogOut, Timer } from 'lucide-react';
import { cn } from 'lib/utils';
import { CustomButton } from './CustomButton';

interface ButtonContentProps {
  isLocked: boolean;
  time: number;
  status: string;
}

interface ActionProps {
  isEnrolled: boolean;
  isLocked: boolean;
  status: string;
  remainingTime: number;
  onEnroll: () => void;
  onLeave: () => void;
  className?: string;
}

const ButtonContent = ({ isLocked, time, status }: ButtonContentProps) => {
  if (isLocked) {
    return (
      <span className="flex items-center justify-center">
        <Timer className="h-5 w-5 animate-spin mr-2" />
        {time}с хүлээх
      </span>
    );
  }
  return <span>{status === 'Open' ? 'Одоо нэгдэх' : 'Суудал дүүрсэн'}</span>;
};

// eslint-disable-next-line complexity
export const ClubActionButtons = (props: ActionProps) => {
  const {
    isEnrolled,
    isLocked,
    status,
    remainingTime,
    onEnroll,
    onLeave,
    className = '',
  } = props;

  // 1. Complexity-г багасгахын тулд хамгийн эхний нөхцөлийг салгах
  if (isEnrolled) {
    return (
      <CustomButton
        variant="destructive"
        onClick={onLeave}
        className="w-full py-5 text-xl"
      >
        <LogOut className="mr-2 h-6 w-6" /> Клубээс гарах
      </CustomButton>
    );
  }

  const buttonClass = cn(
    'group rounded-2xl relative w-full overflow-hidden py-5 text-xl font-black uppercase tracking-widest transition-all',
    {
      'bg-white/10 text-white/20 cursor-not-allowed': isLocked,
      'bg-blue-600 text-white hover:bg-blue-700': !isLocked,
    },
    className // Гаднаас орж ирэх className-ийг нэмэв
  );

  return (
    <div className="space-y-3">
      <button
        disabled={status === 'Full' || isLocked}
        onClick={onEnroll}
        className={buttonClass}
      >
        <ButtonContent
          isLocked={isLocked}
          time={remainingTime}
          status={status}
        />
      </button>

      {isLocked && <LockedMessage />}
    </div>
  );
};

// Жижиг мессежийг тусад нь гаргах нь complexity-г нэмэхгүй
const LockedMessage = () => (
  <p className="text-center text-[10px] font-bold uppercase text-red-500 animate-pulse">
    Түр хүлээх шаардлагатай!
  </p>
);
