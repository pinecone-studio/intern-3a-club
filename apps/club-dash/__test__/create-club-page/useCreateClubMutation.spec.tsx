import { renderHook, act } from '@testing-library/react';
import { useMutation, useQuery } from '@apollo/client/react';
import {
  CREATE_CLUB_WITH_SCHEDULE,
  GET_ALL_CLUBS,
  useCreateClubMutation,
} from '../../../club-dash/app/_hooks/use-create-club';
import { CreateClubState } from '../../../club-dash/libs/types';

jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useMutation: jest.fn(),
  useQuery: jest.fn(),
}));

describe('useCreateClubMutation Hook', () => {
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  const consoleErrorMock = jest
    .spyOn(console, 'error')
    .mockImplementation(() => {});
  const mockMutate = jest.fn();

  const validState: CreateClubState = {
    clubName: 'Coding Club',
    clubDesc: 'Learn React',
    teacherName: 'teacher-123',
    clubMinStudent: '5',
    clubMaxStudent: '20',
    clubStartDate: new Date('2026-03-01'),
    clubClassRoom: '301',
    clubStartTime: '14:00',
    clubDuration: '01:30',
    clubFrequency: 'WEEKLY',
    selectedDays: ['1'],
    selectedFreqId: 'freq-1',
  };

  const mockEvent = {
    preventDefault: jest.fn(),
  } as unknown as React.FormEvent<HTMLFormElement>;

  beforeEach(() => {
    jest.clearAllMocks();

    (useMutation as unknown as jest.Mock).mockReturnValue([
      mockMutate,
      { loading: false, data: null, error: null },
    ]);

    (useQuery as unknown as jest.Mock).mockReturnValue({
      data: { getAllClubs: [] },
      loading: false,
      error: null,
    });
  });

  it('should return loading and data states from the query', () => {
    (useQuery as unknown as jest.Mock).mockReturnValue({
      data: { getAllClubs: [{ id: '1' }] },
      loading: true,
      error: new Error('Query error'),
    });

    const { result } = renderHook(() => useCreateClubMutation(validState));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.err?.message).toBe('Query error');
  });

  it('should alert if clubStartDate is missing', async () => {
    const invalidState = {
      ...validState,
      clubStartDate: undefined,
    } as unknown as CreateClubState;
    const { result } = renderHook(() => useCreateClubMutation(invalidState));

    await act(async () => {
      await result.current.handleSubmit(mockEvent);
    });

    expect(alertMock).toHaveBeenCalledWith('Огноо сонгоно уу');
  });

  it('should transform data and call mutation successfully', async () => {
    mockMutate.mockResolvedValueOnce({ data: { success: true } });

    const { result } = renderHook(() => useCreateClubMutation(validState));

    await act(async () => {
      await result.current.handleSubmit(mockEvent);
    });

    expect(mockMutate).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Амжилттай үүсгэлээ!');
  });

  it('should handle standard Error objects', async () => {
    const mockError = new Error('Fail');
    mockMutate.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useCreateClubMutation(validState));

    await act(async () => {
      await result.current.handleSubmit(mockEvent);
    });

    expect(consoleErrorMock).toHaveBeenCalledWith('Fail');
    expect(alertMock).toHaveBeenCalledWith('Алдаа гарлаа');
  });

  it('should handle non-Error objects thrown during mutation', async () => {
    mockMutate.mockRejectedValueOnce('Critical Failure');

    const { result } = renderHook(() => useCreateClubMutation(validState));

    await act(async () => {
      await result.current.handleSubmit(mockEvent);
    });

    expect(consoleErrorMock).toHaveBeenCalledWith('Unknown error');
    expect(alertMock).toHaveBeenCalledWith('Алдаа гарлаа');
  });

  it('should filter out selectedDays that are not found in mockWeekdays', async () => {
    mockMutate.mockResolvedValueOnce({ data: {} });
    const stateWithInvalidDay = {
      ...validState,
      selectedDays: ['invalid-id'],
    } as unknown as CreateClubState;

    const { result } = renderHook(() =>
      useCreateClubMutation(stateWithInvalidDay)
    );

    await act(async () => {
      await result.current.handleSubmit(mockEvent);
    });

    expect(mockMutate).toHaveBeenCalledWith(
      expect.objectContaining({
        variables: expect.objectContaining({ selectedDays: [] }),
      })
    );
  });

  it('should handle duration strings with missing components', async () => {
    mockMutate.mockResolvedValueOnce({ data: {} });

    const stateWithBadDuration = {
      ...validState,
      clubDuration: ':',
    } as unknown as CreateClubState;

    const { result } = renderHook(() =>
      useCreateClubMutation(stateWithBadDuration)
    );

    await act(async () => {
      await result.current.handleSubmit(mockEvent);
    });

    expect(mockMutate).toHaveBeenCalledWith(
      expect.objectContaining({
        variables: expect.objectContaining({ duration: 0 }),
      })
    );
  });

  it('should use refetchQueries with GET_ALL_CLUBS', () => {
    renderHook(() => useCreateClubMutation(validState));

    expect(useMutation as unknown as jest.Mock).toHaveBeenCalledWith(
      CREATE_CLUB_WITH_SCHEDULE,
      expect.objectContaining({ refetchQueries: [{ query: GET_ALL_CLUBS }] })
    );
  });
});
