import { renderHook, act } from '@testing-library/react';
import { useMutation } from '@apollo/client/react';
import {
  useCreateClubMutation,
  parseDuration,
  getValues,
  createClubDash,
  getOverrideRoom,
  getOverrideStartTime,
  getOverrideDuration,
  buildOverride,
} from '../../app/_hooks/use-create-club';
import { CreateClubState, ScheduleChange } from '../../libs/types';
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
    teacherId: 'T1',
    clubMinStudent: '5',
    clubMaxStudent: '20',
    clubStartDate: [new Date('2026-03-01')],
    clubClassRoom: '301',
    clubStartTime: '14:00',
    clubDuration: '1:00',
    clubFrequency: 'Weekly',
    selectedFreqId: '2',
    clubTerm: '1',
    scheduleChange: {},
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

  describe('getOverrideRoom', () => {
    it('returns override room when present', () => {
      const schedule: Record<string, ScheduleChange> = {
        '2026-03-01': { room: '202', startTime: '10:00', duration: '1:00' },
      };
      expect(getOverrideRoom(schedule, '2026-03-01', validState)).toBe('202');
    });

    it('falls back to state room when key missing', () => {
      expect(getOverrideRoom({}, '2026-03-01', validState)).toBe('301');
    });
  });

  describe('getOverrideStartTime', () => {
    it('returns override startTime when present', () => {
      const schedule: Record<string, ScheduleChange> = {
        '2026-03-01': { room: '301', startTime: '09:00', duration: '1:00' },
      };
      expect(getOverrideStartTime(schedule, '2026-03-01', validState)).toBe(
        '09:00'
      );
    });

    it('falls back to state startTime when key missing', () => {
      expect(getOverrideStartTime({}, '2026-03-01', validState)).toBe('14:00');
    });
  });

  describe('getOverrideDuration', () => {
    it('returns override duration when present', () => {
      const schedule: Record<string, ScheduleChange> = {
        '2026-03-01': { room: '301', startTime: '14:00', duration: '2:00' },
      };
      expect(getOverrideDuration(schedule, '2026-03-01', validState)).toBe(
        '2:00'
      );
    });

    it('falls back to state duration when key missing', () => {
      expect(getOverrideDuration({}, '2026-03-01', validState)).toBe('1:00');
    });
  });

  describe('buildOverride', () => {
    it('builds override with field overridden', () => {
      const result = buildOverride({}, '2026-03-01', 'room', '404', validState);
      expect(result.room).toBe('404');
      expect(result.startTime).toBe('14:00');
      expect(result.duration).toBe('1:00');
    });

    it('merges existing override values', () => {
      const schedule: Record<string, ScheduleChange> = {
        '2026-03-01': { room: '202', startTime: '09:00', duration: '2:00' },
      };
      const result = buildOverride(
        schedule,
        '2026-03-01',
        'room',
        '505',
        validState
      );
      expect(result.room).toBe('505');
      expect(result.startTime).toBe('09:00');
      expect(result.duration).toBe('2:00');
    });
  });

  describe('getValues', () => {
    it('formats and sorts multiple dates, computes duration, and calls console.log', () => {
      const multiDateState: CreateClubState = {
        ...validState,
        clubStartDate: [new Date('2026-06-15'), new Date('2026-01-10')],
      };

      const result = getValues(multiDateState);

      expect(result.schedules[0].date).toBe('2026-01-10');
      expect(result.schedules[1].date).toBe('2026-06-15');
      expect(consoleLogMock).toHaveBeenCalledWith(
        expect.objectContaining({ clubSchedule: expect.any(Array) })
      );
    });

    it('handles undefined clubStartDate', () => {
      const result = getValues({
        ...validState,
        clubStartDate: undefined,
      } as unknown as CreateClubState);
      expect(result.schedules).toEqual([]);
    });
  });

  describe('createClubDash', () => {
    it('calls mutate and alerts success', async () => {
      mockMutate.mockResolvedValue({
        data: { createClubWithSchedules: { id: '1' } },
      });
      await createClubDash(validState, mockMutate);
      expect(mockMutate).toHaveBeenCalled();
      expect(alertMock).toHaveBeenCalledWith('Амжилттай үүсгэлээ!');
    });

    it('handles error and alerts failure', async () => {
      mockMutate.mockRejectedValue(new Error('GraphQL Error'));
      await createClubDash(validState, mockMutate);
      expect(consoleErrorMock).toHaveBeenCalled();
      expect(alertMock).toHaveBeenCalledWith('Алдаа гарлаа');
    });

    it('logs club data before mutating', async () => {
      mockMutate.mockResolvedValue({
        data: { createClubWithSchedules: { id: '1' } },
      });

      await createClubDash(validState, mockMutate);

      expect(consoleLogMock).toHaveBeenCalledWith(
        'Club Data',
        expect.any(Object)
      );
      expect(mockMutate).toHaveBeenCalledWith({
        variables: expect.objectContaining({
          input: expect.objectContaining({ name: 'Coding' }),
          schedules: expect.any(Array),
          frequency: 'Weekly',
        }),
      });
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
