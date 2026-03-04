import { renderHook, act } from '@testing-library/react';
import React from 'react';
import {
  validateClubName,
  validateTeacherId,
  validateClubDesc,
  buildFormErrors,
  hasErrors,
  clearFieldError,
  useFormErrorHandlers,
  toStr,
  applyErrors,
  runValidation,
  handleFormSubmit,
  onClubCreateSuccess,
  useClubSubmit,
  useClubSuccess,
  FormState,
} from '../../app/_hooks/use-create-club-validation';

describe('validateClubName', () => {
  it('returns undefined for valid name', () => {
    expect(validateClubName('Coding Club')).toBeUndefined();
  });

  it('returns error for empty string', () => {
    expect(validateClubName('')).toBe('Клубын нэр хоосон байж болохгүй.');
  });

  it('returns error for whitespace only', () => {
    expect(validateClubName('   ')).toBe('Клубын нэр хоосон байж болохгүй.');
  });
});

describe('validateTeacherId', () => {
  it('returns undefined for valid teacher id', () => {
    expect(validateTeacherId('teacher1')).toBeUndefined();
  });

  it('returns error for empty string', () => {
    expect(validateTeacherId('')).toBe('Багш сонгоно уу.');
  });

  it('returns error for whitespace only', () => {
    expect(validateTeacherId('   ')).toBe('Багш сонгоно уу.');
  });
});

describe('validateClubDesc', () => {
  it('returns undefined for valid description', () => {
    expect(validateClubDesc('Learn to code')).toBeUndefined();
  });

  it('returns error for empty string', () => {
    expect(validateClubDesc('')).toBe('Клубын зорилго хоосон байж болохгүй.');
  });

  it('returns error for whitespace only', () => {
    expect(validateClubDesc('   ')).toBe(
      'Клубын зорилго хоосон байж болохгүй.'
    );
  });
});

describe('buildFormErrors', () => {
  it('returns no errors for valid inputs', () => {
    const errors = buildFormErrors('Club', 'T1', 'Desc');
    expect(errors.clubName).toBeUndefined();
    expect(errors.teacherId).toBeUndefined();
    expect(errors.clubDesc).toBeUndefined();
  });

  it('returns all errors for empty inputs', () => {
    const errors = buildFormErrors('', '', '');
    expect(errors.clubName).toBeDefined();
    expect(errors.teacherId).toBeDefined();
    expect(errors.clubDesc).toBeDefined();
  });

  it('returns only relevant errors for partial invalid inputs', () => {
    const errors = buildFormErrors('Club', '', 'Desc');
    expect(errors.clubName).toBeUndefined();
    expect(errors.teacherId).toBeDefined();
    expect(errors.clubDesc).toBeUndefined();
  });
});

describe('hasErrors', () => {
  it('returns false when no errors', () => {
    expect(hasErrors({})).toBe(false);
  });

  it('returns true when any error exists', () => {
    expect(hasErrors({ clubName: 'error' })).toBe(true);
  });

  it('returns false when all fields are undefined', () => {
    expect(hasErrors({ clubName: undefined, teacherId: undefined })).toBe(
      false
    );
  });
});

describe('clearFieldError', () => {
  it('clears the specified field error', () => {
    const setErrors = jest.fn();
    clearFieldError(setErrors, 'clubName');
    const updater = setErrors.mock.calls[0][0];
    const result = updater({ clubName: 'error', teacherId: 'error' });
    expect(result.clubName).toBeUndefined();
    expect(result.teacherId).toBe('error');
  });

  it('clears teacherId error', () => {
    const setErrors = jest.fn();
    clearFieldError(setErrors, 'teacherId');
    const updater = setErrors.mock.calls[0][0];
    const result = updater({ clubName: 'error', teacherId: 'error' });
    expect(result.teacherId).toBeUndefined();
    expect(result.clubName).toBe('error');
  });

  it('clears clubDesc error', () => {
    const setErrors = jest.fn();
    clearFieldError(setErrors, 'clubDesc');
    const updater = setErrors.mock.calls[0][0];
    const result = updater({ clubDesc: 'error', clubName: 'error' });
    expect(result.clubDesc).toBeUndefined();
    expect(result.clubName).toBe('error');
  });
});

