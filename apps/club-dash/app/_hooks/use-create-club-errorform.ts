import { useState } from 'react';
import { useCreateClubState } from './use-createclub-states';
import { useCreateClubMutation } from './use-create-club';
import {
  FormErrors,
  useFormErrorHandlers,
  useClubSubmit,
  useClubSuccess,
} from './use-create-club-validation';

export const useCreateClubErrorForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const { state, setters, handlers } = useCreateClubState();

  const onSuccess = useClubSuccess(
    setOpen,
    handlers.handleEmptyFields,
    setErrors
  );

  const { handleSubmit: submitMutation, loading } = useCreateClubMutation(
    state,
    onSuccess
  );

  const { onSubmit } = useClubSubmit(state, setErrors, submitMutation);

  const { handleNameChange, handleDescChange, handleTeacherChange } =
    useFormErrorHandlers(
      setErrors,
      handlers.handleName,
      handlers.handleDesc,
      setters.setTeacherId
    );

  return {
    open,
    setOpen,
    errors,
    state,
    setters,
    handlers,
    loading,
    onSubmit,
    handleNameChange,
    handleDescChange,
    handleTeacherChange,
  };
};
