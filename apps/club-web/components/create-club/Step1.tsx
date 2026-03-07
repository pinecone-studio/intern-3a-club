//apps/club-web/components/create-club/Step1.tsx
import { Globe2, Goal } from 'lucide-react';
import { InputField } from './InputField';
import { cn } from 'lib/utils';
import { Step1Props } from './types';

export const Step1 = ({ formData, setFormData, errors }: Step1Props) => {
  // Input өөрчлөгдөхөд useCreateClub-аас ирсэн handleFormChange-ийг дуудна
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(e.target.name, e.target.value);
  };

  const inputClass = (hasError: boolean) =>
    cn(
      'w-full bg-black/40 border rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all',
      hasError ? 'border-red-500/50 bg-red-500/5' : 'border-white/10'
    );

  return (
    <div className="space-y-6">
      <InputField
        label="Клубын нэр"
        icon={<Globe2 size={16} />}
        error={errors.name}
      >
        <input
          name="name" // handleFormChange(name, value) гэж очих "name"
          value={formData.name || ''} // undefined байхаас сэргийлнэ
          onChange={onInputChange}
          className={inputClass(!!errors.name)}
          placeholder="Wizards Club..."
        />
      </InputField>

      <InputField
        label="Клубын зорилго"
        icon={<Goal size={16} />}
        error={errors.goal}
      >
        <textarea
          name="goal" // handleFormChange(name, value) гэж очих "name"
          rows={3}
          value={formData.goal || ''}
          onChange={onInputChange}
          className={inputClass(!!errors.goal)}
          placeholder="Зорилго..."
        />
      </InputField>
    </div>
  );
};
