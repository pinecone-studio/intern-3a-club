//apps/club-web/components/create-club/ClubForm.tsx
'use client';
import React from 'react';
import { Step1 } from './Step1';
import { ClubFormProps } from './types';

export const ClubForm = ({
  formData,
  handleFormChange,
  handleSubmit,
  errors,
  loading,
}: ClubFormProps) => {
  return (
    <div className="space-y-6">
      <Step1
        formData={formData}
        setFormData={handleFormChange}
        errors={errors}
      />
      <button
        type="button"
        disabled={loading}
        onClick={handleSubmit}
        className="w-full h-11 rounded-lg bg-blue-600 disabled:opacity-50 ..."
      >
                {loading ? 'Илгээж байна...' : 'Хүсэлт илгээх'}
      </button>
    </div>
  );
};
