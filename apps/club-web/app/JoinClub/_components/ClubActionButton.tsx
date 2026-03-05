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
  isExpired: boolean;
  onLeave: () => void;
}

const getButtonStyles = (isLocked: boolean): string =>
  isLocked
    ? 'bg-red-500/20 text-red-300 border border-red-500/60'
    : 'bg-blue-600';

const JoinAction = (props: JoinActionProps) => {
  const { isLocked, loading, status, onEnroll, remainingTime } = props;
  const isFull = status === 'Full';
  const isDisabled = isLocked || loading || isFull;

  return (
    <CustomButton
      disabled={isDisabled}
      onClick={onEnroll}
      className={`w-full py-3 font-semibold transition-all ${getButtonStyles(isLocked)}`}
    >
      <JoinLabel loading={loading} isLocked={isLocked} time={remainingTime} />
    </CustomButton>
  );
};

const ExpiredAction = () => (
  <div className="w-full py-3 flex items-center justify-center text-sm font-semibold text-white/30 bg-white/5 border border-white/10 rounded-lg">
    Элсэх хугацаа дууссан
  </div>
);

const LeaveAction = ({ loading, onLeave }: { loading: boolean; onLeave: () => void }) => (
  <CustomButton
    variant="destructive"
    onClick={onLeave}
    disabled={loading}
    className="w-full py-3 flex items-center justify-center gap-2"
  >
    <LogOut size={20} />
    {loading ? 'Уншиж байна...' : 'Клубээс гарах'}
  </CustomButton>
);

const ACTION_MAP = [
  { match: (p: ActionProps) => p.isExpired && !p.isEnrolled, render: (_: ActionProps) => <ExpiredAction /> },
  { match: (p: ActionProps) => p.isEnrolled,                  render: (p: ActionProps) => <LeaveAction loading={p.loading} onLeave={p.onLeave} /> },
];

export const ClubActionButtons = (props: ActionProps) => {
  const matched = ACTION_MAP.find(({ match }) => match(props));
  return matched ? matched.render(props) : <JoinAction {...props} />;
};