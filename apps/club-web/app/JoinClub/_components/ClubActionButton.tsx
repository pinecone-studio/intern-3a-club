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

  if (isEnrolled) {
    return (
      <CustomButton
        variant="destructive"
        onClick={onLeave}
        className={cn(
          'w-full py-5 text-sm border border-red-500/20 bg-red-500/10 hover:bg-red-500 transition-all duration-300',
          className
        )}
      >
        <LogOut className="mr-2 h-5 w-5" /> Клубээс гарах
      </CustomButton>
    );
  }

  return (
    <div className="space-y-4">
      <CustomButton
        disabled={status === 'Full' || isLocked}
        onClick={onEnroll}
        className={cn(
          'w-full py-5 text-sm transition-all duration-300 shadow-xl',
          isLocked || status === 'Full'
            ? 'bg-white/5 text-white/20 border-white/5 cursor-not-allowed opacity-50'
            : 'bg-blue-600 text-white/90 hover:bg-blue-500 border-blue-400/30 shadow-blue-600/20',
          className
        )}
      >
        <ButtonContent
          isLocked={isLocked}
          time={remainingTime}
          status={status}
        />
      </CustomButton>

      {isLocked && <LockedMessage />}
    </div>
  );
};
const LockedMessage = () => (
  <p className="text-center text-[10px] font-bold uppercase text-red-500 animate-pulse">
    Түр хүлээх шаардлагатай!
  </p>
);
