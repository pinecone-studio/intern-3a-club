import { renderHook, act } from '@testing-library/react';
import { useCreateClubState } from '../../app/_hooks/use-createclub-states';
import { ChangeEvent } from 'react';

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
    expect(result.current.state.clubFrequency).toBe('Зөвхөн сонгосон өдрүүдэд');
    expect(result.current.state.clubStartDate).toEqual([]);
  });

  it('resets to default values', () => {
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

  it('does not update dates if generated matches current', () => {
    const { result } = renderHook(() => useCreateClubState());
    const start = new Date(2026, 4, 4);

    act(() => {
      result.current.setters.setClubStartDate([start]);
    });

    act(() => {
      result.current.setters.setSelectedFreqId('2');
    });

    const generatedDates = result.current.state.clubStartDate!;

    act(() => {
      result.current.setters.setClubStartDate(generatedDates);
    });

    const snapshot = result.current.state.clubStartDate;

    act(() => {
      result.current.setters.setClubTerm('1');
    });

    expect(result.current.state.clubStartDate).toEqual(snapshot);
    expect(result.current.state.clubStartDate).toBe(snapshot);
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
});
