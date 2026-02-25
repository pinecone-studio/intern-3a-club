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
      result.current.setters.setSelectedFreqId('2');
    });

    expect(result.current.state.clubStartDate?.length).toBeGreaterThan(1);
  });
});
