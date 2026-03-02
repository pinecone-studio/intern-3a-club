import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import {
  CreatedTimetable,
  compareByTime,
} from '../../app/createClub/_components';
import {
  CreateClubHandlers,
  CreateClubSetters,
  CreateClubState,
} from '../../../club-dash/libs/types';

jest.mock('../../app/_hooks/use-get-clubs', () => ({
  useGetClubs: () => ({
    loading: false,
    error: undefined,
    data: { getAllClubs: [] },
  }),
}));

const mockSetters: CreateClubSetters = {
  setTeacherId: jest.fn(),
  setClubStartDate: jest.fn(),
  setSelectedFreqId: jest.fn(),
  setClubTerm: jest.fn(),
  setClubClassRoom: jest.fn(),
  setClubStartTime: jest.fn(),
  setClubDuration: jest.fn(),
  setClubFrequency: jest.fn(),
  setScheduleChange: jest.fn(),
};

const mockHandlers: CreateClubHandlers = {
  handleMax: jest.fn(),
  handleName: jest.fn(),
  handleDesc: jest.fn(),
  handleUpdateChange: jest.fn(),
  handleDeleteDate: jest.fn(),
  handleEmptyFields: jest.fn(),
};

const baseState: CreateClubState = {
  clubName: 'Test',
  teacherId: 'T1',
  clubDesc: 'Desc',
  clubStartDate: [],
  selectedFreqId: '1',
  clubTerm: '1',
  clubClassRoom: '301',
  clubStartTime: '13:00',
  clubDuration: '1:00',
  clubMaxStudent: '20',
  clubMinStudent: '5',
  clubFrequency: 'Weekly',
  scheduleChange: {},
};

describe('compareByTime', () => {
  const jan = new Date('2026-01-01');
  const jun = new Date('2026-06-01');

  it('returns 1 when a is after b', () => {
    expect(compareByTime(jun, jan)).toBe(1);
  });

  it('returns -1 when a is before b', () => {
    expect(compareByTime(jan, jun)).toBe(-1);
  });

  it('returns 0 when a and b are equal', () => {
    expect(compareByTime(jan, new Date(jan.getTime()))).toBe(0);
  });
});

describe('CreatedTimetable', () => {
  it('shows empty placeholder when no dates are selected', () => {
    render(
      <CreatedTimetable
        state={baseState}
        setters={mockSetters}
        handlers={mockHandlers}
      />
    );
    expect(screen.getByText(/өдрүүдээ сонгоно уу/i)).toBeInTheDocument();
  });

  it('handles undefined clubStartDate gracefully', () => {
    render(
      <CreatedTimetable
        state={{ ...baseState, clubStartDate: undefined }}
        setters={mockSetters}
        handlers={mockHandlers}
      />
    );
    expect(screen.getByText(/өдрүүдээ сонгоно уу/i)).toBeInTheDocument();
  });

  it('renders schedule cards sorted in ascending date order', () => {
    const dates = [new Date('2026-06-15'), new Date('2026-01-10')];

    render(
      <CreatedTimetable
        state={{ ...baseState, clubStartDate: dates }}
        setters={mockSetters}
        handlers={mockHandlers}
      />
    );

    const cards = screen.getAllByTestId('schedule-card');
    expect(cards).toHaveLength(2);
    expect(cards[0]).toHaveTextContent('2026-01-10');
    expect(cards[1]).toHaveTextContent('2026-06-15');
  });

  it('calls handleEmptyFields when reset button is clicked', () => {
    render(
      <CreatedTimetable
        state={baseState}
        setters={mockSetters}
        handlers={mockHandlers}
      />
    );

    fireEvent.click(screen.getByText('Хоослох'));

    expect(mockHandlers.handleEmptyFields).toHaveBeenCalledTimes(1);
  });

  it('shows correct date count label', () => {
    const dates = [new Date('2026-01-10'), new Date('2026-06-15')];

    render(
      <CreatedTimetable
        state={{ ...baseState, clubStartDate: dates }}
        setters={mockSetters}
        handlers={mockHandlers}
      />
    );

    expect(screen.getByText(/Сонгогдсон хуваарь \(2\)/i)).toBeInTheDocument();
  });
});
