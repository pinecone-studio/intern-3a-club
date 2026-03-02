import { Globe2, UserCheck, Goal, Mail } from 'lucide-react';
import React, { ChangeEvent, useCallback } from 'react';
import { Step1Props, FormDataType, GetAllTeacher } from './types';
import { cn } from 'lib/utils';
import { TeacherSelect } from './TeacherSelect';
import { InputField } from './InputField';
import { PreferredTeacherList } from './PreferredTeacherList';
import { handlePreferredToggleHelper } from './create-club-helpers';

interface SectionProps {
  formData: FormDataType;
  handleInputChange: (_e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  teachers?: GetAllTeacher[];
  errors: Record<string, string>;
  inputClass: (_hasError: boolean) => string;
}

const NameAndTeacher = ({ formData, handleInputChange, teachers, errors, inputClass }: SectionProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <InputField
      label={<>Клубын нэр <span className="ml-2 text-[10px] uppercase text-amber-300">(зайлшгүй)</span></>}
      icon={<Globe2 size={12} />} error={errors.name} id="name-input"
    >
      <input id="name-input" name="name" value={formData.name} onChange={handleInputChange} className={inputClass(!!errors.name)} placeholder="Wizards Club..." />
    </InputField>
    <InputField
      label={<>Хариуцах хүн <span className="ml-2 text-[10px] uppercase text-slate-300">(optional)</span></>}
      icon={<UserCheck size={12} />} error={errors.teacher} id="teacher-select"
    >
      <TeacherSelect value={formData.teacher} onChange={handleInputChange} teachers={teachers} className={inputClass(!!errors.teacher)} />
    </InputField>
  </div>
);

interface PreferredProps {
  teachers?: GetAllTeacher[];
  formData: FormDataType;
  handlePreferredToggle: (_id: string) => void;
}

const PreferredSection = ({ teachers, formData, handlePreferredToggle }: PreferredProps) => (
  <div>
    <label className="text-[10px] font-black text-primary flex items-center gap-2">Багшийн санал (preferred teachers)</label>
    <PreferredTeacherList teachers={teachers || []} selectedIds={formData.preferredTeachers || []} onToggle={handlePreferredToggle} />
  </div>
);

const GoalSection = ({ formData, handleInputChange, errors, inputClass }: SectionProps) => (
  <InputField
    label={<>Клубын зорилго <span className="ml-2 text-[10px] uppercase text-amber-300">(зайлшгүй)</span></>}
    icon={<Goal size={12} />} error={errors.goal} id="goal-input"
  >
    <textarea id="goal-input" name="goal" rows={2} value={formData.goal} onChange={handleInputChange} className={inputClass(!!errors.goal)} placeholder="Зорилго..." />
  </InputField>
);

export const Step1 = ({ formData, setFormData, teachers, errors = {} }: Step1Props & { errors?: Record<string, string> }) => {
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }, [formData, setFormData]);

  const handlePreferredToggle = useCallback((id: string) => {
    const current = formData?.preferredTeachers || [];
    const newTeachers = handlePreferredToggleHelper(current, id);
    setFormData({ ...formData, preferredTeachers: newTeachers });
  }, [formData, setFormData]);

  const inputClass = (hasError: boolean) =>
    cn('w-full bg-black/40 border rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-primary/50 font-bold italic transition-all', hasError ? 'border-red-500/50 bg-red-500/5' : 'border-white/10');

  if (!formData) return null;

  return (
    <div className="space-y-8">
      <NameAndTeacher formData={formData} handleInputChange={handleInputChange} teachers={teachers} errors={errors} inputClass={inputClass} />
      {formData.teacher === 'student' && (
        <InputField label="Сурагчийн и-мэйл хаяг" icon={<Mail size={12} />} error={errors.studentEmail} id="student-email" >
          <input id="student-email" type="email" name="studentEmail" value={formData.studentEmail} onChange={handleInputChange} className={inputClass(!!errors.studentEmail)} data-testid="student-email-input" />
        </InputField>
      )}
      <PreferredSection teachers={teachers} formData={formData} handlePreferredToggle={handlePreferredToggle} />
      <GoalSection formData={formData} handleInputChange={handleInputChange} errors={errors} inputClass={inputClass} />
    </div>
  );
};