describe('toStr', () => {
  it('returns the string value when defined', () => {
    expect(toStr('hello')).toBe('hello');
  });

  it('returns empty string when undefined', () => {
    expect(toStr(undefined)).toBe('');
  });

  it('returns empty string for empty string input', () => {
    expect(toStr('')).toBe('');
  });
});

describe('applyErrors', () => {
  it('calls setErrors with computed errors and returns them', () => {
    const setErrors = jest.fn();
    const state: FormState = { clubName: '', teacherId: '', clubDesc: '' };
    const result = applyErrors(state, setErrors);
    expect(setErrors).toHaveBeenCalledWith(
      expect.objectContaining({
        clubName: expect.any(String),
        teacherId: expect.any(String),
        clubDesc: expect.any(String),
      })
    );
    expect(result.clubName).toBeDefined();
  });

  it('returns no errors for valid state', () => {
    const setErrors = jest.fn();
    const state: FormState = {
      clubName: 'Club',
      teacherId: 'T1',
      clubDesc: 'Desc',
    };
    const result = applyErrors(state, setErrors);
    expect(result.clubName).toBeUndefined();
    expect(result.teacherId).toBeUndefined();
    expect(result.clubDesc).toBeUndefined();
  });

  it('handles undefined fields in state', () => {
    const setErrors = jest.fn();
    const result = applyErrors({}, setErrors);
    expect(result.clubName).toBeDefined();
    expect(result.teacherId).toBeDefined();
    expect(result.clubDesc).toBeDefined();
  });
});

describe('runValidation', () => {
  it('returns true when state is valid', () => {
    const setErrors = jest.fn();
    expect(
      runValidation(
        { clubName: 'Club', teacherId: 'T1', clubDesc: 'Desc' },
        setErrors
      )
    ).toBe(true);
  });

  it('returns false when state is invalid', () => {
    const setErrors = jest.fn();
    expect(
      runValidation({ clubName: '', teacherId: '', clubDesc: '' }, setErrors)
    ).toBe(false);
  });
});

describe('handleFormSubmit', () => {
  const mockPreventDefault = jest.fn();
  const mockSubmitMutation = jest.fn();
  const mockSetErrors = jest.fn();
  const mockEvent = {
    preventDefault: mockPreventDefault,
  } as unknown as React.FormEvent<HTMLFormElement>;

  beforeEach(() => jest.clearAllMocks());

  it('calls submitMutation when validation passes', () => {
    const state: FormState = {
      clubName: 'Club',
      teacherId: 'T1',
      clubDesc: 'Desc',
    };
    handleFormSubmit(mockEvent, state, mockSetErrors, mockSubmitMutation);
    expect(mockPreventDefault).toHaveBeenCalled();
    expect(mockSubmitMutation).toHaveBeenCalledWith(mockEvent);
  });

  it('does not call submitMutation when validation fails', () => {
    const state: FormState = { clubName: '', teacherId: '', clubDesc: '' };
    handleFormSubmit(mockEvent, state, mockSetErrors, mockSubmitMutation);
    expect(mockPreventDefault).toHaveBeenCalled();
    expect(mockSubmitMutation).not.toHaveBeenCalled();
  });
});

describe('onClubCreateSuccess', () => {
  it('calls setOpen(false), handleEmptyFields, and setErrors({})', () => {
    const setOpen = jest.fn();
    const handleEmptyFields = jest.fn();
    const setErrors = jest.fn();
    onClubCreateSuccess(setOpen, handleEmptyFields, setErrors);
    expect(setOpen).toHaveBeenCalledWith(false);
    expect(handleEmptyFields).toHaveBeenCalled();
    expect(setErrors).toHaveBeenCalledWith({});
  });
});

