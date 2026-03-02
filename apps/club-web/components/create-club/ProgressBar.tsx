import React from 'react';
import { cn } from 'lib/utils';

interface ProgressBarProps {
    step: number;
}

export const ProgressBar = ({ step }: ProgressBarProps) => (
    <div className="flex gap-4">
        <div className={cn('h-5 flex-1 rounded-full text-white')}>
            Алхам {step === 1 ? '1' : '2'}
        </div>
    </div>
);
