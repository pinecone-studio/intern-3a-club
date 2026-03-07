//apps/club-web/components/create-club/useCreateClub.ts
import { useState } from 'react';
import { useMutation } from '@apollo/client/react';
import {
  INITIAL_FORM_DATA,
  FormDataType,
  CreateClubWithSchedulesResponse,
  CreateClubInput,
} from './types';
import {
  validateStep1,
  buildMutationVariables,
  handleMutationResult,
} from './create-club-helpers';
import { CREATE_CLUB_WITH_SCHEDULE } from '../../graphql/mutations';

export const useCreateClub = () => {
  const [formData, setFormData] = useState<FormDataType>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [createClub, { loading }] = useMutation<
    CreateClubWithSchedulesResponse,
    CreateClubInput
  >(CREATE_CLUB_WITH_SCHEDULE);

  const handleFormChange = (name: string, value: string) => {
    // Өгөгдлөө шинэчлэх
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Хэрэв тухайн талбарт алдаа байсан бол түүнийг арилгах
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async () => {
    const step1Errors = validateStep1(formData);
    if (Object.keys(step1Errors).length > 0) {
      setErrors(step1Errors);
      return;
    }

    const res = await createClub({
      variables: buildMutationVariables(formData),
    });

    handleMutationResult(res, () => {
      alert('Клуб амжилттай үүслээ');
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
    });
  };

  return {
    formData,
    handleFormChange,
    setFormData,
    errors,
    handleSubmit,
    loading,
  };
};
