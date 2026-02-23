import { Globe2, MoveDownIcon, UserCheck, Goal, Mail } from 'lucide-react';
import React, { ChangeEvent } from 'react';
import { Step1Props } from './types';
import { cn } from 'lib/utils';

// Алдаа 1: Inline types-ийг interface болгож салгав
interface InputFieldBaseProps {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  error?: string;
}

const InputField = ({ label, icon, children, error }: InputFieldBaseProps) => (
  <div className="space-y-3 text-white">
    <label className="text-[10px] font-black  text-primary flex items-center gap-2">
      {icon} {label}
    </label>
    {children}
    {error && <p className="text-red-500 text-[11px] italic">{error}</p>}
  </div>
);

export const Step1 = ({
  formData,
  setFormData,
  errors = {},
}: Step1Props & { errors?: Record<string, string> }) => {
  if (!formData) return null;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = (hasError: boolean) =>
    cn(
      'w-full bg-black/40 border rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-primary/50 font-bold italic transition-all',
      hasError ? 'border-red-500/50 bg-red-500/5' : 'border-white/10'
    );

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InputField
          label="Клубын нэр"
          icon={<Globe2 size={12} />}
          error={errors.name}
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={inputClass(!!errors.name)}
            placeholder="Wizards Club..."
          />
        </InputField>

        <InputField
          label="Хариуцах хүн"
          icon={<UserCheck size={12} />}
          error={errors.teacher}
        >
          <div className="relative">
            <select
              name="teacher"
              value={formData.teacher}
              onChange={handleInputChange}
              className={inputClass(!!errors.teacher)}
            >
              <option value="">Сонгох...</option>
              <option value="bat">Б.Бат (Ph.D)</option>
              <option value="student">Сурагч</option>
            </select>
            <MoveDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
          </div>
        </InputField>
      </div>

      {formData.teacher === 'student' && (
        <InputField
          label="Сурагчийн и-мэйл хаяг"
          icon={<Mail size={12} />}
          error={errors.studentEmail}
        >
          <input
            type="email"
            name="studentEmail"
            value={formData.studentEmail}
            onChange={handleInputChange}
            className={inputClass(!!errors.studentEmail)}
            data-testid="student-email-input"
          />
        </InputField>
      )}

      <InputField
        label="Клубын зорилго"
        icon={<Goal size={12} />}
        error={errors.goal}
      >
        <textarea
          name="goal"
          rows={2}
          value={formData.goal}
          onChange={handleInputChange}
          className={inputClass(!!errors.goal)}
          placeholder="Зорилго..."
        />
      </InputField>
    </div>
  );
};
