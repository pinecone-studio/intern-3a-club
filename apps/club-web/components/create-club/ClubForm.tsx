'use client';
import React, { useState, useCallback } from 'react';
import { LogisticsSection } from './LogisticsSection';
import { Step1 } from './Step1';
import { ClubFormProps, GetAllTeacher } from './types';
import { getStep1Errors, getStep2Errors } from './create-club-helpers';
import { ProgressBar } from './ProgressBar';

interface StepViewProps {
  props: ClubFormProps;
  onNext?: () => void;
  onBack?: () => void;
  onSubmit?: () => void;
  status?: string;
  teachers?: GetAllTeacher[];
  errors?: Record<string, string>;
}

const Step1View = ({ props, teachers, errors, onNext }: StepViewProps) => (
  <div className="animate-in fade-in duration-500">
    <Step1 {...props} teachers={teachers} errors={errors} />
    <button
      type="button"
      onClick={onNext}
      className="w-full h-12 mt-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-md hover:opacity-95 transition"
    >
      Үргэлжлүүлэх
    </button>
  </div>
);

const Step2View = ({ props, onBack, onSubmit, status }: StepViewProps) => (
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
        className="flex-1 h-11 rounded-lg bg-blue-600 text-white font-bold uppercase  shadow-lg hover:brightness-95 transition"
      >
        Хүсэлт илгээх
      </button>
    </div>
    {status && (
      <div className="mt-3 text-sm text-center text-white/90">{status}</div>
    )}
  </div>
);

export const ClubForm = (props: ClubFormProps) => {
  const { formData, handleSubmit, teachers } = props;
  const [showHelp, setShowHelp] = useState(false);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  const onNext = useCallback(() => {
    const e = getStep1Errors(formData);
    setErrors(e);
    if (Object.keys(e).length === 0) setStep(2);
  }, [formData]);

  const onSubmit = useCallback(async () => {
    const e = getStep2Errors(formData);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmissionStatus('Илгээж байна...');
      const result = await handleSubmit();
      setSubmissionStatus(result.message);
    }
  }, [formData, handleSubmit]);

  const onBack = useCallback(() => setStep(1), []);

  return (
    <div className="lg:col-span-7">
      <div className="rounded-xl border border-blue-900/20 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-blue-800/50 p-5 lg:p-7 backdrop-blur-sm shadow-lg">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-white">
                Клуб бүртгүүлэх
              </h4>
            </div>
            <div className="hidden sm:block w-48">
              <ProgressBar step={step} />
            </div>
          </div>
          <div className="sm:hidden">
            <ProgressBar step={step} />
          </div>
          {step === 1 ? (
            <Step1View
              props={props}
              teachers={teachers}
              errors={errors}
              onNext={onNext}
            />
          ) : (
            <Step2View
              props={props}
              onBack={onBack}
              onSubmit={onSubmit}
              status={submissionStatus}
            />
          )}
        </div>
      </div>
    </div>
  );
};
