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
  changeSingleSchedule,
  changeScheduleForState,
  updateSchedules,
  getClubTerm,
  toFormattedDate,
  byAscendingDate,
  getClassroom,
  getStartTime,
  getDuration,
} from '../../app/_hooks/use-create-club';
import { CreateClubState, ScheduleChange } from '../../libs/types';
import React from 'react';

jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useMutation: jest.fn(),
}));

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
  consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
  consoleLogMock = jest.spyOn(console, 'log').mockImplementation(() => {});
  (useMutation as unknown as jest.Mock).mockReturnValue([
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

describe('toFormattedDate', () => {
  it('formats a date to yyyy-MM-dd', () => {
    expect(toFormattedDate(new Date('2026-03-01'))).toBe('2026-03-01');
  });
});

describe('byAscendingDate', () => {
  it('returns positive when a is after b', () => {
    expect(
      byAscendingDate(new Date('2026-06-01'), new Date('2026-01-01'))
    ).toBeGreaterThan(0);
  });

  it('returns negative when a is before b', () => {
    expect(
      byAscendingDate(new Date('2026-01-01'), new Date('2026-06-01'))
    ).toBeLessThan(0);
  });

  it('returns 0 when equal', () => {
    const d = new Date('2026-01-01');
    expect(byAscendingDate(d, new Date(d.getTime()))).toBe(0);
  });
});

describe('getClassroom', () => {
  it('returns override room when change has room', () => {
    const change: ScheduleChange = {
      room: '202',
      startTime: '10:00',
      duration: '1:00',
    };
    expect(getClassroom(change, validState)).toBe('202');
  });

  it('returns state room when change is undefined', () => {
    expect(getClassroom(undefined, validState)).toBe('301');
  });
});

describe('getStartTime', () => {
  it('returns override startTime when change has startTime', () => {
    const change: ScheduleChange = {
      room: '301',
      startTime: '09:00',
      duration: '1:00',
    };
    expect(getStartTime(change, validState)).toBe('09:00');
  });

  it('returns state startTime when change is undefined', () => {
    expect(getStartTime(undefined, validState)).toBe('14:00');
  });
});

describe('getDuration', () => {
  it('returns parsed override duration when change has duration', () => {
    const change: ScheduleChange = {
      room: '301',
      startTime: '14:00',
      duration: '2:00',
    };
    expect(getDuration(change, validState)).toBe(120);
  });

  it('returns parsed state duration when change is undefined', () => {
    expect(getDuration(undefined, validState)).toBe(60);
  });
});

describe('changeSingleSchedule', () => {
  it('returns schedule with state defaults when no override', () => {
    const result = changeSingleSchedule('2026-03-01', validState);
    expect(result.date).toBe('2026-03-01');
    expect(result.room).toBe('301');
    expect(result.clubStartTime).toBe('14:00');
    expect(result.duration).toBe(60);
  });

  it('returns schedule with override values when override exists', () => {
    const stateWithOverride: CreateClubState = {
      ...validState,
      scheduleChange: {
        '2026-03-01': { room: '202', startTime: '09:00', duration: '2:00' },
      },
    };
    const result = changeSingleSchedule('2026-03-01', stateWithOverride);
    expect(result.room).toBe('202');
    expect(result.clubStartTime).toBe('09:00');
    expect(result.duration).toBe(120);
  });
});

describe('changeScheduleForState', () => {
  it('returns a function that maps date to schedule', () => {
    const fn = changeScheduleForState(validState);
    const result = fn('2026-03-01');
    expect(result.date).toBe('2026-03-01');
    expect(result.room).toBe('301');
  });
});

describe('updateSchedules', () => {
  it('sorts dates and maps to schedules', () => {
    const state: CreateClubState = {
      ...validState,
      clubStartDate: [new Date('2026-06-15'), new Date('2026-01-10')],
    };
    const result = updateSchedules(state);
    expect(result[0].date).toBe('2026-01-10');
    expect(result[1].date).toBe('2026-06-15');
  });

  it('returns empty array when clubStartDate is undefined', () => {
    const result = updateSchedules({
      ...validState,
      clubStartDate: undefined,
    } as unknown as CreateClubState);
    expect(result).toEqual([]);
  });
});

describe('getClubTerm', () => {
  it('returns clubTerm when frequency is WEEKLY', () => {
    expect(getClubTerm({ ...validState, clubFrequency: 'WEEKLY' })).toBe('1');
  });

  it('returns 0 when frequency is not WEEKLY', () => {
    expect(getClubTerm({ ...validState, clubFrequency: 'ONCE' })).toBe('0');
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
  it('formats and sorts multiple dates and calls console.log', () => {
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

  it('returns correct input fields', () => {
    const result = getValues(validState);
    expect(result.input.name).toBe('Coding');
    expect(result.input.teacherId).toBe('T1');
    expect(result.input.minMember).toBe(5);
    expect(result.input.maxMember).toBe(20);
  });

  it('returns clubTerm 0 when frequency is not WEEKLY', () => {
    expect(getValues({ ...validState, clubFrequency: 'ONCE' }).clubTerm).toBe(
      '0'
    );
  });

  it('returns clubTerm when frequency is WEEKLY', () => {
    expect(getValues({ ...validState, clubFrequency: 'WEEKLY' }).clubTerm).toBe(
      '1'
    );
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

  it('calls onSuccess callback after successful mutation', async () => {
    const onSuccess = jest.fn();
    mockMutate.mockResolvedValue({
      data: { createClubWithSchedules: { id: '1' } },
    });
    await createClubDash(validState, mockMutate, onSuccess);
    expect(onSuccess).toHaveBeenCalled();
  });

  it('does not call onSuccess when mutation fails', async () => {
    const onSuccess = jest.fn();
    mockMutate.mockRejectedValue(new Error('GraphQL Error'));
    await createClubDash(validState, mockMutate, onSuccess);
    expect(onSuccess).not.toHaveBeenCalled();
  });

  it('handles error and alerts failure', async () => {
    mockMutate.mockRejectedValue(new Error('GraphQL Error'));
    await createClubDash(validState, mockMutate);
    expect(consoleErrorMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Алдаа гарлаа');
  });

  it('logs state and club data before mutating', async () => {
    mockMutate.mockResolvedValue({
      data: { createClubWithSchedules: { id: '1' } },
    });
    await createClubDash(validState, mockMutate);
    expect(consoleLogMock).toHaveBeenCalledWith({ state: validState });
    expect(consoleLogMock).toHaveBeenCalledWith(
      'Club Data',
      expect.any(Object)
    );
  });
});

describe('useCreateClubMutation', () => {
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

  it('calls onSuccess after successful submit', async () => {
    const onSuccess = jest.fn();
    mockMutate.mockResolvedValue({
      data: { createClubWithSchedules: { id: '1' } },
    });
    const { result } = renderHook(() =>
      useCreateClubMutation(validState, onSuccess)
    );
    await act(async () => {
      result.current.handleSubmit(mockEvent);
      await Promise.resolve();
    });
    expect(onSuccess).toHaveBeenCalled();
  });

  it('returns loading state from useMutation', () => {
    (useMutation as unknown as jest.Mock).mockReturnValue([
      mockMutate,
      { loading: true, data: null, error: null },
    ]);
    const { result } = renderHook(() => useCreateClubMutation(validState));
    expect(result.current.loading).toBe(true);
  });
});
