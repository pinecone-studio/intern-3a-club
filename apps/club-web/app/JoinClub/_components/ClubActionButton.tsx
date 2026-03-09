'use client';

import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { Clock, LogOut } from 'lucide-react';
import { JoinLabel } from './ClubJoinLabel';
import { cn } from 'lib/utils';

interface JoinActionProps {
  isLocked: boolean;
  status: string;
  remainingTime: number;
  onEnroll: () => void;
  loading: boolean;
}

interface ActionProps extends JoinActionProps {
  isEnrolled: boolean;
  isExpired: boolean;
  onLeave: () => void;
}

interface LeaveActionProps {
  loading: boolean;
  onLeave: () => void;
  isExpired: boolean;
}

const getButtonStyles = (isLocked: boolean): string =>
  isLocked
    ? 'bg-red-500/20 text-red-300 border border-red-500/60'
    : 'bg-blue-600';

const getLeaveLabel = (loading: boolean, isExpired: boolean): string => {
  if (loading) return 'Уншиж байна...';
  if (isExpired) return 'Гарах боломжгүй (Клуб эхэлсэн)';
  return 'Клубээс гарах';
};

const JoinAction = (props: JoinActionProps) => {
  const { isLocked, loading, status, onEnroll, remainingTime } = props;
  const isFull = status === 'Full';
  const isDisabled = isLocked || loading || isFull;

  return (
    <CustomButton
      disabled={isDisabled}
      onClick={onEnroll}
      className={`w-full py-3 font-semibold transition-all ${getButtonStyles(
        isLocked
      )}`}
    >
      <JoinLabel loading={loading} isLocked={isLocked} time={remainingTime} />
    </CustomButton>
  );
};

const ExpiredAction = () => (
  <div className="w-full py-4 flex flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/5 cursor-not-allowed animate-in fade-in duration-500">
    <div className="flex items-center gap-2 text-white/30 font-bold text-sm uppercase tracking-tight">
      <Clock size={16} strokeWidth={2.5} />
      <span>Бүртгэл хаагдсан</span>
    </div>
  </div>
);

const LeaveAction = ({ loading, onLeave, isExpired }: LeaveActionProps) => (
  <CustomButton
    variant="destructive"
    onClick={onLeave}
    disabled={loading || isExpired}
    className={cn(
      'w-full py-3 flex items-center justify-center gap-2 transition-all',
      isExpired && 'opacity-40 cursor-not-allowed grayscale'
    )}
  >
    <LogOut size={20} />
    {getLeaveLabel(loading, isExpired)}
  </CustomButton>
);

const ACTION_MAP = [
  {
    match: (p: ActionProps) => p.isExpired && !p.isEnrolled,
    render: () => <ExpiredAction />,
  },
  {
    match: (p: ActionProps) => p.isEnrolled,
    render: (p: ActionProps) => (
      <LeaveAction
        loading={p.loading}
        onLeave={p.onLeave}
        isExpired={p.isExpired}
      />
    ),
  },
];

export const ClubActionButtons = (props: ActionProps) => {
  const matched = ACTION_MAP.find(({ match }) => match(props));
  return matched ? matched.render(props) : <JoinAction {...props} />;
};
