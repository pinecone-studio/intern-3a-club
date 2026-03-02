import { renderHook, act } from '@testing-library/react';
import {
  useCreateClubState,
  formatDates,
  hasDateChanged,
  getUniqueDays,
  getDateRange,
  generateClubDates,
  buildScheduleChange,
  shouldSync,
} from '../../app/_hooks/use-createclub-states';
import { ChangeEvent } from 'react';

jest.mock('../../app/_hooks/use-create-club', () => ({
  buildOverride: (
    schedule: Record<string, unknown>,
    key: string,
    field: string,
    value: string
  ) => ({
    ...(schedule[key] ?? {}),
    [field]: value,
  }),
}));

describe('formatDates', () => {
  it('formats and sorts dates', () => {
    const dates = [new Date('2026-06-01'), new Date('2026-01-01')];
    expect(formatDates(dates)).toBe('2026-01-01,2026-06-01');
  });

  it('returns empty string for empty array', () => {
    expect(formatDates([])).toBe('');
  });
});

describe('hasDateChanged', () => {
  it('returns false when dates are the same', () => {
    const dates = [new Date('2026-01-01')];
    expect(hasDateChanged(dates, dates)).toBe(false);
  });

  it('returns true when dates differ', () => {
    const a = [new Date('2026-01-01')];
    const b = [new Date('2026-06-01')];
    expect(hasDateChanged(a, b)).toBe(true);
  });
});

describe('getUniqueDays', () => {
  it('returns unique weekday numbers', () => {
    const dates = [new Date('2026-01-05'), new Date('2026-01-12')];
    expect(getUniqueDays(dates)).toEqual([1]);
  });
});

describe('getDateRange', () => {
  it('returns start and end from sorted dates and term', () => {
    const dates = [new Date('2026-06-01'), new Date('2026-01-01')];
    const range = getDateRange(dates, '1');
    expect(range.start).toEqual(new Date('2026-01-01'));
  });
});

describe('generateClubDates', () => {
  it('returns empty array when no dates provided', () => {
    expect(generateClubDates([], '1')).toEqual([]);
  });

  it('generates dates for given weekdays over term', () => {
    const dates = [new Date('2026-05-04')];
    const result = generateClubDates(dates, '1');
    expect(result.length).toBeGreaterThan(1);
  });
});

describe('buildScheduleChange', () => {
  it('adds new key to schedule', () => {
    const result = buildScheduleChange(
      {},
      '2026-03-01',
      'room',
      '404',
      {} as never
    );
    expect(result['2026-03-01'].room).toBe('404');
  });
});

describe('shouldSync', () => {
  it('returns true when weekly, has dates, not deleting', () => {
    expect(shouldSync(true, true, false)).toBe(true);
  });

  it('returns false when deleting', () => {
    expect(shouldSync(true, true, true)).toBe(false);
  });

  it('returns false when not weekly', () => {
    expect(shouldSync(false, true, false)).toBe(false);
  });

  it('returns false when no dates', () => {
    expect(shouldSync(true, false, false)).toBe(false);
  });
});