describe('useFormErrorHandlers', () => {
  it('handleNameChange calls onName and clears clubName error', () => {
    const setErrors = jest.fn();
    const onName = jest.fn();
    const onDesc = jest.fn();
    const onTeacher = jest.fn();
    const { result } = renderHook(() =>
      useFormErrorHandlers(setErrors, onName, onDesc, onTeacher)
    );
    const event = {
      target: { value: 'Club' },
    } as React.ChangeEvent<HTMLTextAreaElement>;
    act(() => {
      result.current.handleNameChange(event);
    });
    expect(onName).toHaveBeenCalledWith(event);
    expect(setErrors).toHaveBeenCalled();
  });

  it('handleDescChange calls onDesc and clears clubDesc error', () => {
    const setErrors = jest.fn();
    const onName = jest.fn();
    const onDesc = jest.fn();
    const onTeacher = jest.fn();
    const { result } = renderHook(() =>
      useFormErrorHandlers(setErrors, onName, onDesc, onTeacher)
    );
    const event = {
      target: { value: 'Desc' },
    } as React.ChangeEvent<HTMLTextAreaElement>;
    act(() => {
      result.current.handleDescChange(event);
    });
    expect(onDesc).toHaveBeenCalledWith(event);
    expect(setErrors).toHaveBeenCalled();
  });

  it('handleTeacherChange calls onTeacher and clears teacherId error', () => {
    const setErrors = jest.fn();
    const onName = jest.fn();
    const onDesc = jest.fn();
    const onTeacher = jest.fn();
    const { result } = renderHook(() =>
      useFormErrorHandlers(setErrors, onName, onDesc, onTeacher)
    );
    act(() => {
      result.current.handleTeacherChange('T1');
    });
    expect(onTeacher).toHaveBeenCalledWith('T1');
    expect(setErrors).toHaveBeenCalled();
  });
});

describe('useClubSubmit', () => {
  it('calls submitMutation when validation passes', () => {
    const setErrors = jest.fn();
    const submitMutation = jest.fn();
    const state: FormState = {
      clubName: 'Club',
      teacherId: 'T1',
      clubDesc: 'Desc',
    };
    const mockEvent = {
      preventDefault: jest.fn(),
    } as unknown as React.FormEvent<HTMLFormElement>;
    const { result } = renderHook(() =>
      useClubSubmit(state, setErrors, submitMutation)
    );
    act(() => {
      result.current.onSubmit(mockEvent);
    });
    expect(submitMutation).toHaveBeenCalled();
  });

  it('does not call submitMutation when validation fails', () => {
    const setErrors = jest.fn();
    const submitMutation = jest.fn();
    const state: FormState = { clubName: '', teacherId: '', clubDesc: '' };
    const mockEvent = {
      preventDefault: jest.fn(),
    } as unknown as React.FormEvent<HTMLFormElement>;
    const { result } = renderHook(() =>
      useClubSubmit(state, setErrors, submitMutation)
    );
    act(() => {
      result.current.onSubmit(mockEvent);
    });
    expect(submitMutation).not.toHaveBeenCalled();
  });

  it('calls preventDefault on submit event', () => {
    const setErrors = jest.fn();
    const submitMutation = jest.fn();
    const state: FormState = {
      clubName: 'Club',
      teacherId: 'T1',
      clubDesc: 'Desc',
    };
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault,
    } as unknown as React.FormEvent<HTMLFormElement>;
    const { result } = renderHook(() =>
      useClubSubmit(state, setErrors, submitMutation)
    );
    act(() => {
      result.current.onSubmit(mockEvent);
    });
    expect(mockPreventDefault).toHaveBeenCalled();
  });
});

describe('useClubSuccess', () => {
  it('calls setOpen, handleEmptyFields, and setErrors on success', () => {
    const setOpen = jest.fn();
    const handleEmptyFields = jest.fn();
    const setErrors = jest.fn();
    const { result } = renderHook(() =>
      useClubSuccess(setOpen, handleEmptyFields, setErrors)
    );
    act(() => {
      result.current();
    });
    expect(setOpen).toHaveBeenCalledWith(false);
    expect(handleEmptyFields).toHaveBeenCalled();
    expect(setErrors).toHaveBeenCalledWith({});
  });

  it('can be called multiple times', () => {
    const setOpen = jest.fn();
    const handleEmptyFields = jest.fn();
    const setErrors = jest.fn();
    const { result } = renderHook(() =>
      useClubSuccess(setOpen, handleEmptyFields, setErrors)
    );
    act(() => {
      result.current();
      result.current();
    });
    expect(setOpen).toHaveBeenCalledTimes(2);
    expect(handleEmptyFields).toHaveBeenCalledTimes(2);
  });
});
