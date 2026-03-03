import { Dispatch, SetStateAction } from 'react';
import React from 'react';

const NOT_EMPTY_REGEX = /\S/;

export type FormErrors = {
  clubName?: string;
  teacherId?: string;
  clubDesc?: string;
};

export type FormState = {
  clubName?: string;
  teacherId?: string;
  clubDesc?: string;
};

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;
type SetErrors = Dispatch<SetStateAction<FormErrors>>;
type SubmitEvent = React.FormEvent<HTMLFormElement>;

export function validateClubName(value: string): string | undefined {
  return NOT_EMPTY_REGEX.test(value)
    ? undefined
    : 'Клубын нэр хоосон байж болохгүй.';
}

export function validateTeacherId(value: string): string | undefined {
  return NOT_EMPTY_REGEX.test(value) ? undefined : 'Багш сонгоно уу.';
}

export function validateClubDesc(value: string): string | undefined {
  return NOT_EMPTY_REGEX.test(value)
    ? undefined
    : 'Клубын зорилго хоосон байж болохгүй.';
}

export function buildFormErrors(
  clubName: string,
  teacherId: string,
  clubDesc: string
): FormErrors {
  return {
    clubName: validateClubName(clubName),
    teacherId: validateTeacherId(teacherId),
    clubDesc: validateClubDesc(clubDesc),
  };
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.values(errors).some(Boolean);
}

export function clearFieldError(setErrors: SetErrors, field: keyof FormErrors) {
  setErrors((prev) => ({ ...prev, [field]: undefined }));
}

export function useFormErrorHandlers(
  setErrors: SetErrors,
  onName: (_e: ChangeEvent) => void,
  onDesc: (_e: ChangeEvent) => void,
  onTeacher: (_id: string) => void
) {
  function handleNameChange(e: ChangeEvent) {
    onName(e);
    clearFieldError(setErrors, 'clubName');
  }
  function handleDescChange(e: ChangeEvent) {
    onDesc(e);
    clearFieldError(setErrors, 'clubDesc');
  }
  function handleTeacherChange(id: string) {
    onTeacher(id);
    clearFieldError(setErrors, 'teacherId');
  }

  return { handleNameChange, handleDescChange, handleTeacherChange };
}

export function toStr(value: string | undefined): string {
  return value || '';
}

export function applyErrors(
  state: FormState,
  setErrors: SetErrors
): FormErrors {
  const newErrors = buildFormErrors(
    toStr(state.clubName),
    toStr(state.teacherId),
    toStr(state.clubDesc)
  );
  setErrors(newErrors);
  return newErrors;
}

export function runValidation(state: FormState, setErrors: SetErrors): boolean {
  return !hasErrors(applyErrors(state, setErrors));
}

export function handleFormSubmit(
  e: SubmitEvent,
  state: FormState,
  setErrors: SetErrors,
  submitMutation: (_e: SubmitEvent) => void
) {
  e.preventDefault();
  if (runValidation(state, setErrors)) submitMutation(e);
}

export function onClubCreateSuccess(
  setOpen: (_v: boolean) => void,
  handleEmptyFields: () => void,
  setErrors: SetErrors
) {
  setOpen(false);
  handleEmptyFields();
  setErrors({});
}

export function useClubSubmit(
  state: FormState,
  setErrors: SetErrors,
  submitMutation: (_e: SubmitEvent) => void
) {
  function onSubmit(e: SubmitEvent) {
    handleFormSubmit(e, state, setErrors, submitMutation);
  }
  return { onSubmit };
}

export function useClubSuccess(
  setOpen: (_v: boolean) => void,
  handleEmptyFields: () => void,
  setErrors: SetErrors
) {
  function onSuccess() {
    onClubCreateSuccess(setOpen, handleEmptyFields, setErrors);
  }
  return onSuccess;
}
