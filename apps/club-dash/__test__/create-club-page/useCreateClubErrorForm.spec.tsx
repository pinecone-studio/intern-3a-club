import { renderHook, act } from '@testing-library/react';
import { useCreateClubErrorForm } from '../../app/_hooks/use-create-club-errorform';

jest.mock('../../app/_hooks/use-createclub-states', () => ({
  useCreateClubState: () => ({
    state: {
      clubName: '',
      teacherId: '',
      clubDesc: '',
      clubStartDate: [],
      selectedFreqId: '1',
      clubTerm: '1',
      clubClassRoom: '301',
      clubStartTime: '13:00',
      clubDuration: '1:00',
      clubMaxStudent: '20',
      clubMinStudent: '0',
      clubFrequency: 'ONCE',
      scheduleChange: {},
    },
    setters: {
      setTeacherId: jest.fn(),
      setClubStartDate: jest.fn(),
      setSelectedFreqId: jest.fn(),
      setClubTerm: jest.fn(),
      setClubClassRoom: jest.fn(),
      setClubStartTime: jest.fn(),
      setClubDuration: jest.fn(),
      setClubFrequency: jest.fn(),
      setScheduleChange: jest.fn(),
    },
    handlers: {
      handleName: jest.fn(),
      handleDesc: jest.fn(),
      handleMax: jest.fn(),
      handleUpdateChange: jest.fn(),
      handleDeleteDate: jest.fn(),
      handleEmptyFields: jest.fn(),
    },
  }),
}));

const mockHandleSubmit = jest.fn();
jest.mock('../../app/_hooks/use-create-club', () => ({
  useCreateClubMutation: jest.fn(() => ({
    handleSubmit: mockHandleSubmit,
    loading: false,
  })),
}));

jest.mock('../../app/_hooks/use-create-club-validation', () => ({
  useFormErrorHandlers: jest.fn((_setErrors, onName, onDesc, onTeacher) => ({
    handleNameChange: onName,
    handleDescChange: onDesc,
    handleTeacherChange: onTeacher,
  })),
  useClubSubmit: jest.fn((state, setErrors, submitMutation) => ({
    onSubmit: submitMutation,
  })),
  useClubSuccess: jest.fn((setOpen, handleEmptyFields, setErrors) => () => {
    setOpen(false);
    handleEmptyFields();
    setErrors({});
  }),
}));

import { useCreateClubMutation } from '../../app/_hooks/use-create-club';
import {
  useClubSubmit,
  useFormErrorHandlers,
} from '../../app/_hooks/use-create-club-validation';

describe('useCreateClubErrorForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useCreateClubMutation as jest.Mock).mockReturnValue({
      handleSubmit: mockHandleSubmit,
      loading: false,
    });
  });

  it('initializes with open=false', () => {
    const { result } = renderHook(() => useCreateClubErrorForm());
    expect(result.current.open).toBe(false);
  });

  it('initializes with empty errors', () => {
    const { result } = renderHook(() => useCreateClubErrorForm());
    expect(result.current.errors).toEqual({});
  });

  it('setOpen updates open state', () => {
    const { result } = renderHook(() => useCreateClubErrorForm());
    act(() => {
      result.current.setOpen(true);
    });
    expect(result.current.open).toBe(true);
  });

  it('returns state from useCreateClubState', () => {
    const { result } = renderHook(() => useCreateClubErrorForm());
    expect(result.current.state.clubClassRoom).toBe('301');
    expect(result.current.state.clubStartTime).toBe('13:00');
  });

  it('returns setters from useCreateClubState', () => {
    const { result } = renderHook(() => useCreateClubErrorForm());
    expect(result.current.setters.setTeacherId).toBeDefined();
    expect(result.current.setters.setClubStartDate).toBeDefined();
  });

  it('returns handlers from useCreateClubState', () => {
    const { result } = renderHook(() => useCreateClubErrorForm());
    expect(result.current.handlers.handleName).toBeDefined();
    expect(result.current.handlers.handleEmptyFields).toBeDefined();
  });

  it('returns loading from useCreateClubMutation', () => {
    const { result } = renderHook(() => useCreateClubErrorForm());
    expect(result.current.loading).toBe(false);
  });

  it('returns loading=true when mutation is loading', () => {
    (useCreateClubMutation as jest.Mock).mockReturnValue({
      handleSubmit: mockHandleSubmit,
      loading: true,
    });
    const { result } = renderHook(() => useCreateClubErrorForm());
    expect(result.current.loading).toBe(true);
  });

  it('passes onSuccess to useCreateClubMutation', () => {
    renderHook(() => useCreateClubErrorForm());
    expect(useCreateClubMutation).toHaveBeenCalledWith(
      expect.any(Object),
      expect.any(Function)
    );
  });

  it('onSuccess closes dialog, resets fields and clears errors', () => {
    const { result } = renderHook(() => useCreateClubErrorForm());
    act(() => {
      result.current.setOpen(true);
    });
    expect(result.current.open).toBe(true);

    const onSuccess = (useCreateClubMutation as jest.Mock).mock.calls[0][1];
    act(() => {
      onSuccess();
    });

    expect(result.current.open).toBe(false);
    expect(result.current.errors).toEqual({});
  });

  it('returns onSubmit from useClubSubmit', () => {
    const { result } = renderHook(() => useCreateClubErrorForm());
    expect(result.current.onSubmit).toBeDefined();
  });

  it('passes correct args to useClubSubmit', () => {
    renderHook(() => useCreateClubErrorForm());
    expect(useClubSubmit).toHaveBeenCalledWith(
      expect.any(Object),
      expect.any(Function),
      mockHandleSubmit
    );
  });

  it('returns handleNameChange, handleDescChange, handleTeacherChange', () => {
    const { result } = renderHook(() => useCreateClubErrorForm());
    expect(result.current.handleNameChange).toBeDefined();
    expect(result.current.handleDescChange).toBeDefined();
    expect(result.current.handleTeacherChange).toBeDefined();
  });

  it('passes correct args to useFormErrorHandlers', () => {
    renderHook(() => useCreateClubErrorForm());
    expect(useFormErrorHandlers).toHaveBeenCalledWith(
      expect.any(Function),
      expect.any(Function),
      expect.any(Function),
      expect.any(Function)
    );
  });
});
