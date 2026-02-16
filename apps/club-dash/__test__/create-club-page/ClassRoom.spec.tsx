import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClassRoom } from '../../app/createClub/_components';
import React from 'react';

describe('ClassRoom Component', () => {
  const mockSetClassRoom = jest.fn();

  beforeEach(() => {
    mockSetClassRoom.mockClear();
  });

  it('renders the select trigger with the default placeholder', () => {
    render(
      <ClassRoom clubClassRoom="301" setClubClassRoom={mockSetClassRoom} />
    );

    expect(screen.getByText(/Орох Анги/i)).toBeInTheDocument();
    const trigger = screen.getByRole('combobox');
    expect(within(trigger).getByText('301')).toBeInTheDocument();
  });

  it('opens the select and allows choosing a different room', async () => {
    render(
      <ClassRoom clubClassRoom="301" setClubClassRoom={mockSetClassRoom} />
    );

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    const listbox = await screen.findByRole('listbox');
    const option = within(listbox).getByText('302');
    fireEvent.click(option);

    expect(mockSetClassRoom).toHaveBeenCalledWith('302');
  });

  it('contains all required classroom options', async () => {
    render(
      <ClassRoom clubClassRoom="301" setClubClassRoom={mockSetClassRoom} />
    );

    fireEvent.click(screen.getByRole('combobox'));

    const listbox = await screen.findByRole('listbox');
    const rooms = ['301', '302', '303', '304', '305'];

    for (const room of rooms) {
      expect(within(listbox).getByText(room)).toBeInTheDocument();
    }
  });
});
