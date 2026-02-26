'use client';
import React, { useState, useCallback } from 'react';
import { LogisticsSection } from './LogisticsSection';
import { Step1 } from './Step1';
import { ClubFormProps } from './types';
import { cn } from 'lib/utils';

const ProgressBar = ({ step }: { step: number }) => (
  <div className="flex gap-4">
    {step === 1 ? (
      <div className={cn('h-5 flex-1 rounded-full text-white')}>Алхам 1</div>
    ) : (
      <div className={cn('h-5 flex-1 rounded-full text-white')}>Алхам 2</div>
    )}
  </div>
);

export const ClubForm = (props: ClubFormProps) => {
  const { formData, handleSubmit, selectedDates } = props;
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const getStep1Errors = useCallback(() => {
    const { name, teacher, goal } = formData;
    return [
      { key: 'name', val: name?.trim() },
      { key: 'teacher', val: teacher },
      { key: 'goal', val: goal?.trim() },
    ].reduce((acc, { key, val }) => {
      if (!val) acc[key] = 'Заавал';
      return acc;
    }, {} as Record<string, string>);
  }, [formData]);

  const getStep2Errors = useCallback(() => {
    const errs: Record<string, string> = {};
    const hasNoDates = selectedDates.length === 0;

    if (!formData.room) errs.room = 'Заавал';
    if (hasNoDates) errs.dates = 'Заавал';

    return errs;
  }, [formData.room, selectedDates]);

  const onNext = useCallback(() => {
    const e = getStep1Errors();
    setErrors(e);
    if (Object.keys(e).length === 0) setStep(2);
  }, [getStep1Errors]);

  const onSubmit = useCallback(() => {
    const e = getStep2Errors();
    setErrors(e);
    if (Object.keys(e).length === 0) handleSubmit();
  }, [getStep2Errors, handleSubmit]);

  const onBack = useCallback(() => setStep(1), []);

  const isStep1 = step === 1;

  return (
    <div className="lg:col-span-7">
      <div className="rounded-2xl border border-blue-900/20 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-blue-800/50 p-6 lg:p-8 backdrop-blur-sm shadow-lg">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-extrabold text-white">
                Клуб бүртгүүлэх
              </h4>
              <p className="text-sm text-blue-200/80">
                Шинэ клуб нээх хүсэлт болон хуваарь илгээх.
              </p>
            </div>
            <div className="hidden sm:block w-48">
              <ProgressBar step={step} />
            </div>
          </div>

          <div className="sm:hidden">
            <ProgressBar step={step} />
          </div>

          {isStep1 ? (
            <div className="animate-in fade-in duration-500">
              <Step1 {...props} errors={errors} />
              <button
                type="button"
                onClick={onNext}
                className="w-full h-12 mt-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-md hover:opacity-95 transition"
              >
                Үргэлжлүүлэх
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in duration-500">
              <LogisticsSection {...props} />
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <button
                  type="button"
                  onClick={onBack}
                  className="flex-1 h-11 rounded-lg border border-blue-700/40 text-blue-100 font-medium bg-transparent hover:bg-blue-900/20 transition"
                >
                  Буцах
                </button>
                <button
                  type="button"
                  onClick={onSubmit}
                  className="flex-1 h-11 rounded-lg bg-blue-600 text-white font-bold uppercase tracking-wide shadow-lg hover:brightness-95 transition"
                >
                  Хүсэлт илгээх
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
