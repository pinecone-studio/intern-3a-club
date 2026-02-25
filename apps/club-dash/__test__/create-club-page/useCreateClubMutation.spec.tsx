import { renderHook, act } from '@testing-library/react';
import { useMutation } from '@apollo/client/react';
import {
  useCreateClubMutation,
  parseDuration,
  detailedSchedule,
  clubDatas,
  getVariables,
  performMutation,
} from '../../app/_hooks/use-create-club';
import { CreateClubState } from '../../libs/types';
import React from 'react';

jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useMutation: jest.fn(),
}));

describe('useCreateClubMutation', () => {
  let alertMock: jest.SpyInstance;
  let consoleErrorMock: jest.SpyInstance;
  let consoleLogMock: jest.SpyInstance;

  const mockMutate = jest.fn();

  const validState: CreateClubState = {
    clubName: 'Coding',
    clubDesc: 'Desc',
    teacherName: 'T1',
    clubMinStudent: '5',
    clubMaxStudent: '20',
    clubStartDate: [new Date('2026-03-01')],
    clubClassRoom: '301',
    clubStartTime: '14:00',
    clubDuration: '1:00',
    clubFrequency: 'Weekly',
    selectedFreqId: '2',
    clubTerm: '1',
  };

  const mockEvent = {
    preventDefault: jest.fn(),
  } as unknown as React.FormEvent<HTMLFormElement>;

  beforeEach(() => {
    jest.clearAllMocks();
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    consoleErrorMock = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    consoleLogMock = jest.spyOn(console, 'log').mockImplementation(() => {});

    const mockedUseMutation = useMutation as unknown as jest.Mock;
    mockedUseMutation.mockReturnValue([
      mockMutate,
      { loading: false, data: null, error: null },
    ]);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('parseDuration', () => {
    it('converts HH:MM to total minutes', () => {
      expect(parseDuration('1:30')).toBe(90);
    });

    it('handles 0:00', () => {
      expect(parseDuration('0:00')).toBe(0);
    });

    it('falls back to 0 for invalid parts', () => {
      expect(parseDuration(':')).toBe(0);
    });
  });

  describe('detailedSchedule', () => {
    it('maps dates to schedule objects', () => {
      const result = detailedSchedule(
        ['2026-03-01', '2026-03-08'],
        '301',
        '14:00',
        60
      );
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        club: 1,
        date: '2026-03-01',
        room: '301',
        startTime: '14:00',
        durationMinutes: 60,
      });
      expect(result[1].club).toBe(2);
    });
  });

  describe('clubDatas', () => {
    it('builds variables correctly with valid numbers', () => {
      const result = clubDatas(validState, ['2026-03-01'], 60);
      expect(result.input.minMember).toBe(5);
      expect(result.input.maxMember).toBe(20);
      expect(result.startDate).toEqual(['2026-03-01']);
      expect(result.duration).toBe(60);
    });

    it('falls back to 0 when student fields are empty strings', () => {
      const result = clubDatas(
        { ...validState, clubMinStudent: '', clubMaxStudent: '' },
        [],
        0
      );
      expect(result.input.minMember).toBe(0);
      expect(result.input.maxMember).toBe(0);
    });
  });

  describe('getVariables', () => {
    it('formats and sorts multiple dates, computes duration, and calls console.log', () => {
      const multiDateState: CreateClubState = {
        ...validState,
        clubStartDate: [new Date('2026-06-15'), new Date('2026-01-10')],
      };

      const result = getVariables(multiDateState);

      expect(result.startDate).toEqual(['2026-01-10', '2026-06-15']);
      expect(result.duration).toBe(60);
      expect(consoleLogMock).toHaveBeenCalledWith(
        expect.objectContaining({ clubSchedule: expect.any(Array) })
      );
    });

    it('handles undefined clubStartDate', () => {
      const result = getVariables({
        ...validState,
        clubStartDate: undefined,
      } as unknown as CreateClubState);
      expect(result.startDate).toEqual([]);
    });
  });

  describe('performMutation', () => {
    it('calls mutate and alerts success', async () => {
      mockMutate.mockResolvedValue({
        data: { createClubWithSchedules: { id: '1' } },
      });
      await performMutation(validState, mockMutate);
      expect(mockMutate).toHaveBeenCalled();
      expect(alertMock).toHaveBeenCalledWith('Амжилттай үүсгэлээ!');
    });

    it('handles error and alerts failure', async () => {
      mockMutate.mockRejectedValue(new Error('GraphQL Error'));
      await performMutation(validState, mockMutate);
      expect(consoleErrorMock).toHaveBeenCalled();
      expect(alertMock).toHaveBeenCalledWith('Алдаа гарлаа');
    });
  });

  it('submits correctly with valid data', async () => {
    mockMutate.mockResolvedValue({
      data: { createClubWithSchedules: { id: '1' } },
    });

    const { result } = renderHook(() => useCreateClubMutation(validState));
    await act(async () => {
      result.current.handleSubmit(mockEvent);
      await Promise.resolve();
    });

    expect(mockMutate).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Амжилттай үүсгэлээ!');
  });

  it('alerts and returns early if start date array is empty', async () => {
    const invalidState = { ...validState, clubStartDate: [] };
    const { result } = renderHook(() => useCreateClubMutation(invalidState));

    await act(async () => {
      result.current.handleSubmit(mockEvent);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Огноо сонгоно уу');
    expect(mockMutate).not.toHaveBeenCalled();
  });

  it('handles undefined clubStartDate gracefully', async () => {
    const undefinedDateState = {
      ...validState,
      clubStartDate: undefined,
    } as unknown as CreateClubState;

    const { result } = renderHook(() =>
      useCreateClubMutation(undefinedDateState)
    );

    await act(async () => {
      result.current.handleSubmit(mockEvent);
    });

    expect(alertMock).toHaveBeenCalledWith('Огноо сонгоно уу');
    expect(mockMutate).not.toHaveBeenCalled();
  });

  it('handles mutation error correctly', async () => {
    mockMutate.mockRejectedValue(new Error('GraphQL Error'));

    const { result } = renderHook(() => useCreateClubMutation(validState));

    await act(async () => {
      result.current.handleSubmit(mockEvent);
      await Promise.resolve();
    });

    expect(consoleErrorMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Алдаа гарлаа');
  });
});
