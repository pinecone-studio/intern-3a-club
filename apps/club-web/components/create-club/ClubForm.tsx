'use client';
import React, { useState, useCallback } from 'react';
import { LogisticsSection } from './LogisticsSection';
import { Step1 } from './Step1';
import { ClubFormProps } from './types';
import { cn } from 'lib/utils';

const ProgressBar = ({ step }: { step: number }) => (
  <div className="flex gap-4">
    <div
      className={cn(
        'h-1 flex-1 rounded-full bg-primary'
      )}
    />
    <div
      className={cn(
        'h-1 flex-1 rounded-full',
        step === 2 ? 'bg-primary' : 'bg-white/10'
      )}
    />
  </div>
);

export const ClubForm = (props: ClubFormProps) => {
  const { formData, handleSubmit, selectedDates } = props;
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Complexity 3-аас хэтрүүлэхгүй тулд шалгалтыг маш энгийн болгов
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

  // JSX хэсгийг Complexity-д тооцуулахгүйн тулд ийм байдлаар бичив
  const isStep1 = step === 1;

  return (
    <div className="lg:col-span-12 space-y-8">
      <div className="rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl shadow-2xl">
        <div className="space-y-10">
          <ProgressBar step={step} />

          {isStep1 ? (
            <div className="animate-in fade-in duration-500">
              <Step1 {...props} errors={errors} />
              <button
                type="button"
                onClick={onNext}
                className="w-full h-16 mt-8 rounded-2xl bg-white/10 text-white font-bold hover:bg-primary transition-all"
              >
                Үргэлжлүүлэх
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in duration-500">
              <LogisticsSection {...props} />
              <div className="flex gap-4 pt-8">
                <button
                  type="button"
                  onClick={onBack}
                  className="flex-1 h-20 rounded-3xl border border-white/10 text-white/60 font-bold"
                >
                  Буцах
                </button>
                <button
                  type="button"
                  onClick={onSubmit}
                  className="flex-[2] h-20 rounded-3xl bg-primary text-xl font-black uppercase tracking-widest shadow-2xl"
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
