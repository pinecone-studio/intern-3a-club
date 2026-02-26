import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Teachers,
  getTeacherStatus,
} from '../../app/createClub/_components/Teachers';
import React from 'react';

const mockSetTeacherId = jest.fn();

jest.mock('../../app/_hooks/use-get-teachers', () => ({
  useGetTeachers: () => ({
    loading: false,
    error: undefined,
    data: {
      getAllTeachers: [
        { id: '1', firstName: 'Erdenetsogt', lastName: '' },
        { id: '2', firstName: 'Narantsatsralt', lastName: '' },
        { id: '3', firstName: 'Bilguundul', lastName: '' },
      ],
    },
  }),
}));

describe('Teachers Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with empty teacher id', () => {
    render(<Teachers teacherId="" setTeacherId={mockSetTeacherId} />);

    expect(
      screen.getByText(/Хариуцсан багш/i, { selector: 'label' })
    ).toBeInTheDocument();

    expect(screen.getByRole('combobox')).toHaveTextContent('Хариуцсан багш');
  });

  it('opens the dropdown and displays the list of teachers', async () => {
    render(<Teachers teacherId="" setTeacherId={mockSetTeacherId} />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    expect(await screen.findByText('Erdenetsogt')).toBeInTheDocument();
    expect(screen.getByText('Narantsatsralt')).toBeInTheDocument();
    expect(screen.getByText('Bilguundul')).toBeInTheDocument();
  });

  it('calls setTeacherId when a teacher is selected', async () => {
    render(<Teachers teacherId="" setTeacherId={mockSetTeacherId} />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    const option = await screen.findByText('Narantsatsralt');
    fireEvent.click(option);

    expect(mockSetTeacherId).toHaveBeenCalledWith('2');
  });
});

describe('getTeacherStatus', () => {
  it('returns loading message when loading', () => {
    expect(getTeacherStatus(true, undefined)).toBe('Уншиж байна...');
  });

  it('returns error message when error exists', () => {
    expect(getTeacherStatus(false, new Error('Network error'))).toBe(
      'Алдаа гарлаа: Network error'
    );
  });

  it('returns null when not loading and no error', () => {
    expect(getTeacherStatus(false, undefined)).toBeNull();
  });
});
