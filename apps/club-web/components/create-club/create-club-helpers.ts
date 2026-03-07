//apps/club-web/components/create-club/create-club-helpers.ts

import { FormDataType } from './types';
import { FetchResult } from '@apollo/client';
import { CreateClubWithSchedulesResponse } from './types';

export const validateStep1 = (formData: FormDataType) => {
  const errors: Record<string, string> = {};
  if (!formData.name.trim()) errors.name = 'Клубын нэр заавал оруулна уу';
  if (!formData.goal.trim()) errors.goal = 'Клубын зорилго заавал оруулна уу';
  return errors;
};

export const buildMutationVariables = (formData: FormDataType) => ({
  input: {
    name: formData.name,
    description: formData.goal,
    type: 'mentor',
    minMember: 0,
    maxMember: 20,
  },
  schedules: [],
  frequency: 'ONCE',
});

const getErrorMessage = (
  res: FetchResult<CreateClubWithSchedulesResponse>
): string | null => {
  return res.errors?.[0]?.message || null;
};

export const handleMutationResult = (
  res: FetchResult<CreateClubWithSchedulesResponse>,
  onSuccess: () => void
): { success: boolean } => {
  const errorMsg = getErrorMessage(res);

  if (errorMsg) {
    alert(`Алдаа: ${errorMsg}`);
    return { success: false };
  }

  const isSuccess = !!res.data?.createClubWithSchedules;
  if (isSuccess) onSuccess();

  return { success: isSuccess };
};
