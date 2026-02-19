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

  it('hides weekday buttons initially or when ID: 1 is selected', () => {
    render(
      <Frequency
        clubFrequency={defaultFrequency}
        setClubFrequency={mockSetFrequency}
      />
    );

    expect(screen.queryByText('M')).not.toBeInTheDocument();
  });

  it('shows weekday buttons when a frequency other than ID: 1 is selected', async () => {
    render(
      <Frequency
        clubFrequency={defaultFrequency}
        setClubFrequency={mockSetFrequency}
      />
    );

    fireEvent.click(screen.getByRole('combobox'));

    const listbox = await screen.findByRole('listbox');
    const weeklyOption = within(listbox).getByText(/Долоо хоног бүр/i);
    fireEvent.click(weeklyOption);

    expect(screen.getByText('M')).toBeInTheDocument();
  });

  it('toggles weekday button styles using data-id attribute', async () => {
    render(
      <Frequency
        clubFrequency="Долоо хоног бүр"
        setClubFrequency={mockSetFrequency}
      />
    );

    fireEvent.click(screen.getByRole('combobox'));
    const listbox = await screen.findByRole('listbox');
    fireEvent.click(within(listbox).getByText(/Долоо хоног бүр/i));

    const mondayButton = screen.getByText('M');

    expect(mondayButton).toHaveClass('bg-white');
    expect(mondayButton).toHaveAttribute('data-id', '1');

    fireEvent.click(mondayButton);
    expect(mondayButton).toHaveClass('bg-black');

    fireEvent.click(mondayButton);
    expect(mondayButton).toHaveClass('bg-white');
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
