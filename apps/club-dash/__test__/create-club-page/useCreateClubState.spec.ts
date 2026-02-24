import { renderHook, act } from '@testing-library/react';
import { useCreateClubState } from '../../../club-dash/app/_hooks/use-createclub-states';
import { ChangeEvent } from 'react';

describe('useCreateClubState Hook', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useCreateClubState());

    expect(result.current.state.clubName).toBe('');
    expect(result.current.state.clubFrequency).toBe('ONCE');
    expect(result.current.state.clubClassRoom).toBe('301');
    expect(result.current.state.clubStartTime).toBe('13:00');
    expect(result.current.state.clubMaxStudent).toBe('20');
    expect(result.current.state.clubStartDate).toBeUndefined();
    expect(result.current.state.selectedDays).toEqual([]);
  });

  it('should update state via direct setters', () => {
    const { result } = renderHook(() => useCreateClubState());
    const testDate = new Date('2026-05-20');

    act(() => {
      result.current.setters.setTeacherName('Teacher John');
      result.current.setters.setClubStartDate(testDate);
      result.current.setters.setSelectedDays(['1', '3']);
    });

    expect(result.current.state.teacherName).toBe('Teacher John');
    expect(result.current.state.clubStartDate).toBe(testDate);
    expect(result.current.state.selectedDays).toEqual(['1', '3']);
  });

  it('should update state via input change handlers', () => {
    const { result } = renderHook(() => useCreateClubState());

    // Mock a React ChangeEvent
    const mockEvent = {
      target: { value: 'Awesome Coding Club' },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handlers.handleName(mockEvent);
    });

    expect(result.current.state.clubName).toBe('Awesome Coding Club');
  });

  it('should update numeric strings (min/max) via handlers', () => {
    const { result } = renderHook(() => useCreateClubState());

    const maxEvent = {
      target: { value: '50' },
    } as ChangeEvent<HTMLInputElement>;
    const minEvent = {
      target: { value: '10' },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handlers.handleMax(maxEvent);
      result.current.handlers.handleMin(minEvent);
    });

    expect(result.current.state.clubMaxStudent).toBe('50');
    expect(result.current.state.clubMinStudent).toBe('10');
  });
});
