import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Frequency } from '../../app/createClub/_components';
import React from 'react';

describe('Frequency Component', () => {
  const mockSetFrequency = jest.fn();
  const defaultFrequency = 'Зөвхөн сонгосон өдрүүдэд';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the trigger and displays the correct initial label', () => {
    render(
      <Frequency
        clubFrequency={defaultFrequency}
        setClubFrequency={mockSetFrequency}
      />
    );

    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveTextContent(defaultFrequency);
  });

  it('opens the dropdown and shows all Mongolian options', async () => {
    render(
      <Frequency
        clubFrequency={defaultFrequency}
        setClubFrequency={mockSetFrequency}
      />
    );

    fireEvent.click(screen.getByRole('combobox'));

    const listbox = await screen.findByRole('listbox');
    expect(within(listbox).getByText(/Долоо хоног бүр/i)).toBeInTheDocument();
    expect(within(listbox).getByText(/Сар бүр/i)).toBeInTheDocument();
  });

  it('calls setClubFrequency with the correct text when an option is clicked', async () => {
    render(
      <Frequency
        clubFrequency={defaultFrequency}
        setClubFrequency={mockSetFrequency}
      />
    );

    fireEvent.click(screen.getByRole('combobox'));

    const listbox = await screen.findByRole('listbox');
    const monthlyOption = within(listbox).getByText(/Сар бүр/i);
    fireEvent.click(monthlyOption);

    expect(mockSetFrequency).toHaveBeenCalledWith('Сар бүр');
  });
});
