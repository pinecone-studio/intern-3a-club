import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Teachers } from '../../app/createClub/_components';
import React from 'react';

const mockSetTeacherName = jest.fn();

describe('Teachers Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with empty teacher name', () => {
    render(<Teachers teacherName="" setTeacherName={mockSetTeacherName} />);

    expect(
      screen.getByText(/Хариуцсан багш/i, { selector: 'label' })
    ).toBeInTheDocument();

    expect(screen.getByRole('combobox')).toHaveTextContent('Хариуцсан багш');
  });

  it('renders the selected teacher name', () => {
    render(
      <Teachers
        teacherName="Narantsatsralt"
        setTeacherName={mockSetTeacherName}
      />
    );

    expect(screen.getByRole('combobox')).toHaveTextContent('Narantsatsralt');
  });

  it('opens the dropdown and displays the list of teachers', async () => {
    render(<Teachers teacherName="" setTeacherName={mockSetTeacherName} />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    expect(await screen.findByText('Erdenetsogt')).toBeInTheDocument();
    expect(screen.getByText('Narantsatsralt')).toBeInTheDocument();
    expect(screen.getByText('Bilguundul')).toBeInTheDocument();
  });

  it('calls setTeacherName with the selected teacher name string', async () => {
    render(<Teachers teacherName="" setTeacherName={mockSetTeacherName} />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    const option = await screen.findByText('Narantsatsralt');
    fireEvent.click(option);

    expect(mockSetTeacherName).toHaveBeenCalledWith('Narantsatsralt');
  });
});
