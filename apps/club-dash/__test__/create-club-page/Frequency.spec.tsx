import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Frequency } from '../../app/createClub/_components';
import React, { useState } from 'react';

// A wrapper to manage the state just like your useCreateClubState hook does
const FrequencyTestWrapper = ({ initialFreqId = '1' }) => {
  const [clubFrequency, setClubFrequency] = useState(
    'Зөвхөн сонгосон өдрүүдэд'
  );
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedFreqId, setSelectedFreqId] = useState(initialFreqId);

  return (
    <Frequency
      clubFrequency={clubFrequency}
      setClubFrequency={setClubFrequency}
      selectedDays={selectedDays}
      setSelectedDays={setSelectedDays}
      selectedFreqId={selectedFreqId}
      setSelectedFreqId={setSelectedFreqId}
    />
  );
};

describe('Frequency Component', () => {
  it('renders the trigger and displays the correct initial label', () => {
    render(<FrequencyTestWrapper />);
    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveTextContent('Зөвхөн сонгосон өдрүүдэд');
  });

  it('hides weekday buttons when ID: 1 (Once) is selected', () => {
    render(<FrequencyTestWrapper initialFreqId="1" />);
    // Days shouldn't exist in the DOM
    expect(screen.queryByText('M')).not.toBeInTheDocument();
  });

  it('shows weekday buttons when a frequency other than ID: 1 is selected', async () => {
    render(<FrequencyTestWrapper initialFreqId="1" />);

    // Open Select
    fireEvent.click(screen.getByRole('combobox'));

    // Select "Weekly" (ID: 2)
    const weeklyOption = await screen.findByText('Долоо хоног бүр');
    fireEvent.click(weeklyOption);

    // Now days should appear
    expect(screen.getByText('M')).toBeInTheDocument();
  });

  it('toggles weekday button styles when clicked', async () => {
    // Start with Weekly (ID: 2) so buttons are visible
    render(<FrequencyTestWrapper initialFreqId="2" />);

    const mondayButton = screen.getByText('M');

    // Initial state: Not selected (bg-white)
    expect(mondayButton).toHaveClass('bg-white');

    // Click to select
    fireEvent.click(mondayButton);
    expect(mondayButton).toHaveClass('bg-black');

    // Click to deselect
    fireEvent.click(mondayButton);
    expect(mondayButton).toHaveClass('bg-white');
  });

  it('updates the trigger text when an option is selected', async () => {
    render(<FrequencyTestWrapper />);

    fireEvent.click(screen.getByRole('combobox'));

    const monthlyOption = await screen.findByText('Сар бүр');
    fireEvent.click(monthlyOption);

    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveTextContent('Сар бүр');
  });
});