describe('useCreateClubState', () => {
  it('updates state via handlers', () => {
    const { result } = renderHook(() => useCreateClubState());
    const nameEvent = {
      target: { value: 'Club Name' },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.handlers.handleName(nameEvent);
    });
    expect(result.current.state.clubName).toBe('Club Name');
  });

  it('handles the weekly generation logic', () => {
    const { result } = renderHook(() => useCreateClubState());
    const start = new Date(2026, 4, 4);
    act(() => {
      result.current.setters.setClubStartDate([start]);
    });
    act(() => {
      result.current.setters.setSelectedFreqId('2');
    });
    expect(result.current.state.clubStartDate?.length).toBeGreaterThan(1);
  });

  it('has correct initial default values', () => {
    const { result } = renderHook(() => useCreateClubState());
    expect(result.current.state.clubClassRoom).toBe('301');
    expect(result.current.state.clubDuration).toBe('1:00');
    expect(result.current.state.clubStartTime).toBe('13:00');
    expect(result.current.state.clubTerm).toBe('1');
    expect(result.current.state.selectedFreqId).toBe('1');
    expect(result.current.state.clubFrequency).toBe('ONCE');
    expect(result.current.state.clubStartDate).toEqual([]);
  });

  it('resets to default values via setters', () => {
    const { result } = renderHook(() => useCreateClubState());
    act(() => {
      result.current.setters.setClubClassRoom('999');
      result.current.setters.setClubStartTime('09:00');
      result.current.setters.setClubStartDate([new Date(2026, 4, 4)]);
    });
    act(() => {
      result.current.setters.setClubClassRoom('301');
      result.current.setters.setClubDuration('1:00');
      result.current.setters.setClubFrequency('Зөвхөн сонгосон өдрүүдэд');
      result.current.setters.setClubStartDate([]);
      result.current.setters.setClubStartTime('13:00');
      result.current.setters.setClubTerm('1');
      result.current.setters.setSelectedFreqId('1');
    });
    expect(result.current.state.clubClassRoom).toBe('301');
    expect(result.current.state.clubStartTime).toBe('13:00');
    expect(result.current.state.clubStartDate).toEqual([]);
    expect(result.current.state.selectedFreqId).toBe('1');
  });

  it('does not sync dates when frequency is not weekly', () => {
    const { result } = renderHook(() => useCreateClubState());
    const start = new Date(2026, 4, 4);
    act(() => {
      result.current.setters.setClubStartDate([start]);
    });
    act(() => {
      result.current.setters.setSelectedFreqId('1');
    });
    expect(result.current.state.clubStartDate).toEqual([start]);
  });

  it('does not sync dates when no dates are selected', () => {
    const { result } = renderHook(() => useCreateClubState());
    act(() => {
      result.current.setters.setClubStartDate([]);
    });
    act(() => {
      result.current.setters.setSelectedFreqId('2');
    });
    expect(result.current.state.clubStartDate).toEqual([]);
  });

  it('does not call setClubStartDate when sync produces identical dates', () => {
    const { result } = renderHook(() => useCreateClubState());
    const start = new Date(2026, 4, 4);
    act(() => {
      result.current.setters.setClubStartDate([start]);
      result.current.setters.setSelectedFreqId('2');
    });
    const syncedDates = result.current.state.clubStartDate!;
    const syncedLength = syncedDates.length;
    act(() => {
      result.current.setters.setClubTerm('1');
    });
    expect(result.current.state.clubStartDate!.length).toBe(syncedLength);
    expect(result.current.state.clubStartDate).toEqual(syncedDates);
  });

  it('handleDeleteDate works when clubStartDate is undefined', () => {
    const { result } = renderHook(() => useCreateClubState());
    const day = new Date(2026, 2, 1);
    act(() => {
      result.current.setters.setClubStartDate(undefined);
    });
    act(() => {
      result.current.handlers.handleDeleteDate(day);
    });
    expect(result.current.state.clubStartDate).toEqual([]);
  });

  it('handleUpdateChange adds a new schedule override for a date', () => {
    const { result } = renderHook(() => useCreateClubState());
    act(() => {
      result.current.handlers.handleUpdateChange('2026-03-01', 'room', '404');
    });
    expect(result.current.state.scheduleChange['2026-03-01'].room).toBe('404');
  });

  it('handleUpdateChange preserves existing override fields when updating one field', () => {
    const { result } = renderHook(() => useCreateClubState());
    act(() => {
      result.current.handlers.handleUpdateChange('2026-03-01', 'room', '404');
    });
    act(() => {
      result.current.handlers.handleUpdateChange(
        '2026-03-01',
        'startTime',
        '09:00'
      );
    });
    expect(result.current.state.scheduleChange['2026-03-01'].room).toBe('404');
    expect(result.current.state.scheduleChange['2026-03-01'].startTime).toBe(
      '09:00'
    );
  });

  it('handleDeleteDate removes the date from clubStartDate', () => {
    const { result } = renderHook(() => useCreateClubState());
    const day = new Date(2026, 2, 1);
    act(() => {
      result.current.setters.setClubStartDate([day]);
    });
    act(() => {
      result.current.handlers.handleDeleteDate(day);
    });
    expect(result.current.state.clubStartDate).toEqual([]);
  });

  it('handleDeleteDate removes the schedule override for the deleted date', () => {
    const { result } = renderHook(() => useCreateClubState());
    const day = new Date(2026, 2, 1);
    act(() => {
      result.current.setters.setClubStartDate([day]);
      result.current.handlers.handleUpdateChange('2026-03-01', 'room', '202');
    });
    act(() => {
      result.current.handlers.handleDeleteDate(day);
    });
    expect(result.current.state.scheduleChange['2026-03-01']).toBeUndefined();
  });

  it('handleEmptyFields resets all fields to defaults', () => {
    const { result } = renderHook(() => useCreateClubState());
    act(() => {
      result.current.setters.setClubClassRoom('999');
      result.current.setters.setClubStartTime('09:00');
      result.current.setters.setClubDuration('2:00');
      result.current.setters.setClubStartDate([new Date(2026, 2, 1)]);
      result.current.setters.setClubTerm('3');
      result.current.setters.setSelectedFreqId('2');
      result.current.handlers.handleUpdateChange('2026-03-01', 'room', '202');
    });
    act(() => {
      result.current.handlers.handleEmptyFields();
    });
    expect(result.current.state.clubClassRoom).toBe('301');
    expect(result.current.state.clubDuration).toBe('1:00');
    expect(result.current.state.clubStartTime).toBe('13:00');
    expect(result.current.state.clubStartDate).toEqual([]);
    expect(result.current.state.clubTerm).toBe('1');
    expect(result.current.state.selectedFreqId).toBe('1');
    expect(result.current.state.clubFrequency).toBe('ONCE');
    expect(result.current.state.scheduleChange).toEqual({});
  });
});
