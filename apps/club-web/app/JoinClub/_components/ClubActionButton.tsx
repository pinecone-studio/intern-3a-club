'use client';

import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { LogOut } from 'lucide-react';
import { JoinLabel } from './ClubJoinLabel';

interface JoinActionProps {
  isLocked: boolean;
  status: string;
  remainingTime: number;
  onEnroll: () => void;
  loading: boolean;
}
interface ActionProps extends JoinActionProps {
  isEnrolled: boolean;
  onLeave: () => void;
}

const getButtonStyles = (isLocked: boolean) => {
  return isLocked ? 'bg-red-500/20 text-red-400' : 'bg-blue-600';
};

const JoinAction = (props: JoinActionProps) => {
  const { isLocked, loading, status, onEnroll, remainingTime } = props;

  const isFull = status === 'Full';
  const isBusy = isLocked || loading;
  const isDisabled = isBusy || isFull;

  return (
    <CustomButton
      disabled={isDisabled}
      onClick={onEnroll}
      className={`w-full py-4 font-bold transition-all ${getButtonStyles(
        isLocked
      )}`}
    >
      <JoinLabel loading={loading} isLocked={isLocked} time={remainingTime} />
    </CustomButton>
  );
};

export const ClubActionButtons = (props: ActionProps) => {
  const { isEnrolled, loading, onLeave } = props;

  if (!isEnrolled) return <JoinAction {...props} />;

  return (
    <CustomButton
      variant="destructive"
      onClick={onLeave}
      disabled={loading}
      className="w-full py-4 flex items-center justify-center gap-2"
    >
      <LogOut size={20} />
      {loading ? 'Уншиж байна...' : 'Клубээс гарах'}
    </CustomButton>
  );
};
